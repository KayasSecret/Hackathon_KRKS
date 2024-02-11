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


$email = $_POST["email"];
$password = $_POST["password"];

$login = false;
$showError = false;

$sql = "Select * from login where email = '$email' AND password = '$password'";
$result = mysqli_query($conn, $sql);
$num = mysqli_num_rows($result);
if($num == 1){
    $login = true;
   //echo 'logged in';
    //session_start();
    //$_SESSION['loggedin']= true;
    //$_SESSION['name'] = $name;
    header("location: index.html");
}
else{
    $showError = "Invalid Credentials";
    echo $showError;
}
?>
