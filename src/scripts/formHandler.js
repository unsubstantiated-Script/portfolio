$("form").submit(function (e) {
	e.preventDefault();

	// Resetting all the things if they have no errors...
	$(".info").html("");
	$("input").css("border", "#000 1px solid");
	$("textarea").css("border", "#000 1px solid");

	let valid = runValidation();

	return valid;
});

function runValidation() {
	let valid = true;
	let siteKey = $("#site-key").data("set");
	let secretKey = $("#secret-key").data("set");

	grecaptcha.execute(siteKey, { action: "submit" }).then(function (token) {
		const userName = $("#userName").val();
		const userEmail = $("#userEmail").val();
		const userSubject = $("#userSubject").val();
		const userPhone = $("#userPhone").val();
		const userMessage = $("#userMessage").val();

		if (!userName) {
			$("#userName-info").text("Required");
			$("#userName").css("border", "#e66262 1px solid");
			valid = false;
		}

		if (!userEmail) {
			$("#userEmail-info").html("Required");
			$("#userEmail").css("border", "#e66262 1px solid");
			valid = false;
		} else if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
			$("#userEmail-info").html("Invalid Email Address");
			$("#userEmail").css("border", "#e66262 1px solid");
			valid = false;
		}

		if (!userSubject) {
			$("#userSubject-info").text("Required");
			$("#userSubject").css("border", "#e66262 1px solid");
			valid = false;
		}

		if (!userPhone) {
			$("#userPhone-info").html("Required");
			$("#userPhone").css("border", "#e66262 1px solid");
			valid = false;
		} else if (
			!userPhone.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)
		) {
			$("#userPhone-info").html("Invalid Phone Number");
			$("#userEmail").css("border", "#e66262 1px solid");
			valid = false;
		}

		if (!userMessage) {
			$("#userMessage-info").html("Required");
			$("#userMessage").css("border", "#e66262 1px solid");
			valid = false;
		}

		if (valid) {
			$("#userName").val("");
			$("#userEmail").val("");
			$("#userSubject").val("");
			$("#userPhone").val("");
			$("#userMessage").val("");
		}

		if (valid) {
			sendData(userName, userEmail, userSubject, userPhone, userMessage, token);
		}

		return valid;
	});

	return valid;
}

async function sendData(
	userName,
	userEmail,
	userSubject,
	userPhone,
	userMessage,
	token,
) {
	const info = JSON.stringify({
		userName,
		userEmail,
		userSubject,
		userPhone,
		userMessage,
		captcha: token,
	});

	fetch("/verify", {
		method: "POST",
		headers: {
			Accept: "application/json, text/plain, */*",
			"Content-type": "application/json",
		},
		body: info,
	})
		.then((res) => res.json())
		.then((data) => {
			if (!data.success) {
				$("#alert-boxy")
					.css({ display: "block", "background-color": "#F8D7DA" })
					.text(data.msg)
					.fadeIn(100)
					.fadeOut(3000);
			}
			$("#alert-boxy")
				.css({ display: "block", "background-color": "#d4edda" })
				.text(data.msg)
				.fadeIn(100)
				.fadeOut(3000);
		});
}
