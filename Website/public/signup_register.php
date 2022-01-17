<?php
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $terms = $_POST["terms"];
?>

<html>
<head> <meta charset="utf-8" /> </head>
<body>

    <nav class="navbar"></nav>

    <h1> Ολοκλήρωση εγγραφής χρήστη </h1>
    <p> <a href="signup.html">Επιστροφή</a> </p>
    <p> Η εγγραφή σας ολοκληρώθηκε επιτυχώς! </p>
    <p>
        username = <?= $username ?> <br/>
        email = <?= email ?> <br/>
        password = <?= $password ?> <br/>
        terms = <?= $terms ?> <br/>
    </p>

    <footer></footer>

   <script src="js/nav.js"></script>
   <script src="js/footer.js"></script>

</body>
</html>