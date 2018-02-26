<?php
require_once("init.php");
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];
if($uname&&$upwd){
$sql="insert into user (uid,uname,upwd) values (null,'$uname','$upwd')";
    mysqli_query($conn,$sql);
}
?>