<?php

class Search
{
    public static function search_user($id) {
        include("../cn.php");
        $search = "SELECT * FROM user WHERE id='$id'";
        $resSearch = mysqli_query($con, $search);
        if ($resSearch)
            if (mysqli_num_rows($resSearch) < 1)
                return false;

        return true;
    }
    public static function search_product($id) {
        include("../cn.php");
        $search = "SELECT * FROM product WHERE id='$id'";
        $resSearch = mysqli_query($con, $search);
        if ($resSearch)
            if (mysqli_num_rows($resSearch) < 1)
                return false;

        return true;
    }
    public static function search_cat_country($id) {
        include("../cn.php");
        $search = "SELECT * FROM cat_country WHERE id='$id'";
        $resSearch = mysqli_query($con, $search);
        if ($resSearch)
            if (mysqli_num_rows($resSearch) < 1)
                return false;

        return true;
    }

    public static function search_cat_brand($id) {
        include("../cn.php");
        $search = "SELECT * FROM cat_brand WHERE id='$id'";
        $resSearch = mysqli_query($con, $search);
        if ($resSearch)
            if (mysqli_num_rows($resSearch) < 1)
                return false;

        return true;
    }
    public static function search_cat_category($id) {
        include("../cn.php");
        $search = "SELECT * FROM cat_category WHERE id='$id'";
        $resSearch = mysqli_query($con, $search);
        if ($resSearch)
            if (mysqli_num_rows($resSearch) < 1)
                return false;

        return true;
    }
    public static function search_cat_user($id) {
        include("../cn.php");
        $search = "SELECT * FROM cat_user WHERE id='$id'";
        $resSearch = mysqli_query($con, $search);
        if ($resSearch)
            if (mysqli_num_rows($resSearch) < 1)
                return false;

        return true;
    }
    public static function search_cat_payment_method($id) {
        include("../cn.php");
        $search = "SELECT * FROM cat_payment_method WHERE id='$id'";
        $resSearch = mysqli_query($con, $search);
        if ($resSearch)
            if (mysqli_num_rows($resSearch) < 1)
                return false;

        return true;
    }
    public static function search_cat_payment_status($id) {
        include("../cn.php");
        $search = "SELECT * FROM cat_payment_status WHERE id='$id'";
        $resSearch = mysqli_query($con, $search);
        if ($resSearch)
            if (mysqli_num_rows($resSearch) < 1)
                return false;

        return true;
    }
    public static function search_cat_history_process($id) {
        include("../cn.php");
        $search = "SELECT * FROM cat_history_process WHERE id='$id'";
        $resSearch = mysqli_query($con, $search);
        if ($resSearch)
            if (mysqli_num_rows($resSearch) < 1)
                return false;

        return true;
    }
}
