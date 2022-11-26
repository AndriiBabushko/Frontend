<?php
function is_username_exist($DB, $username): bool
{
    $sqlScript = "SELECT username FROM users";
    $DB_usernames = $DB->query($sqlScript);

    while ($row = $DB_usernames->fetch()) {
        $DB_username = $row["username"];
        if ($DB_username == $username)
            return true;
    }

    return false;
}

function is_login_exist($DB, $login): bool
{
    $sqlScript = "SELECT login FROM users";
    $DB_logins = $DB->query($sqlScript);

    while ($row = $DB_logins->fetch()) {
        $DB_login = $row["login"];
        if ($DB_login == $login)
            return true;
    }

    return false;
}

function is_password_correct($DB, $login, $password): bool
{
    $sqlScript = "SELECT password FROM users WHERE login = :login";

    $statement = $DB->prepare($sqlScript);
    $statement->bindvalue(":login", $login);
    $statement->execute();

    foreach ($statement as $row) {
        $DB_password = $row["password"];
        if ($DB_password == $password)
            return true;
    }

    return false;
}

function get_user_id_by_login($DB, $login): int
{
    $sqlScript = "SELECT * FROM users WHERE login = :login";

    $statement = $DB->prepare($sqlScript);
    $statement->bindvalue(":login", $login);
    $statement->execute();
    $row = $statement->fetch();

    return $row["id"];
}
