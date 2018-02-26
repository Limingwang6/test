<?php
header("Content-Type:application/json");
require("init.php");
$sql="select * from furniture_carousel";

echo json_encode
     (mysqli_fetch_all(mysqli_query($conn,$sql),1));