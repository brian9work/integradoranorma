<?php
include("../cn.php");
include("../cors.php");
include("../utils.php");
include("../search.php");

if(!isset($_GET['id_product'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del producto"]));
$id = $_GET['id_product'];

if(!search::search_product($id)) response(0,"El $id producto no existe");

$getProducts = "SELECT p.*,cc.category,cb.brand FROM product p
    INNER JOIN cat_brand cb ON p.id_brand=cb.id
    INNER JOIN cat_category cc ON p.id_category=cc.id
    WHERE p.id='$id'";
$resGetProducts=mysqli_query($con,$getProducts);
$json = array();
while ($row = mysqli_fetch_assoc($resGetProducts)) {
    $json[] = $row;
}
response(1,$json);


