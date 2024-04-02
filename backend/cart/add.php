<?php
include("../cn.php");
include("../cors.php");
include("../search.php");

if(!isset($_POST['id_user'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del usuario"]));
if(!isset($_POST['id_product'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del producto"]));

$id_user = $_POST['id_user'];
$id_product = $_POST['id_product'];

if(!Search::search_user($id_user)) die(json_encode(["success" => false,"data" => "El usuario no existe"]));
if(!Search::search_product($id_product)) die(json_encode(["success" => false,"data" => "El producto no existe"]));


$searchProduct = "SELECT COUNT(*) FROM cart WHERE id_user='$id_user' AND id_product='$id_product'";
$resSearchProduct=mysqli_query($con,$searchProduct);
if (mysqli_fetch_assoc($resSearchProduct)['COUNT(*)']>=1){
    die(json_encode(["success" => false,"data" => "El producto ya se habia agregado al carrito"]));}

$addToCart = "INSERT INTO cart (id_user, id_product) VALUES ($id_user, $id_product)";
// echo $addToCart;
$resAddToCart=mysqli_query($con,$addToCart);
if(!$resAddToCart) die(json_encode(["success" => false,"data" => "Hubo un error al insertar en el carrito"]));
die(json_encode(["success" => true,"data" => "Agregado al carrito"]));












// while ($row = mysqli_fetch_assoc($resSearchProduct)) {
//     $count = $row['COUNT(*)'];
// }
// echo json_encode($count);

// if($resSearchProduct){
//     if(mysqli_num_rows($resSearchProduct)!=1){
//         die(json_encode(["success" => false,"data" => "El producto ya se agrego al carrito"]));}}



// $addToCart = "INSERT INTO cart (id_user, id_product) VALUES ($id_user, $id_product)";


// die("Ta bien");

// $addToCart = "INSERT INTO `cart` (`id_user`, `id_product`) VALUES ($id_user, $id_product)";
// $resUser=mysqli_query($con,$addToCart);
// if($resUser){
//     if(mysqli_num_rows($resUser)>0){
//         die(json_encode(["success" => false,"data" => "El correo ya esta registrado"]));
//     }
// }


// INSERT INTO `cart` (`id_user`, `id_product`) VALUES ('1', '1')

// <?php
// include("./cn.php");
// include("./cors.php");

// if(!isset($_POST['name'])) json_encode(["success" => false,"error" => "Error a recibir name"]);
// if(!isset($_POST['spelitF'])) json_encode(["success" => false,"error" => "Error a recibir spelitF"]);
// if(!isset($_POST['spelitM'])) json_encode(["success" => false,"error" => "Error a recibir spelitM"]);
// if(!isset($_POST['email'])) json_encode(["success" => false,"error" => "Error a recibir email"]);
// if(!isset($_POST['password'])) json_encode(["success" => false,"error" => "Error a recibir password"]);


// $name = $_POST['name'];
// $spelitF = $_POST['spelitF'];
// $spelitM = $_POST['spelitM'];
// $email = $_POST['email'];
// $password = $_POST['password'];

// $sentenciaEmail = "SELECT * FROM user WHERE email='$email'";
// $resUser=mysqli_query($con,$sentenciaEmail);
// if($resUser){
//     if(mysqli_num_rows($resUser)>0){
//         die(json_encode(["success" => false,"data" => "El correo ya esta registrado"]));
//     }
// }

// $senUser = "INSERT INTO user (name, lastnameF, lastnameM, email, password) VALUES ('$name', '$spelitF', '$spelitM', '$email', '$password')";
// $resUser=mysqli_query($con,$senUser);
// if(!$resUser) die(json_encode(["success" => false,"data" => "Hubo un error al insertar en usuarios"]));
// echo json_encode(["success" => true]);
// die();
// ?>