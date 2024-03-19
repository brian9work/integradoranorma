<?php
include("./cn.php");
include("./cors.php");

if(!isset($_GET['category'])) die("Error a recibir la categoria");

$category = intval($_GET['category'] ?? 0);
if($category <= 0 || $category >= 5 ) die("La categoria no es correcta");

// $sentenciaSesion = "SELECT * FROM product WHERE id_category=$category";

$sentenciaSesion = "SELECT p.id,p.name,p.imagen,p.description,p.dimensions,p.stock,p.price,cc.category,cb.brand
    FROM product p
    INNER JOIN cat_category cc ON p.id_category=cc.id
    INNER JOIN cat_brand cb ON p.id_brand=cb.id
    WHERE p.id_category=$category";

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
    // id
    // id_category
    // id_brand
    // name
    // imagen
    // description
    // specifications
    // dimensions
    // stock
    // price
    // discount
    // status
    // created_at
    // last_update
}
die(json_encode([
    "success" => true,
    "data" => $json
]));





















// if($resUser){
//     while ($row = mysqli_fetch_assoc($resUser)) {
//         $json[] = $row;
//     }
//     if(mysqli_num_rows($resUser)>0){
//         die(json_encode([
//             "success" => true,
//             "data" => $json
//         ]));
//     } else {
//         die(json_encode(["success" => false,"data" => "No hay productos"]));
//     }
// } else {
//     die(json_encode(["success" => false,"data" => "Error del server"]));
// }


// die("");
// if($resUser){
//     while ($row = mysqli_fetch_assoc($resUser)) {
//         $id = $row['id'];
//     }
//     if(mysqli_num_rows($resUser)>0){
//         die(json_encode([
//             "success" => true,
//             "data" => "Sesion exitosa",
//             "id" => $id
//         ]));
//     } else {
//         die(json_encode(["success" => false,"data" => "El correo o contraseña son incorrectos"]));
//     }
// } else {
//     die(json_encode(["success" => false,"data" => "Error del server"]));
// }
