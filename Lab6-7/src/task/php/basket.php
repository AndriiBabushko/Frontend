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

    <title>RPRC - Basket</title>
</head>
<body>
<header class="header">
    <?php include("navbar.php") ?>
</header>

<main role="main" class="container main">
    <div class="row mt-3">
        <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <h1 class="title fs-4 text-center mb-2" id="basketTitle">Your basket:</h1>
        </div>

        <?php include('sidebar.php'); ?>
    </div>
</main>

<footer class="footer">
    <?php include("footer.php") ?>
</footer>

<script type="module" defer>
    <?php require('../js/localStorageData.js'); ?>
    <?php require('../js/basket.js'); ?>
</script>
</body>
