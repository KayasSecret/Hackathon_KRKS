<?php 
    $server = "localhost";
    $username = "root";
    $password = "";
    $dbname = "myDB";
    
    $con = mysqli_connect($server, $username, $password);
    
    if(!$con){
        die("connection to this database failed due to". mysqli_connect_error());
        
    }
    echo "Success fully connected to database";
    
    $sql = "CREATE DATABASE myDB";
    if ($conn->query($sql) === TRUE) {
        echo "Database created successfully";
    } else {
        echo "Error creating database: " . $conn->error;
    }
    
    $sql = "CREATE TABLE MyGuests (
                                    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                                    username VARCHAR(30) NOT NULL,
                                    email VARCHAR(50),
                                    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";
    
    

    if ($conn->query($sql) === TRUE) {
        echo "Table MyGuests created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }
    
    $username = $_POST["username"];
    $email = $_POST["email"];
    $stmt->execute();
    
    if (empty($_POST["username"])) {
        $nameErr = "Name is required";
    } else {
        $name = test_input($_POST["username"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z-' ]*$/",$username)) {
        $nameErr = "Only letters and white space allowed";
        }
    }

    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {
        $email = test_input($_POST["email"]);
        // check if e-mail address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    

    
    $stmt = $conn->prepare("INSERT INTO MyGuests (username, email) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $email);
    
    
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    // sql to delete a record
    /*
    $sql = "DELETE FROM MyGuests WHERE id=3";

    if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . $conn->error;
    }
    */

    $stmt->close();
    $con->close();
?>
