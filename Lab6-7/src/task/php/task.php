<?php session_start(); ?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="icon" href="../../../../img/icons/racoon_animal_icon_123571.ico">
    <link rel="stylesheet" href="../styles/css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

    <title>RPRC</title>
</head>
<body>
<header class="header">
    <?php include("navbar.php") ?>
</header>

<main role="main" class="container main">
    <div class="row mt-3">
        <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <?php
            //                    $DB = new PDO("mysql:host=localhost;dbname=users_goods;charset=utf8", "root", "");
            //                    $DB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            //                    $sqlScript = "CREATE DATABASE users_goods;";
            //                    $DB->exec($sqlScript);
            //
            //                    $sqlScript = "DROP DATABASE user;";
            //                    $DB->exec($sqlScript);
            //                    $sqlScript = "DROP TABLE users;";
            //                    $DB->exec($sqlScript);
            //                    $sqlScript = "DROP TABLE goods;";
            //                    $DB->exec($sqlScript);
            //
            //                    $sqlScript = "CREATE TABLE users(
            //                        id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
            //                        username VARCHAR(30) NOT NULL,
            //                        login VARCHAR(30) NOT NULL,
            //                        password VARCHAR(30) NOT NULL
            //                    );";
            //                    $DB->exec($sqlScript);
                echo "<h1 class='title fs-4 text-center mb-2'>Hello, " . $_SESSION['login'] . "</h1>";
            ?>
        </div>

        <?php include('sidebar.php'); ?>
    </div>
</main>

<footer>
    <?php include('footer.php') ?>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
</body>
</html>
