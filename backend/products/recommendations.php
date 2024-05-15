<?php
include("../cn.php");
include("../cors.php");
include("../utils.php");
include("../search.php");

if(!isset($_GET['id_user'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del usuario"]));
$id = $_GET['id_user'];

if(!search::search_user($id)) response(0,"El $id del usuario no existe");

$sentencia = "SELECT COUNT(p.id_category) AS cantidad_categoria, cc.* FROM sale s
    INNER JOIN user u ON u.id=s.id_user
    INNER JOIN product p ON p.id=s.id_product
    INNER JOIN cat_category cc ON cc.id=p.id_category
    WHERE u.id=1
    GROUP BY p.id_category
    ORDER BY cantidad_categoria DESC LIMIT 1;
";
$response=mysqli_query($con,$sentencia);
$idCategory=mysqli_fetch_assoc($response)['id'];

$getCategories = "SELECT p.id,p.name,p.imagen,p.description,p.dimensions,p.stock,p.price,cc.category,cb.brand
    FROM product p
    INNER JOIN cat_category cc ON p.id_category=cc.id
    INNER JOIN cat_brand cb ON p.id_brand=cb.id
    WHERE p.id_category=$idCategory AND stock!=0
    ORDER BY RAND() LIMIT 4
";
$getGifs = "SELECT * FROM gifs";
$resGifs=mysqli_query($con,$getGifs);
$allGifs = array();
while ($rowGifs = mysqli_fetch_assoc($resGifs)) { $allGifs[] = $rowGifs['id_product']; }

$json = array();
$response=mysqli_query($con,$getCategories);
while ($row = mysqli_fetch_assoc($response)) {
    $row["isGif"] = in_array($row['id'], $allGifs) ? 1 : 0;
    $json[] = $row;
}
response(
    1,
    $json
);




// die($idCategory);

// $cat="";

// $json = array();
// while ($row = mysqli_fetch_assoc($response)) {
//     $cat = $row['id'];
//     // $json[] = $row;
//     // $json[] = array(
//     //     'id' => $row['id'],
//     //     'text' => $row['category'],
//     // );
// }
// die($cat);
// response(
//     1,
//     $json
// );