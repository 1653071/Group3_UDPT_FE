<?php
class LoginModel
{
    public static function login() {
        session_start();
        if (isset($_POST["action"])){
            $username = $_POST["username"];
            $password = $_POST["password"];
            $payload = json_encode( array(
                "username"=>$username,
                "password"=>$password
             ) );
            $url = 'http://localhost:8080/api/user/signIn';
            $ch = curl_init($url);
            curl_setopt($ch,CURLOPT_POST,$url);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
            curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $response_json = curl_exec($ch);
            
            $a=curl_getinfo($ch, CURLINFO_HTTP_CODE);
       
            if($a == '200') {
                $response= json_decode($response_json,true);
                header('Location: index.php');
            }
            else{
                header('Location: http://localhost:4000/index.php?action=login');
            }
            curl_close($ch);
        }
    }
    
}
?>
