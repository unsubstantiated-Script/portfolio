$("form").submit(function (e) {
	e.preventDefault();
	var valid = true;
	var userName = $("#userName").val();
	var userEmail = $("#userEmail").val();
	var userSubject = $("#userSubject").val();
	var userPhone = $("#userPhone").val();
	var userMessage = $("#userMessage").val();

	// Resetting all the things if they have no errors...
	$(".info").html("");
	$("input").css("border", "#000 1px solid");
	$("textarea").css("border", "#000 1px solid");

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

		$("#alert-boxy").css("display", "block").fadeIn(100).fadeOut(3000);
	}

	return valid;
});
