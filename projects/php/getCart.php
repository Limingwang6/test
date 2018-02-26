<?php
header("Content-Type:application/json");
session_start();
@$uid=$_SESSION["uid"];
require("init.php");
if($uid){
	$sql="SELECT iid,pid,title,spec,prev_price,current_price,count,(select md2 from furniture_pic where furniture_id=pid limit 1) as md FROM furniture_shoppingcart inner join furniture_product on product_id=pid WHERE user_id=$uid";
 	$result=mysqli_query($conn,$sql);
 	echo json_encode(mysqli_fetch_all($result,1));
 }