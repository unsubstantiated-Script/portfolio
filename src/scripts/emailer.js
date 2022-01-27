function post2Email(userName, userEmail, userSubject, userPhone, userMessage) {
	let formData = { userName, userEmail, userSubject, userPhone, userMessage };

	//Rolling with some Ajax vs. fetch to get some reps...

	let xhr = new XMLHttpRequest();

	xhr.open("POST", "/postEmail");
	xhr.setRequestHeader("content-type", "application/json");
	xhr.onload = function () {
		console.log(xhr.responseText);
		let response = xhr.responseText;
		if (response === "success") {
			//Clearing fields here might wanna move back to main thing...
			$("#userName").val("");
			$("#userEmail").val("");
			$("#userSubject").val("");
			$("#userPhone").val("");
			$("#userMessage").val("");
			$("#alert-boxy")
				.css({ display: "block", "background-color": "#d4edda" })
				.text("Your email has been sent!")
				.fadeIn(100)
				.fadeOut(2000);
		} else {
			$("#alert-boxy")
				.css({ display: "block", "background-color": "#F8D7DA" })
				.text("Error: Something went wrong on the server")
				.fadeIn(100)
				.fadeOut(2000);
		}
	};

	xhr.send(JSON.stringify(formData));
}
