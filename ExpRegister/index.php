<?php
$servername = "localhost";
$username = "root";
$password = "riitk@guap1";
$database = "register";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql_create_database = "CREATE DATABASE IF NOT EXISTS register";

if ($conn->query($sql_create_database) === TRUE) {
  echo "<br>Database created successfully";
} else {
  echo "Error creating database: " . $conn->error;
}

$sql_create_table = "CREATE TABLE IF NOT EXISTS register (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone BIGINT NOT NULL,
    address VARCHAR(500),
    rooms INT,
    price DECIMAL(10,2),
    floor INT,
    booking DATETIME
)";

if ($conn->query($sql_create_table) === TRUE) {
    echo "<br>Table 'register' created successfully or already exists";
} else {
    echo "Error creating table: " . $conn->error;
}

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$address = $_POST["address"];
$rooms = $_POST["rooms"];
$price = $_POST["price"];
$floor = $_POST["floor"];
$booking = $_POST["booking"];

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
    
if (empty($_POST["phone"])) {
    $phoneErr = "Invalid phone number format";
 } else {
    $phone = $_POST["phone"];
        // check if phone is well-formed
        if (!filter_var($phone, FILTER_VALIDATE_INT)) {
        $phoneErr = "Invalid phone number format";
        }
    }
    
if (empty($_POST["address"])) {
    $addressErr = "Address is required";
 }
    
if (empty($_POST["rooms"])) {
    $emailErr = "Email is required";
 } else {
    $rooms = $_POST["rooms"];
        // check if rooms is well-formed
        if (!filter_var($rooms, FILTER_VALIDATE_INT)) {
        $roomsErr = "Invalid format for number of rooms";
        }
    }
    
if (empty($_POST["price"])) {
    $priceErr = "Invalid price format";
 } else {
    $prince = $_POST["price"];
        // check if price is well-formed
        if (!filter_var($price, FILTER_VALIDATE_FLOAT) && !filter_var($price, FILTER_VALIDATE_INT)) {
        $priceErr = "Invalid price format";
        }
    }
    
if (empty($_POST["floor"])) {
    $floorErr = "Invalid floor format";
 } else {
    $floor = $_POST["floor"];
        // check if floor is well-formed
        if (!filter_var($floor, FILTER_VALIDATE_FLOAT) && !filter_var($floor, FILTER_VALIDATE_INT)) {
        $floorErr = "Invalid floor format";
        }
    }
    
if (empty($_POST["booking"])) {
   $bookingDateErr = "Invalid booking date format";
}
   

    
$sql = "INSERT INTO register (name, email, phone, address, rooms, price, floor, booking) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssisidis", $name, $email, $phone, $address, $rooms, $price, $floor, $booking);
    if ($stmt->execute()) {
        echo "<br>New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
$stmt->close();

$conn->close();
?>