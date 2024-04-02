<?php
include("../cn.php");
include("../cors.php");

if(!isset($_GET['category'])) die("Error a recibir la categoria");

$category = intval($_GET['category'] ?? 0);
if($category <= -1 || $category >= 5 ) die("La categoria no es correcta");

$where = $category == 0 ? "" : "WHERE p.id_category=$category";


$sentenciaSesion = "SELECT p.id,p.name,p.imagen,p.description,p.dimensions,p.stock,p.price,cc.category,cb.brand
    FROM product p
    INNER JOIN cat_category cc ON p.id_category=cc.id
    INNER JOIN cat_brand cb ON p.id_brand=cb.id
    $where
    ORDER BY RAND()
";


$resUser=mysqli_query($con,$sentenciaSesion);

$json = array();
while ($row = mysqli_fetch_assoc($resUser)) {
    $json[] = $row;
    // $json[] = array(
    //     'id' => $r['id'],
    //     'name' => $r['name'],
    //     'imagen' => $r['imagen'],
    //     'description' => $r['description'],
    //     'dimensions' => $r['dimensions'],
    //     'stock' => $r['stock'],
    //     'price' => $r['price'],
    //     'category' => $r['category'],
    //     'brand' => $r['brand'],
    // );
}
die(json_encode([
    "success" => true,
    "data" => $json
]));






