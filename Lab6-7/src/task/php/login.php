<?php
include('users_db_check.php');
session_start();
$login = '';
$password = '';
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="icon" href="../../../../img/icons/racoon_animal_icon_123571.ico">
    <link rel="stylesheet" href="../styles/css/style.css?v=<?php echo time(); ?>">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
<?php include('navbar.php'); ?>

<main class="container" role="main">
    <div class="row mt-3">
        <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <div class="content-section">
                <?php
                try {
                    $DB = new PDO("mysql:host=localhost;dbname=users_goods", "root", "");
                    $DB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                    $sqlScript = "USE users_goods";
                    $DB->exec($sqlScript);
                } catch (PDOException $exception) {
                    echo "<div class='alert alert-danger'>Connection failed: " . $exception->getMessage() . "</div>";
                }
                ?>
                <form action="" method="post" enctype="multipart/form-data" class="container__form">
                    <fieldset class="form-group">
                        <legend class="border-bottom mb-4">Join to our team!</legend>

                        <div class="form-group mb-3">
                            <label for="textLogin" id="labelLogin" class="form__label_login form-label">Login:</label>
                            <?php
                            if (isset($_POST['textLogin'])) {
                                $login = $_POST['textLogin'];
                                $_SESSION["login"] = $login;

                                if (!is_login_exist($DB, $login)) {
                                    if ($login != '') {
                                        echo '<input type="text" name="textLogin" id="textLogin" class="form__text_login form-control form-control-lg is-invalid">';
                                        echo "<div class='invalid-feedback'>Login doesn't exist!</div>";
                                    }
                                } else {
                                    echo '<input type="text" name="textLogin" id="textLogin" class="form__text_login form-control form-control-lg">';
                                }
                            } else {
                                echo '<input type="text" name="textLogin" id="textLogin" class="form__text_login form-control form-control-lg">';
                            }
                            ?>
                        </div>

                        <div class="form-group mb-3">
                            <label for="password" id="labelPassword" class="form__label_password form-label">Password:</label>

                            <?php
                            if (isset($_POST['password'])) {
                                $password = $_POST['password'];
                                $_SESSION["password"] = $password;

                                if (is_password_correct($DB, $login, $password)) {
                                    $_SESSION["admin"] = get_user_id_by_login($DB, $login);
                                    header("Location: task.php");
                                } else {
                                    echo '<input type="password" name="password" id="password" class="form__password form-control form-control-lg is-invalid">';
                                    echo "<div class='invalid-feedback'>Password isn't correct!</div>";
                                }
                            } else {
                                echo '<input type="password" name="password" id="password" class="form__password form-control form-control-lg">';
                            }
                            ?>
                        </div>

                        <div class="form-group mb-3">
                            <button type="submit" id="submitButton" class="form__button_submit btn btn-outline-dark">Log in</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="border-top pt-3 pb-3">
                <small class="text-muted">
                    Need an account? <a href="register.php" class="ml-2">Sign up now!</a>
                </small>
            </div>
        </div>

        <?php include('sidebar.php'); ?>
    </div>
</main>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
</body>
</html>
