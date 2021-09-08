<?php
class CommentModel
{

    public static function deleteComment()
    {
        
        $idpost = $_REQUEST["id-post"];
        $iduser = $_REQUEST["user-id-post"];
        $idcomment = $_REQUEST["id-comment"];
        $payload = json_encode( array( "forumId"=> $idpost ,
        "userId"=>$iduser,
        "commentId"=>$idcomment
  ) );
        // $data = array(
        //     'tagName' => 'blogger#post',
            
        // );
            
            $url = 'http://localhost:8080/api/comment/delete_comment';
            $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response_json = curl_exec($ch);
        curl_close($ch);
        $response=json_decode($response_json, true);
        
        // header("Refresh:0; url=index.php?action=detail");
    }
    public static function GetComments($id)
    {
        // create & initialize a curl session
        $url = "http://localhost:8080/api/comment/get_comments/$id";
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HTTPGET, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response_json = curl_exec($ch);
        curl_close($ch);
        $response=json_decode($response_json, true);
        return $response;
    }
}
?>