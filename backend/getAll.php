<?php

class getAll
{
    public static function getUsers()
    {
        include("../cn.php");
        $select = "SELECT * FROM user WHERE id=3";
        $response = mysqli_query($con, $select);

        $json = array();
        while ($row = mysqli_fetch_assoc($response)) { $json[] = $row; }
        return $json;
    }
    public static function getAdmins()
    {
        include("../cn.php");
        $select = "SELECT * FROM user WHERE id=1";
        $response = mysqli_query($con, $select);

        $json = array();
        while ($row = mysqli_fetch_assoc($response)) { $json[] = $row; }
        return $json;
    }
    public static function getCountrys()
    {
        include("../cn.php");
        $select = "SELECT * FROM cat_country";
        $response = mysqli_query($con, $select);

        $json = array();
        while ($row = mysqli_fetch_assoc($response)) { $json[] = $row; }
        return $json;
    }
    public static function getBrands()
    {
        include("../cn.php");
        $select = "SELECT * FROM cat_brand";
        $response = mysqli_query($con, $select);

        $json = array();
        while ($row = mysqli_fetch_assoc($response)) { $json[] = $row; }
        return $json;
    }
    public static function getCategories()
    {
        include("../cn.php");
        $select = "SELECT * FROM cat_category";
        $response = mysqli_query($con, $select);

        $json = array();
        while ($row = mysqli_fetch_assoc($response)) { $json[] = $row; }
        return $json;
    }
    public static function getCatUser()
    {
        include("../cn.php");
        $select = "SELECT * FROM cat_user";
        $response = mysqli_query($con, $select);

        $json = array();
        while ($row = mysqli_fetch_assoc($response)) { $json[] = $row; }
        return $json;
    }
    public static function getCatPaymentMethod()
    {
        include("../cn.php");
        $select = "SELECT * FROM cat_payment_method";
        $response = mysqli_query($con, $select);

        $json = array();
        while ($row = mysqli_fetch_assoc($response)) { $json[] = $row; }
        return $json;
    }
    public static function getCatPaymentStatus()
    {
        include("../cn.php");
        $select = "SELECT * FROM cat_payment_status";
        $response = mysqli_query($con, $select);

        $json = array();
        while ($row = mysqli_fetch_assoc($response)) { $json[] = $row; }
        return $json;
    }
    public static function getCatHistoryProcess()
    {
        include("../cn.php");
        $select = "SELECT * FROM cat_history_process";
        $response = mysqli_query($con, $select);

        $json = array();
        while ($row = mysqli_fetch_assoc($response)) { $json[] = $row; }
        return $json;
    }
}
