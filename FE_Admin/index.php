<?php
require_once("./controller/Trangchu.php");
$action = "";
if (isset($_REQUEST["action"]))
{    
    $action = $_REQUEST["action"];
}
switch ($action)
{
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
    case "detail":
        $controller= new HomeController();
        $controller->DetailPage();
        break;
    default:      
        $controller = new HomeController();
        $controller->BrowsePost();
        break;
    
}