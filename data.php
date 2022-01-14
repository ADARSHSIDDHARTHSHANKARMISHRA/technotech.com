<?php
if(isset($_GET["name"])){
    include "connetion.php";

    $name=$_GET["name"];
    $email=$_GET["email"];
    $address=$_GET["address"];
    $number=$_GET["number"];
    $state=$_GET["state"];
    $pincode=$_GET["pin"];
    $page=$_GET["page"];

    $sql="INSERT INTO `contact` VALUES('$name','$email','$address','$number','$state','$pincode');";
  //  $conn->query($sql);
  $result = mysqli_query($conn, $sql);
  
  //  header('Location: ' . $page);
   // die();
}

?>