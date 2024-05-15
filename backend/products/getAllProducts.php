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

$getGifs = "SELECT * FROM gifs";
$resGifs=mysqli_query($con,$getGifs);
$allGifs = array();
while ($rowGifs = mysqli_fetch_assoc($resGifs)) { $allGifs[] = $rowGifs['id_product']; }
// die(print_r($allGifs));

$json = array();
while ($row = mysqli_fetch_assoc($resProducts)) {
    $row["isGif"] = in_array($row['id'], $allGifs) ? 1 : 0;
    $json[] = $row;
    // $row["zzz"] = "Hola amigos";
    // print_r($row) ;
    // echo "<br/><br/>";
}
response(
    1,
    $json
);






