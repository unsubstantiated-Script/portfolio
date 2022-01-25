<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<link
			rel="stylesheet"
			href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
			integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
			crossorigin="anonymous"
		/>
		<link
			href="https://fonts.googleapis.com/css?family=Dosis"
			rel="stylesheet"
		/>
		<link
			rel="stylesheet"
			href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
			integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
			crossorigin="anonymous"
		/>
		<link rel="stylesheet" href="css/main.css" />
		<title>Contact Me | Professional Portfolio</title>
	</head>

	<body>
		<!-- Header -->
		<header id="header-inner" class="sub-head">
			<div class="container">
				<nav
					class="navbar navbar-expand-lg navbar-dark bg-light px-0"
					id="main-nav"
				>
					<a class="navbar-brand" id="logo" href="home.html"
						>Unsubstantiated Script</a
					>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item active">
								<a class="nav-link" href="home.html">Home</a>
							</li>
							<li class="nav-item active">
								<a class="nav-link" href="about-me.html">About Me</a>
							</li>
							<li class="nav-item active">
								<a class="nav-link" href="portfolio.html">Portfolio</a>
							</li>
							<li class="nav-item active">
								<a class="nav-link" href="#">Contact Me </a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>

		<!-- /*action="javascript:alert( 'success!' );"*/ -->
		<main>
			<section id="contact-a" class="text-center py-3">
				<div class="container my-3">
					<h2 class="section-title">Contact Me</h2>
					<div class="bottom-line"></div>
					<p class="lead">Here is how you can reach me</p>
					<form
						method="POST"
						name="contactForm"
						id="contactForm"
						action=""
						enctype="multipart/form-data"
					>
						<div class="text-fields">
							<div class="text-input name-input input-group">
								<label for="name">Name</label>
								<input
									type="text"
									class="text-input input-field"
									name="name"
									id="userName"
								/>
								<span id="userName-info" class="info"></span>
							</div>
							<div class="text-input email-input input-group">
								<label for="email">Email</label>
								<input
									type="text"
									class="text-input"
									name="email"
									id="userEmail"
								/>
								<span id="userEmail-info" class="info"></span>
							</div>
							<div class="text-input subject-input input-group">
								<label for="subject">Subject</label>
								<input
									type="text"
									class="text-input"
									name="subject"
									id="userSubject"
								/>
								<span id="userSubject-info" class="info"></span>
							</div>
							<div class="text-input phone-input input-group">
								<label for="name">Phone Number</label>
								<input
									type="text"
									class="text-input"
									name="phone"
									id="userPhone"
								/>
								<span id="userPhone-info" class="info"></span>
							</div>
							<div class="text-input message-input input-group">
								<label for="name">Message</label>
								<textarea
									class="text-message"
									name="message"
									id="userMessage"
								></textarea>
								<span id="userMessage-info" class="info"></span>
							</div>
							<div class="my-2">
								<div data-netlify-recaptcha="true"></div>
							</div>
						</div>
						<div
							class="g-recaptcha"
							data-sitekey="<?php echo SITE_KEY; ?>"
						></div>
						<div class="submit-group">
							<div id="alert-boxy" class="alert-box">
								Form Submitted Successfully!
							</div>

							<button type="submit" class="btn-dark mt-3 g-recaptcha">
								Submit
							</button>
						</div>
					</form>
				</div>
			</section>

			<!-- Section B: Contact Info -->
			<section id="contact-b" class="py-3 bg-dark">
				<div class="container">
					<div class="contact-info">
						<div>
							<i class="fas fa-envelope fa-2x my-3"></i>
							<h3>Email</h3>
							<p>unsubstantiated_script@gmail.com</p>
						</div>
						<div>
							<i class="fas fa-phone fa-2x my-3"></i>
							<h3>Phone</h3>
							<p>(509) 934-8927</p>
						</div>
						<div>
							<i class="fas fa-address-card fa-2x my-3"></i>
							<h3>Address</h3>
							<p>4904 N. Kari Rd. Otis Orchards, WA</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Section C: Tagline -->
			<section id="contact-c" class="bg-main py-4">
				<div class="container text-center">
					<h1>Ready For The Next Big Thing?</h1>
				</div>
			</section>
		</main>

		<!-- Footer -->
		<footer id="main-footer">
			<div class="footer-content container">
				<p class="my-3">
					Copyright &copy; 2020
					<br />
					Justin Fulton and unsubstantiatedScript
					<br />
					All Rights Reserved
				</p>
				<!-- Need to setup my media accounts -->
				<div class="social">
					<a
						href="https://github.com/unsubstantiated-Script?tab=repositories"
						class="fab fa-github"
						target="_blank"
					></a>
					<a
						href="https://www.linkedin.com/in/justin-fulton-b89168b4/"
						class="fab fa-linkedin"
						target="_blank"
					></a>
					<a
						class="fab fa-codepen"
						href="https://codepen.io/collection/DdLGLP"
						target="_blank"
					></a>
				</div>
			</div>
		</footer>

		<script
			src="https://code.jquery.com/jquery-3.6.0.min.js"
			integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
			crossorigin="anonymous"
		></script>
		<script src="https://www.google.com/recaptcha/api.js"></script>
		<script type="text/javascript">
			//reCaptcha script...
			function onSubmit(token) {
				document.getElementById("contactForm").submit();
			}

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
		</script>
		<script
			src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
			integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
			crossorigin="anonymous"
		></script>
		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
			integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
			crossorigin="anonymous"
		></script>
	</body>
</html>