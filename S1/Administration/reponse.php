<?php
    $header = apache_request_headers();
    if(!empty($_POST['pseudo'])){
        $pseudo_par_defaut = "admin";
        $pseudo_saisi = htmlspecialchars($_POST['pseudo']);
        if($pseudo_saisi != $pseudo_par_defaut) {
            echo '<p class="color"> "Je ne vous trouve pas votre pseudo dans ma base de donnée" </p>';
        } else {
            if(isset($header['admin'])) {
                if($header['admin'] == "true") {
                    header('Admin: true');
                    echo "Bravo, le flag est: HACKYNOV{AbRiC0T}";
                } else {
                header('Admin: false');
                echo '<p class="color"> "Êtes-vous réelement Admin ? ù_ù" </p>';
                }
            } else {
                header('Admin: false');
                echo '<p class="color"> "Êtes-vous réelement Admin ? ù_ù" </p>';
            }
        }
    }
?>

<style type="text/css">
    <?php include('/style.css'); ?>
</style>

<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<link rel="stylesheet" href="style.css">
<title>
Formulaire
</title>
</head>
<body>
    <img src="Fond.PNG"  class="fond2" style="position:absolute;z-index:-1">
       <div class="container2" style="position:absolute;z-index:2">
       <img src="Logo.jpg"  class="img2">
       <h1 style="z-index:2">Bonjour,  <?php echo $_POST['pseudo'] ?></h1>
    </div>
</body>
</html>
