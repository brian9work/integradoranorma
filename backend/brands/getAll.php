<?php
include("../cn.php");
include("../cors.php");


$getbrands = "SELECT * FROM cat_brand";
$resBrands=mysqli_query($con,$getbrands);
$json = array();
while ($row = mysqli_fetch_assoc($resBrands)) {
    $json[] = $row;
}
die(json_encode(["success" => false,"data" => $json]));


