<?php

class GetByUserId{
    public static function getCartByUserId($id_user){
        include("../cn.php");
        $select = "SELECT * FROM cart c
        INNER JOIN product p ON c.id_product=p.id
        WHERE c.id_user='$id_user'";
        $response = mysqli_query($con, $select);
        $json = array();
        while ($row = mysqli_fetch_assoc($response)) { $json[] = $row; }
        return $json;
    }
    public static function getAddressByUserId($id_user){
        include("../cn.php");
        $select = "SELECT * FROM address WHERE id=(SELECT id_address FROM user WHERE id='$id_user')";
        $response = mysqli_query($con, $select);
        $json = array();
        while ($row = mysqli_fetch_assoc($response)) { $json[] = $row; }
        return $json;
    }
}