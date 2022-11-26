<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="icon" href="../../../../img/icons/racoon_animal_icon_123571.ico">
    <link rel="stylesheet" href="../styles/css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">

    <title>RPRC - Admin Page</title>
</head>
<body>
<header class="header">
    <?php include("navbar.php") ?>
</header>

<main role="main" class="container main">
    <div class="row mt-3">
        <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12" id="tableBlock">
            <h1 class="title fs-4 text-center mb-2" id="adminTitle">Admin page</h1>
        </div>

        <?php include('sidebar.php'); ?>
    </div>
</main>

<footer class="footer">
    <?php include("footer.php") ?>
</footer>

<script type="module" defer>
    <?php require('../js/localStorageData.js'); ?>
    <?php require('../js/admin_page.js'); ?>
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous">
</script>
</body>