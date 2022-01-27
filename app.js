const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const path = require("path");

app.use(morgan("tiny"));

app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/img", express.static(path.join(__dirname, "public/img")));

app.use(
	"/css",
	express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")),
);
app.use(
	"/js",
	express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")),
);
app.use(
	"/js",
	express.static(path.join(__dirname, "node_modules/jquery/dist")),
);

app.use(
	"/js",
	express.static(path.join(__dirname, "node_modules/popper.js/dist")),
);

//Routing in the javascript files
app.use("/java-script", express.static(path.join(__dirname, "src/scripts")));

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index", { title: "Home" });
});
app.get("/about-me", (req, res) => {
	res.render("about-me", { title: "About Me" });
});
app.get("/contact-me", (req, res) => {
	res.render("contact-me", {
		title: "Contact Me",
		googleUrl: `https://www.google.com/recaptcha/api.js?render=${process.env.SITE_KEY}`,
		siteKey: process.env.SITE_KEY,
		secretKey: process.env.SECRET_KEY,
	});
});

app.post("/verify", (req, res) => {
	if (!req.body.captcha) {
		res.json({ msg: "captcha token is undefined" });
	}
	const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${req.body.captcha}`;

	request(verifyUrl, (err, response, body) => {
		if (err) {
			console.log(err);
		}
		body = JSON.parse(body);

		if (!body.success || body.score < 0.4) {
			return res.json({
				msg: "Nice try botty McBotFace...",
				success: body.success,
				score: body.score,
			});
		}

		return res.json({
			msg: "Message Sent. Thank You!",
			success: body.success,
			score: body.score,
		});
	});
});
app.get("/portfolio", (req, res) => {
	res.render("portfolio", { title: "Portfolio" });
});

app.listen(port, (req, res) => {
	debug(`Listening on port ${chalk.green(port)}`);
});
