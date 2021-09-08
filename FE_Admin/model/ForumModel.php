<?php
class ForumModel
{

    public static function getLegalQuestions()
    {
        // create & initialize a curl session
        $url = 'http://localhost:8080/api/forum/get_legal_questions';
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HTTPGET, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response_json = curl_exec($ch);
        curl_close($ch);
        $response=json_decode($response_json, true);
        return $response;
    }
    public static function getIllegalQuestions()
    {
        // create & initialize a curl session
        $url = 'http://localhost:8080/api/forum/get_illegal_questions';
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HTTPGET, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response_json = curl_exec($ch);
        curl_close($ch);
        $response=json_decode($response_json, true);
        return $response;
    }
    public static function DeleteForum()
    {
        // create & initialize a curl session
        $id = $_REQUEST["id-post"];
        $user_id = $_REQUEST["user-id-post"];
        $payload = json_encode( array(
        "forumId"=>$id,
        "userId"=>$user_id  ) );
        $url = 'http://localhost:8080/api/forum/delete_forum';
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
?>