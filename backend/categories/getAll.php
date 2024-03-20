<?php
include("../cn.php");
include("../cors.php");


$getCategories = "SELECT * FROM cat_category";
$resCategories=mysqli_query($con,$getCategories);
$json = array();
while ($row = mysqli_fetch_assoc($resCategories)) {
    // $json[] = $row;
    $json[] = array(
        'id' => $row['id'],
        'text' => $row['category'],
    );
}
die(json_encode(["success" => false,"data" => $json]));


