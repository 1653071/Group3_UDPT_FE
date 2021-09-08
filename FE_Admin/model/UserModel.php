<?php
class UserModel
{

    public static function GetUsers()
    {
        // create & initialize a curl session
        $url = 'http://localhost:8080/api/user/get_users';
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HTTPGET, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response_json = curl_exec($ch);
        curl_close($ch);
        $response=json_decode($response_json, true);
        return $response;
    }
}
