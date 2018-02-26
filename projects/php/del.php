<?php
require("init.php");
$pid=$_REQUEST["pid"];
$sql="update furniture_product set expire='1' where pid=$pid";
$result=mysqli_query($conn,$sql);
if(mysqli_error($conn)){
  echo mysqli_error($conn);
}
$count=mysqli_affected_rows($conn);
if($count>0){
 echo '{ "code":-1,"msg":"删除失败"}';
}else{
  echo '{ "code":1,"msg":"删除成功"}';
}
