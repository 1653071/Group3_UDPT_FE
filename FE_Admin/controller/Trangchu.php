<?php

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
        $data = "Hello world !!!! ABC";
        $VIEW = "./view/DetailPage.phtml";
        require("./view/Layout/Sidebar.phtml");
    }
    public function TagPage()
    {
        $data = "Hello world !!!! ABC";
        $VIEW = "./view/Tag.phtml";
        require("./view/Layout/Sidebar.phtml");
    }
    public function BrowsePost()
    {
        $data = "Hello world !!!! ABC";
        $VIEW = "./view/browse-post.phtml";
        require("./view/Layout/Sidebar.phtml");
    }
    public function ExistPost()
    {
        $data = "Hello world !!!! ABC";
        $VIEW = "./view/post.phtml";
        require("./view/Layout/Sidebar.phtml");
    }
    public function ExistUser()
    {
        $data = "Hello world !!!! ABC";
        $VIEW = "./view/user.phtml";
        require("./view/Layout/Sidebar.phtml");
    }

}
?>