<?php
class TagModel
{

    public static function createTag()
    {
        
        $name = $_REQUEST["tag-name"];
        $payload = json_encode( array( "tagName"=> $name  ) );
        // $data = array(
        //     'tagName' => 'blogger#post',
            
        // );
            
            $url = 'http://localhost:8080/api/tag/create_tags';
            $ch = curl_init($url);
            curl_setopt($ch,CURLOPT_POST, $url);
            curl_setopt( $ch, CURLOPT_POSTFIELDS, $payload );
            curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $result = curl_exec($ch);
            curl_close($ch);
            
        
    }
    
}
?>
