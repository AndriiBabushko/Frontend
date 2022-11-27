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
            <h1 class="title fs-4 text-center mb-2 pb-2 border-bottom" id="productsTitle">All products:</h1>
            <div class="mb-3 text-start fs-5 fw-normal border-bottom">
                <label class="form-label" for="sortBy">Sort by:</label>
                <select class="form-select form-select-lg" name="sortBy" id="sortBy">
                    <option selected>Choose one</option>
                    <option value="title">By Title</option>
                    <option value="price">By Price</option>
                    <option value="time">By Time</option>
                </select>
            </div>
            <div class="mb-3 pb-2 text-start fs-5 fw-normal border-bottom">
                <label class="form-label" for="">Sorting type:</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="sortingType" id="ascendingSort" value="ascendingSort" checked>
                    <label class="form-check-label" for="ascendingSort">Ascending sort</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="sortingType" id="descendingSort" value="descendingSort">
                    <label class="form-check-label" for="descendingSort">Descending sort</label>
                </div>
            </div>
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