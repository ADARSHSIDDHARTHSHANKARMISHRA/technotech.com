<?php
$hostname='localhost';
$username='root';
$password='yogita@84';
$db='form';

$conn=new mysqli($hostname,$username,$password,$db);
if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}else{
    echo "Successfuly conected";
}

?>