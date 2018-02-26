<?php
 header("Content-Type:application/json");
 require("init.php");
 @$uname=$_REQUEST["uname"];
 if($uname){
$sql="select * from user where uname='$uname'";
 $result=mysqli_query($conn,$sql);
 $row=mysqli_fetch_row($result);
 if($row!=null){
    echo "false";
 }else{
    echo "true";
 }
}


?>