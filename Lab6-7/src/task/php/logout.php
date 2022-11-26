<?php
session_start();
unset($_SESSION['admin']);
unset($_SESSION['username']);
unset($_SESSION['login']);
unset($_SESSION['password']);
header("Location: login.php");
