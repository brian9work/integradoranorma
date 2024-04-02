<?php
include("../cn.php");
include("../cors.php");

$getUsers = "SELECT * FROM user WHERE id_user=1 ORDER BY id";
$resUsers=mysqli_query($con,$getUsers);

$json = array();
while ($row = mysqli_fetch_assoc($resUsers)) {
    $json[] = $row;
}
die(json_encode([
    "success" => true,
    "data" => $json
]));






