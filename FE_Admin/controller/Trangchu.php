<?php
require_once("./model/Login.php");
require_once("./model/UserModel.php");
require_once("./model/ForumModel.php");
require_once("./model/TagModel.php");

require_once("./model/CommentModel.php");

class HomeController
{
    public function index()
    {
        $data = "Hello world !!!! ABC";
        $VIEW = "./view/Trangchu.phtml";
        require("./view/Layout/Sidebar.phtml");
    }
    public function DetailPage()
    {  
        $forum_name = $_REQUEST["forum_name"];
        $content= $_REQUEST["forum_content"];
        $id =$_REQUEST["id-post"];
        $userID =$_REQUEST["userID"];
        $comments = CommentModel::GetComments($id);
        $VIEW = "./view/DetailPage.phtml";
        require("./view/Layout/Sidebar.phtml");
    }
    public function TagPage()
    {
        $data= TagModel::GetTags();
      
        $VIEW = "./view/Tag.phtml";
        require("./view/Layout/Sidebar.phtml");
    }
    public function BrowsePost()
    {
        $data = ForumModel::getIllegalQuestions();
        
        $VIEW = "./view/browse-post.phtml";
        require("./view/Layout/Sidebar.phtml");
    }
    public function ExistPost()
    {
        $data = ForumModel::getLegalQuestions();

        $tags = TagModel::GetTags();

        $VIEW = "./view/post.phtml";
        require("./view/Layout/Sidebar.phtml");
    }
    public function ExistUser()
    {
        $data = UserModel::GetUsers();
        $VIEW = "./view/user.phtml";
        require("./view/Layout/Sidebar.phtml");
    }
    public function LoginPage()
    {
        $data = "Hello world !!!! ABC";
        $VIEW = "./view/login.phtml";
        require("./view/Layout/Login.phtml");
    }
    public function RegisterPage()
    { 
        $data = "Hello world !!!! ABC";
        $VIEW = "./view/register.phtml";
        require("./view/Layout/Login.phtml");
    }
    public function Login(){
        if (isset($_POST["action"]) && $_POST["action"]=="login1" ){
            $username = $_POST["username"];
            $password = $_POST["password"];
            header('Location: index.php');
        }

    }
    public function createTag(){
         TagModel::createTag();
         header('Location: index.php');

    }
    public function deleteForum(){
        ForumModel::deleteForum();
        header('Location: index.php?action=post');

   }
   public function DeleteComment(){

  
    CommentModel::deleteComment();
    header("Location: index.php?action=post");
    
  }
  


}
?>