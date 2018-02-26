<?php
require_once("init.php");
@$iid=$_REQUEST["iid"];
@$count=$_REQUEST["count"];
if($iid){
  if($count>0){
    $sql="update furniture_shoppingcart set count=$count where iid=$iid";
    mysqli_query($conn,$sql);
  }else{
    $sql="delete from furniture_shoppingcart where iid=$iid";
    mysqli_query($conn,$sql);
  }
}