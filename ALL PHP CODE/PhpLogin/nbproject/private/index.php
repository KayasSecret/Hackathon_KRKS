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

$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["pawssword"];

if (empty($_POST["name"])) {
    $nameErr = "Name is required";
} else {
    $name = $_POST["name"];
    // Check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
        $nameErr = "Only letters, hyphens, apostrophes, and spaces allowed";
    }
}
 if (empty($_POST["email"])) {
    $emailErr = "Email is required";
 } else {
    $email = $_POST["email"];
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
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
?>