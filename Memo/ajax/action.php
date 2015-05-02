<?php $dbh = new PDO('mysql:host=localhost;dbname=memo', 'root', '', array(
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO:: FETCH_ASSOC,
		PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8" ));

	//Inserer un nouveau langage au nav
	if(isset($_POST['langage'])){
		$req = $dbh->prepare("INSERT INTO categorie(titre) VALUES (:titre)");
		$req->execute(array("titre" => $_POST['langage']));
	}

	//Ecrire un nouveau code
	if(isset($_POST['titreNewCode'])){
		if (empty($_POST['infoNewCode'])) {
		 	$_POST['infoNewCode'] = "Ce code ne comporte aucune information";
		 	$info = $_POST['infoNewCode'];
		}else{
	   		$info = $_POST['infoNewCode'];}

	   	$req = $dbh->prepare("INSERT INTO texte(titre, code, info) VALUES(:titre, :code, :info)");
	   	$req->execute(array("titre" => $_POST['titreNewCode'],
	   						"code" => $_POST['texteNewCode'],
	   						"info" => $info));
	   };

	//Enregistrer dans la colorbox
	if(isset($_POST['texteCode'])){
		$req = $dbh->prepare("UPDATE texte SET code = :texteCode, info = :infoCode WHERE titre = :titreCode ");
		$req->execute(array("texteCode" => $_POST['texteCode'],
							"infoCode" => $_POST['infoCode'],
							"titreCode" => $_POST['titreCode']));
	}

	//Supprimer un code
	if(isset($_POST['deleteCode'])){
		$req = $dbh->prepare("DELETE FROM texte WHERE titre = :titreCode");
		$req->execute(array(
		'titreCode' => $_POST['titreCode']));
	}