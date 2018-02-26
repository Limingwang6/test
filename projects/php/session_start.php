<?php
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin:http://localhost:3000');	header('Access-Control-Allow-Credentials:true');

session_start();
@$output['uid'] = $_SESSION['loginUid'];
@$output['uname'] = $_SESSION['loginUname'];

echo json_encode($output);