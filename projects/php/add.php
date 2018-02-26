<?php
require("init.php");
@$pid=$_REQUEST["pid"];
@$count=$_REQUEST["count"];
session_start();
@$uid=$_SESSION["uid"];
if($pid&&$count&&$uid){
   $sql="select * from furniture_shoppingcart where product_id=$pid and user_id=$uid";
	$result=mysqli_query($conn,$sql);
	if(!mysqli_fetch_row($result)){
	  $sql="insert into furniture_shoppingcart values(null,$uid,$pid,$count,0)";
	}else{
	  $sql="update furniture_shoppingcart set count=count+$count where product_id=$pid and user_id=$uid";
	}
	mysqli_query($conn,$sql);
}