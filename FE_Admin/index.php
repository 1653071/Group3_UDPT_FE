<?php
require_once("./controller/Trangchu.php");
session_start();
$action = "";



if (!isset($_SESSION["user_id"])) {
    $controller = new HomeController();
    $controller->LoginPage();
}
if (isset($_REQUEST["action"])) {
    $action = $_REQUEST["action"];
}
switch ($action) {
    case "detail":
        $controller = new HomeController();
        $controller->DetailPage();
        break;

    case "logout":
        $controller = new HomeController();
        $controller->logout();
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
    case "legalize":
        $controller = new HomeController();
        $controller->LegalizeForum();
        break;
    case "search":
        $controller = new HomeController();
        $controller->SearchForum();
        break;
    case "detail-user":
        $controller = new HomeController();
        $controller->DetailUser();
        break;
    case "ranking":
        $controller = new HomeController();
        $controller->RankingPage();
        break;
    case "delete-user":
        $controller = new HomeController();
        $controller->DeleteUser();
        break;
    default:
        $controller = new HomeController();
        $controller->BrowsePost();
        break;
}
