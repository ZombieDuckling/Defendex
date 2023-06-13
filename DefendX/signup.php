<?php
// Retrieve form data
$fullName = $_POST['full_name'];
$email = $_POST['email'];
$password = $_POST['password'];

// TODO: Validate the form data and perform necessary checks

// Create a database connection
$servername = "your_servername";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

$con = mysqli_connect("localhost","root","","defend");

// Check connection
