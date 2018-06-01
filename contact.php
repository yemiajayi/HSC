<!DOCTYPE html>
<html>
	<head>
		<title>Contact Us</title>
	</head>

	<body>
		<?php
			echo '<h2>Contact us</h2>';

			$name = $_POST['names'];
			$email = $_POST['e-mail'];
			$message = $_POST['message'];

			echo 'Thanks ' . $name . 'for contacting us. We\'ll get back to you shortly through' . $email . ;
			echo 'You have sent us: <i>' . $message . '</i>';
		?>
	</body>
</html>