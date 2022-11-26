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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous" defer></script>

    <title>RPRC - Products</title>
</head>
<body>
<header class="header">
    <?php include("navbar.php") ?>
</header>

<main role="main" class="container main">
    <div class="row mt-3">
        <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <h1 class="title fs-4 text-center mb-2" id="productsTitle">All products:</h1>
            <!--            <div class="d-flex justify-content-center justify-content-lg-center justify-content-md-between align-items-center flex-wrap">-->
            <!--                <div class="card m-1 bg-dark text-light text-center" style="width: 250px">-->
            <!--                    <div class="card-header border-bottom">-->
            <!--                        <h5 class="card-title">Course</h5>-->
            <!--                    </div>-->
            <!--                    <div class="card-body border-bottom">-->
            <!--                        <p class="card-subtitle ">Price:</p>-->
            <!--                        <p class="card-text">...</p>-->
            <!---->
            <!--                        <p class="card-subtitle">Time to learn:</p>-->
            <!--                        <p class="card-text">...</p>-->
            <!--                    </div>-->
            <!--                    <div class="card-footer">-->
            <!--                        <a href="#" class="btn btn-outline-light" style="width: 100%">Buy</a>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
        </div>

        <?php include('sidebar.php'); ?>
    </div>
</main>

<footer class="footer">
    <?php include("footer.php") ?>
</footer>

<script type="module" defer>
    <?php require('../js/localStorageData.js'); ?>
    <?php require('../js/products.js'); ?>
</script>
</body>
</html>