<?php
    $Step1 = 'decodeURI("String.fromCharCode%2869,120,116,101,110,100,84,104,101,84,105,109,101%29")';
    $Step2 = "0852";
    $Step3 = "Sat Apr 01 2023 00:00:00 GMT+0200 (heure d’été d’Europe centrale)";

    $result = "Echec ! Le virus FEUR a infecté le monde. &#128561";
    $img = "img/no.png";
    $lien = true;

    if (empty($_POST['Step1'])) {
        $_POST['Step1'] = "";
    }
    if (empty($_POST['Step2'])) {
        $_POST['Step2'] = "";
    }
    if (empty($_POST['Step3'])) {
        $_POST['Step3'] = "";
    }

    if($_POST['Step1'] == $Step1) {
        if($_POST['Step2'] == $Step2) {
            if($_POST['Step3'] == $Step3) {
                $img = "img/yes.png";
                $result = "Bien jouer ! Le virus FEUR à été désactivé. &#128526";
                $err = "Good Job Bro ! HN0x02{S0lidSn4KE}";
                $lien = false;
            } else {
                $err = "Conseil : Vous y etres presque ! Maintenant, vérifier les cookies.";
            }
        } else {
            $err = "Conseil : Le digicode semble déverouillé, trouver le code !";
        }
    } else {
        $err = "Conseil : Empechez ce timer de finir !";
    }
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Reponse</title>
</head>
<body>
    <div class="container">
        <img src=<?php echo $img ?> class="img" alt="reussite/lose">
        <p class="result"><?php echo $result?></p>
        <div class="repBlock1">
            <div class="repBlock2">
                <img src="img/snake.png" alt="Snake png">
                <p class="err"><?php echo $err?></p>
                <?php if ($lien == true) { ?>
                    <a href="index.html" class="return">Retourner au combat.</a>
                <?php } ?>
            </div>
        </div>
    </div>
</body>
</html>