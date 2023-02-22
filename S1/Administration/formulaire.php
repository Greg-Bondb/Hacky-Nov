<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<link rel="stylesheet" href="style.css">
<meta http-equiv="test" content="test_content">
<title>
Formulaire html
</title>
</head>
<body>
	<img src="Fond.PNG" style="position:absolute" class="fond">
	 <div class="container" style="position:absolute;z-index:2">
        <form method="POST" action="reponse.php" align="center" class="alignement">
        <img src="Logo.jpg"  class="img">
        <p class="txt">Identifiez-vous :</p>
        <input type="text" name="pseudo" autocomplete="off" class="case"> <br><br>
        <input type=submit value="valider" class="valider">
        </form>
    </div>
</body>
</html>
