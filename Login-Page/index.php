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

$sql_create_table = "CREATE TABLE IF NOT EXISTS login (
                        name VARCHAR(30) NOT NULL,
                        email VARCHAR(50)
                    )";

if ($conn->query($sql_create_table) === TRUE) {
    echo "<br>Table 'login' created successfully or already exists";
} else {
    echo "Error creating table: " . $conn->error;
}

$name = $_POST["name"];
$email = $_POST["email"];

if (empty($_POST["name"])) {
    $nameErr = "Name is required";
    
} else {
    $name = $_POST["name"];
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
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
    
$sql = "INSERT INTO login (name, email)
VALUES ('$name','$email')";

if ($conn->query($sql) === TRUE) {
  echo "<br>New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>