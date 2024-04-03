<?php
include("../cn.php");
include("../cors.php");
include("../utils.php");

$getProducts = "SELECT p.id,p.name,p.imagen,p.description,p.dimensions,p.stock,p.price,cc.category,cb.brand
    FROM product p
    INNER JOIN cat_category cc ON p.id_category=cc.id
    INNER JOIN cat_brand cb ON p.id_brand=cb.id
    ORDER BY p.id DESC
    ";

$resProducts=mysqli_query($con,$getProducts);

$json = array();
while ($row = mysqli_fetch_assoc($resProducts)) {
    $json[] = $row;
}
response(
    1,
    $json
);






