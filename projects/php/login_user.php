<?php
//data/user/login.php
//data/init.php
header("Content-Type:application/json charset=utf8");
require_once("init.php");
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];
if($uname&&$upwd){
  $sql="select uid,uname from furniture where uname='$uname' and binary upwd='$upwd'";
  $row=mysqli_fetch_all(mysqli_query($conn,$sql),1);
  if(count($row)){
    session_start();
    $_SESSION["uid"]=$row[0]["uid"];
    echo json_encode(["ok"=>1,"msg"=>$row[0]["uname"]]);
  }else
    echo json_encode(["ok"=>0,"msg"=>"用户名或密码错误"]);
}