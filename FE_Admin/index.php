<?php
require_once("./controller/Trangchu.php");
$action = "";


if (isset($_REQUEST["action"])) {
    $action = $_REQUEST["action"];
}


switch ($action) {
    case "detail":
        $controller = new HomeController();
        $controller->DetailPage();
        break;


    case "tag-list":
        $controller = new HomeController();
        $controller->TagPage();
        break;
    case "tag-list":
        $controller = new HomeController();
        $controller->TagPage();
        break;
    case "post":
        $controller = new HomeController();
        $controller->ExistPost();
        break;
    case "user":
        $controller = new HomeController();
        $controller->ExistUser();
        break;

    
    case "login":
        $controller = new HomeController();
        $controller->LoginPage();
        break;
    case "login1":
        $controller = new HomeController();
        $controller->Login();
        break;

    case "register":
        $controller = new HomeController();
        $controller->RegisterPage();
        break;
    case "add-tag":
        $controller = new HomeController();
        $controller->createTag();

        break;
    case "delete-forum":
        $controller = new HomeController();
        $controller->DeleteForum();

        break;
    case "delete-comment":
        $controller = new HomeController();
        $controller->DeleteComment();
        break;
    default:
        $controller = new HomeController();
        $controller->BrowsePost();
        break;
}
