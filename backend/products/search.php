<?php
include("../cn.php");
include("../cors.php");
include("../utils.php");
include("../search.php");

if(!isset($_GET['search'])) die(json_encode(["success" => false,"error" => "Error a recibir la busqueda"]));
$search = $_GET['search'];

$getProducts = "SELECT p.*,cc.category,cb.brand FROM product p
    INNER JOIN cat_brand cb ON p.id_brand=cb.id
    INNER JOIN cat_category cc ON p.id_category=cc.id
    WHERE p.name LIKE '%$search%'";
$response=mysqli_query($con,$getProducts);
$json = array();
while ($row = mysqli_fetch_assoc($response)) {
    $json[] = $row;
}
response(1,$json);


