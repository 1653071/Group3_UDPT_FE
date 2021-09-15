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
    public static function GetRanking()
    {
        // create & initialize a curl session
        $url = 'http://localhost:8080/api/chart/get_chart';
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HTTPGET, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response_json = curl_exec($ch);
        curl_close($ch);
        $response=json_decode($response_json, true);
        return $response;
    }
    public static function GetCommentByUser($id)
    {
        // create & initialize a curl session
        $url = "http://localhost:8080/api/forum/get_forum_by_user/$id";
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HTTPGET, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response_json = curl_exec($ch);
        curl_close($ch);
        $response=json_decode($response_json, true);
        return $response;
    }
    public static function DeleteUser($user_id)
    {
        // create & initialize a curl session
        $id = $_REQUEST["id-post"];
        $user_id = $_REQUEST["userid"];
        $payload = json_encode( array(
        "myUserId"=>"04865490-d3ce-493e-b4a2-b1752c1855ef",
        "userId"=>$user_id  ) );
        $url = 'http://localhost:8080/api/user/delete_user';
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response_json = curl_exec($ch);
        curl_close($ch);
        $response=json_decode($response_json, true);
        
    }
}
