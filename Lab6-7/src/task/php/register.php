<?php
session_start();
$username = '';
$usernameCheck = false;
$login = '';
$loginCheck = false;
$password = '';
$passwordCheck = false;
$repeatPassword = '';
$repeatPasswordCheck = false;
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register</title>

    <link rel="icon" href="../../../../img/icons/racoon_animal_icon_123571.ico">
    <link rel="stylesheet" href="../styles/css/style.css?v=<?php echo time(); ?>">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous" defer></script>
</head>
<body>
<?php include('navbar.php'); ?>

<main class="container" role="main">
    <div class="row mt-3">
        <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <div class="content-section">
                <form action="" method="post" enctype="multipart/form-data" class="container__form">
                    <fieldset class="form-group">
                        <legend class="border-bottom mb-4">Join to our team!</legend>

                        <div class="form-group mb-3">
                            <label for="textUsername" id="labelUsername" class="form__label_username form-label">Username:</label>
                            <?php
                            if (isset($_POST['textUsername'])) {
                                $username = $_POST['textUsername'];

                                if (strlen($username) <= 3) {
                                    echo "<input type='text' name='textUsername' id='textUsername' class='form__text_username form-control form-control-lg is-invalid'>";
                                    echo "<div class='invalid-feedback'>Username length is less or equal than 3!</div>";
                                } else {
                                    echo "<input type='text' name='textUsername' id='textUsername' class='form__text_username form-control form-control-lg'>";
                                    $usernameCheck = true;
                                }
                            } else {
                                echo "<input type='text' name='textUsername' id='textUsername' class='form__text_username form-control form-control-lg'>";
                            }
                            ?>
                        </div>

                        <div class="form-group mb-3">
                            <label for="textLogin" id="labelLogin" class="form__label_login form-label">Login:</label>

                            <?php
                            function isCyrillic($text)
                            {
                                return preg_match('/[А-Яа-яЁёІіЇїЄє]/u', $text);
                            }

                            if (isset($_POST['textLogin'])) {
                                $login = $_POST['textLogin'];

                                if (isCyrillic($login)) {
                                    echo "<input type='text' name='textLogin' id='textLogin' class='form__text_login form-control form-control-lg is-invalid'>";
                                    echo "<div class='invalid-feedback'>Login has cyrillic symbols!</div>";
                                } else {
                                    echo "<input type='text' name='textLogin' id='textLogin' class='form__text_login form-control form-control-lg'>";
                                    $loginCheck = true;
                                }
                            } else {
                                echo "<input type='text' name='textLogin' id='textLogin' class='form__text_login form-control form-control-lg'>";
                            }
                            ?>
                        </div>

                        <div class="form-group mb-3">
                            <label for="password" id="labelPassword" class="form__label_password form-label">Password:</label>

                            <?php
                            if (isset($_POST['password']) && isset($_POST['repeatPassword'])) {
                                $password = $_POST['password'];
                                $repeatPassword = $_POST['repeatPassword'];
                                if ($password != $repeatPassword) {
                                    echo "<input type='password' name='password' id='password' class='form__password form-control form-control-lg is-invalid'>";
                                    echo "<div class='invalid-feedback'>Passwords don't match!</div>";
                                } else {
                                    echo "<input type='password' name='password' id='password' class='form__password form-control form-control-lg'>";
                                    $passwordCheck = true;
                                }
                            } else {
                                echo "<input type='password' name='password' id='password' class='form__password form-control form-control-lg'>";
                            }
                            ?>
                        </div>

                        <div class="form-group mb-3">
                            <label for="repeatPassword" id="labelRepeatPassword" class="form__label_repeat_password form-label">Repeat password:</label>

                            <?php
                            if (isset($_POST['password']) && isset($_POST['repeatPassword'])) {
                                $password = $_POST['password'];
                                $repeatPassword = $_POST['repeatPassword'];
                                if ($password != $repeatPassword) {
                                    echo "<input type='password' name='repeatPassword' id='repeatPassword' class='form__password form-control form-control-lg is-invalid'>";
                                    echo "<div class='invalid-feedback'>Passwords don't match!</div>";
                                } else {
                                    echo "<input type='password' name='repeatPassword' id='repeatPassword' class='form__password form-control form-control-lg'>";
                                    $repeatPasswordCheck = true;
                                }
                            } else {
                                echo "<input type='password' name='repeatPassword' id='repeatPassword' class='form__password form-control form-control-lg'>";
                            }

                            ?>
                        </div>

                        <div class="form-group mb-3">
                            <button type="submit" id="submitButton" class="form__button_submit btn btn-outline-dark">Sign in</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="border-top pt-3 pb-3">
                <small class="text-muted">
                    Already have an account? <a href="login.php" class="ml-2">Sign in!</a>
                </small>
            </div>
        </div>
        <?php
        include('sidebar.php')
        ?>
    </div>
    <?php
    if ($usernameCheck && $loginCheck && $passwordCheck && $repeatPasswordCheck) {
        try {
            $DB = new PDO("mysql:host=localhost;dbname=users_goods", "root", "");
            $DB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $sqlScript = "USE users_goods";
            $DB->exec($sqlScript);

            include('users_db_check.php');

            if (is_username_exist($DB, $username)) {
                echo "<div class='alert alert-danger'>Username '$username' is already exist!</div>";
            } elseif (is_login_exist($DB, $login)) {
                echo "<div class='alert alert-danger'>Login '$login' is already exist!</div>";
            } else {
                $sqlScript = "INSERT INTO users (username, login, password) VALUES (:username, :login, :password)";

                $statement = $DB->prepare($sqlScript);
                $statement->bindValue(":username", $username);
                $statement->bindValue(":login", $login);
                $statement->bindValue(":password", $password);

                $affectedRowsNumber = $statement->execute();
                if ($affectedRowsNumber > 0) {
                    echo "<div class='alert alert-success'>Data successfully added! Username: $username. Login: $login. Password: $password.</div>";
                } else {
                    echo "<div class='alert alert-success'>Data add failed!</div>";
                }
            }
        } catch (PDOException $exception) {
            echo "<div class='alert alert-danger'>Connection failed: " . $exception->getMessage() . "</div>";
        }
    }
    ?>
</main>

<footer class="footer">
    <?php include("footer.php") ?>
</footer>
</body>
</html>

