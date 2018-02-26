<?php
header("Content-Type:application/json");
require("init.php");
@$pid=$_REQUEST["pid"];
$output=[];
if($pid){
 $sql="select * from furniture_product where pid=$pid";
 $output["product_info"]=mysqli_fetch_all(mysqli_query($conn,$sql),1)[0];
 
 $sql="select * from furniture_pic where furniture_id=(select furniture_id from furniture_product where pid=$pid)";
 $output["icon_list"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);

 $family_id=$output["product_info"]["pid"];
 $sql="select fid from furnitures where pid=$family_id";
 $output["specs"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
 echo json_encode($output);
}