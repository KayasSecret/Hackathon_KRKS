<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rent Pay - The rental house</title>

    <!--Logo-->
    <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon">
	
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <h2>Rent Pay : Login Form</h2>
	<div class="container" id="container">
		<div class="form-container sign-up-container">
			<form action="login.php" method="post">
				<h1>Create Account</h1>
				<div class="social-container">
					<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
					<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
					<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
				</div>
				<span>or use your email for registration</span>
				<input type="text" placeholder="Name" />
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button type="submit">Sign Up</button>
			</form>
		</div>
		<div class="form-container sign-in-container">
			<form action="login.php" method="post">
				<h1>Sign in</h1>
				<div class="social-container">
					<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
					<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
					<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
				</div>
				<span>or use your account</span>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<a href="#">Forgot your password?</a>
				<button>Sign In</button>
			</form>
		</div>
		<div class="overlay-container">
			<div class="overlay">
				<div class="overlay-panel overlay-left">
					<h1>Welcome Back!</h1>
					<p>To keep connected with us please login with your personal info</p>
					<button class="ghost" id="signIn">Sign In</button>
				</div>
				<div class="overlay-panel overlay-right">
					<h1>Hello, Tenant</h1>
					<p>Your house will be sold in this form <br>
					Only then will you come to a rented house</p>
					<button class="ghost" id="signUp">Sign Up</button>
				</div>
			</div>
		</div>
	</div>


	<!-- php code -->

	<?php
		$servername = "localhost";
		$username = "root";
		$password = "riitk@guap1";
		$database = "login";

		// Create connection
		$conn = new mysqli($servername, $username, $password, $database);

		// Check connection
		if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
		}
		echo "Connected successfully";

		$sql_create_database = "CREATE DATABASE IF NOT EXISTS login";

		if ($conn->query($sql_create_database) === TRUE) {
		echo "<br>Database created successfully";
		} else {
		echo "Error creating database: " . $conn->error;
		}

		$sql_create_table = "CREATE TABLE IF NOT EXISTS users (
			id INT AUTO_INCREMENT PRIMARY KEY,
			name VARCHAR(50) NOT NULL,
			password VARBINARY(64) NOT NULL,
			email VARCHAR(100)
		)";

		if ($conn->query($sql_create_table) === TRUE) {
			echo "<br>Table 'users' created successfully or already exists";
		} else {
			echo "Error creating table: " . $conn->error;
		}

		function is_strong_password($password) {
			// Define password strength criteria
			$min_length = 8;
			$has_uppercase = preg_match('/[A-Z]/', $password);
			$has_lowercase = preg_match('/[a-z]/', $password);
			$has_number = preg_match('/\d/', $password);
			$has_special_char = preg_match('/[^a-zA-Z\d]/', $password); // Special characters are anything that is not a letter or a number

			// Check if the password meets the criteria
			return strlen($password) >= $min_length && $has_uppercase && $has_lowercase && $has_number && $has_special_char;
		}
		if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$name = $_POST["name"];
		$email = $_POST["email"];
		$password = $_POST["password"];

		if (empty($_POST["name"])) {
			$nameErr = "Name is required";
		} else {
			$name = $_POST["name"];
			// Check if name only contains letters and whitespace
			if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
				$nameErr = "Only letters, hyphens, apostrophes, and spaces allowed";
			}
		}
		if (empty($email)) {
                    $emailErr = "Email is required";
                } else {
                    // check if e-mail address is well-formed
                    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        $emailErr = "Invalid email format";
                    } else {
                        // Check if email already exists in the database
                        $sql_check_email = "SELECT id FROM users WHERE email = ?";
                        $stmt = $conn->prepare($sql_check_email);
                        $stmt->bind_param("s", $email);
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if ($result->num_rows > 0) {
                            $emailErr = "Email already exists";
                        }
                        $stmt->close();
                        }
                    }
			
		if (empty($password)) {
			$passwordErr = "Password is required";
		} elseif (!is_strong_password($password)) {
			$passwordErr = "Password must be at least 8 characters long and contain uppercase letters, lowercase letters, numbers, and special characters";
		}
			
		$sql = "INSERT INTO users (name, email, password)
		VALUES ('$name','$email','$password')";

		if ($conn->query($sql) === TRUE) {
		echo "<br>New record created successfully";
		} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
		}

		$conn->close();
		}
    ?>


	<script src="app.js"></script>
</body>
</html>
