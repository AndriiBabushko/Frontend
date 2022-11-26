<?php
session_start();
$is_admin = false;
if (isset($_SESSION["admin"]))
    $is_admin = $_SESSION["admin"];
?>

<nav class="navbar navbar-expand-lg navbar-light navbar-bg">
    <div class="container">
        <img src="../../../img/raccoon-logo-1.png" alt="logo" width="50" height="50" class="img-fluid">
        <a href="task.php" class="navbar-brand pl-2 text-wrap">Raccoon's Programming Courses</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class='nav-item'>
                    <a class='nav-link' href='products.php'>Products</a>
                </li>
                <?php
                if ($is_admin) {
                    echo "
                        <li class='nav-item'>
                            <a class='nav-link' href='admin_page.php'>Admin page</a>
                        </li>
                        ";
                }
                ?>
            </ul>
            <ul class="navbar-nav">
                <?php
                if ($is_admin) {
                    echo "
                        <li class='nav-item'>
                             <a class='nav-link' href='basket.php'>Basket</a>
                        </li>
                        ";
                    echo "
                        <li class='nav-item'>
                             <a class='nav-link' href='logout.php'>Logout</a>
                        </li>
                        ";
                } else {
                    echo "
                        <li class='nav-item'> 
                             <a class='nav-link' href='login.php'>Login</a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='register.php'>Register</a>
                        </li>
                        ";
                }
                ?>
            </ul>
        </div>
    </div>
</nav>