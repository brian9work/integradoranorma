<?php
// Sentencias
/*
"SELECT COUNT(*) AS ventas FROM `sale`";
"SELECT COUNT(*) AS usuarios FROM `user` WHERE id_user=3 and status=1;";
"SELECT COUNT(*) AS usuarios FROM `user` WHERE id_user=3 and status=0;";
"SELECT SUM(quantity) AS pz, s.id_product, p.name, p.imagen FROM sale s
    INNER JOIN product p ON p.id=s.id_product
    GROUP BY id_product";
"SELECT SUM(p.id_category) AS cantidad, p.id_category, cc.category FROM product p
    INNER JOIN cat_category cc ON cc.id=p.id_category
    GROUP BY id_category;";
"SELECT SUM(total) FROM sale";
"SELECT 
    SUM(s.quantity) AS productos_vendidos, 
    SUM(s.total) AS dinero, 
    s.id_product, cc.category 
    FROM sale s
        INNER JOIN product p ON p.id=s.id_product
        INNER JOIN cat_category cc ON cc.id=p.id_category
        GROUP BY p.id_category;
    ";
*/


require "./fpdf/fpdf.php";
require "../cn.php";
$width = 210;
$pdf = new FPDF('P', 'mm', 'A4');
$pdf->AddPage();
$pdf->Image("./assets/portada.png", 0, 0, $width, 300);

$pdf->AddPage();
$pdf->Image("./assets/p1.png", 0, 0, $width, 300);


$pdf->SetTextColor(10, 10, 10);
$pdf->SetFont('Arial', 'B', 30);

$sentencia = "SELECT COUNT(*) AS usuarios FROM `user` WHERE id_user=3 and status=1;";
$response = mysqli_query($con,$sentencia);
$usuarios = mysqli_fetch_assoc($response)['usuarios'];
$pdf->Text(115, 78, $usuarios);

$sentencia = "SELECT COUNT(*) AS usuarios FROM `user` WHERE id_user=3 and status=0;";
$response = mysqli_query($con,$sentencia);
$usuarios2 = mysqli_fetch_assoc($response)['usuarios'];
$pdf->Text(155, 124, $usuarios2);

$sentencia = "SELECT SUM(total) AS ventas FROM sale";
$response = mysqli_query($con,$sentencia);
$ventas = mysqli_fetch_assoc($response)['ventas'];
$pdf->Text(140,173, $ventas);

$sentencia = "SELECT COUNT(*) AS productos FROM sale";
$response = mysqli_query($con,$sentencia);
$productos = mysqli_fetch_assoc($response)['productos'];
$pdf->Text(175,223, $productos);

$pdf->AddPage();
$pdf->Image("./assets/bg.png", 0, 0, $width, 300);
$pdf->SetTextColor(10, 10, 10);
$pdf->SetFont('Arial', 'B', 25);
$pdf->Text(60,43, "Productos Vendidos");
$pdf->SetY(50);
$pdf->SetX(20);
$pdf->SetFont('Arial', '', 9);
$pdf->SetFillColor(255, 255, 255);
$pdf->cell(20, 7, "#", 1, 0, '', true);
$pdf->cell(20, 7, "Pz", 1, 0, '', true);
// $pdf->cell(30, 7, "Imagen", 1, 0, '', true);
$pdf->cell(130, 7, "Nombre", 1, 0, '', true);
$pdf->ln();

$sentencia = "SELECT SUM(quantity) AS pz, s.id_product, p.name, p.imagen FROM sale s
    INNER JOIN product p ON p.id=s.id_product
    GROUP BY id_product
    ORDER BY pz DESC
    ";
$response = mysqli_query($con,$sentencia);
while ($row = mysqli_fetch_array($response)) {
    $pdf->SetX(20);
    $pdf->cell(20, 7, $row["id_product"], 1);
    $pdf->cell(20, 7, $row["pz"], 1);
    // $pdf->cell(30, 7, substr($row["imagen"],1,20), 1);
    $pdf->cell(130, 7, $row["name"], 1);
    $pdf->Ln();
}

$pdf->AddPage();
$pdf->Image("./assets/categorias.png", 0, 0, $width, 300);
$pdf->SetTextColor(10, 10, 10);
$pdf->SetFont('Arial', 'B', 35);

$sentencia = "SELECT SUM(p.id_category) AS cantidad, p.id_category, cc.category FROM product p
    INNER JOIN cat_category cc ON cc.id=p.id_category
    GROUP BY id_category";
$response = mysqli_query($con,$sentencia);
$i=0;
while ($row = mysqli_fetch_array($response)) {
    $pdf->Text(28+$i,115, $row["cantidad"]);
    $i=$i+45;
}
$pdf->AddPage();
$pdf->Image("./assets/categorias2.png", 0, 0, $width, 300);
$pdf->SetTextColor(10, 10, 10);
$pdf->SetFont('Arial', 'B', 15);

$sentencia = "SELECT 
    SUM(s.quantity) AS productos_vendidos, 
    SUM(s.total) AS dinero, 
    s.id_product, cc.category 
    FROM sale s
        INNER JOIN product p ON p.id=s.id_product
        INNER JOIN cat_category cc ON cc.id=p.id_category
        GROUP BY p.id_category;
";
$response = mysqli_query($con,$sentencia);
$a=0;
$b=0;
while ($row = mysqli_fetch_array($response)) {
    $pdf->Text(45+$a,115, $row["dinero"]);
    $a=$a+39;

    $pdf->Text(55+$b,138, $row["productos_vendidos"]);
    $b=$b+39;
}
$pdf->Output();
