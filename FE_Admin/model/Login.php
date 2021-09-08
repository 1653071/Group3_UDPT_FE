<?php
class CongViecModel
{
    public static function login($username , $password) {
        session_start();
        if (isset($_POST["action"])){
            $username = $_POST["username"];
            $password = $_POST["password"];
            header('Location: index.php');
        }
    }
    
}
?>
