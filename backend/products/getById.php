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

$getGifs = "SELECT * FROM gifs";
$resGifs=mysqli_query($con,$getGifs);
$allGifsId = array();
while ($rowGifs = mysqli_fetch_assoc($resGifs)) { 
    $allGifsId[] = $rowGifs['id_product']; 
}

$resGetProducts=mysqli_query($con,$getProducts);
$json = array();
while ($row = mysqli_fetch_assoc($resGetProducts)) {
    $id = $row['id'];
    $gif=$row['imagen'];

    $getGifs = "SELECT gif FROM gifs WHERE id_product='$id' LIMIT 1";
    $resGifs=mysqli_query($con,$getGifs);
    $rowGifs = mysqli_fetch_assoc($resGifs);

    if (isset($rowGifs['gif'])) {
        $gif = $rowGifs['gif'];
    }
    $row["isGif"] = in_array($row['id'], $allGifsId) ? 1 : 0;
    $row["gif"] = $gif;
    $json[] = $row;
}
response(1,$json);


