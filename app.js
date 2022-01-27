const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const nodemailer = require("nodemailer");
const compression = require("compression");
const helmet = require("helmet");

require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

const app = express();
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(compression());

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
	//Verify post call for the contact-form
	if (!req.body.captcha) {
		res.json({ msg: "captcha token is undefined" });
	}
	const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${req.body.captcha}`;

	request(verifyUrl, (err, response, body) => {
		if (err) {
			debug("verification error:" + err);
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
			success: body.success,
			score: body.score,
		});
	});
});

// Once verify is done, need to run a new request "/postEmail"
app.post("/postEmail", (req, res) => {
	//console.log(req.body);

	//If gmail...
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	// //Other email services
	// const transporter = nodemailer.createTransport({
	// 	host: "WEBHOST_GOES_HERE",
	// 	port: "PORT_NUMBER_GOES_HERE",
	// 	auth: {
	// 		user: USER,
	// 		pass: PASSWORD,
	// 	},
	// });

	const mailOptions = {
		from: req.body.userEmail,
		to: process.env.EMAIL,
		subject: `Subject:${req.body.userSubject}, From: ${req.body.userEmail}`,
		text: `Message: ${req.body.userMessage}\r\rContact Phone: ${req.body.userPhone}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			debug("transporter error:" + error);
			res.send("error");
		} else {
			debug(`Email sent: ${info.response}`);
			res.send("success");
		}
	});
});

app.get("/portfolio", (req, res) => {
	res.render("portfolio", { title: "Portfolio" });
});

app.listen(port, (req, res) => {
	debug(`Listening on port ${chalk.green(port)}`);
});
