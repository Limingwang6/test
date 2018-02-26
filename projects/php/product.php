<?php
header("Content-Type:application/json");
require_once("init.php");
$sql="select *,(select md from furniture_pic where furniture_id=pid limit 1) as md,md,md2 from furniture_product";

$pageSize=12;
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,1);
$count=count($rows);
@$pno=$_REQUEST["pno"];
if(!$pno){ $pno=1; }
$sql.=" limit ".($pno-1)*$pageSize.",$pageSize";
$output=[
 "pageSize"=>$pageSize,
 "count"=>$count,
 "pageCount"=>ceil($count/$pageSize),
 "pno"=>$pno,
 "data"=>mysqli_fetch_All(mysqli_query($conn,$sql),1)
];	
echo json_encode($output);