<?php  $req = $dbh->query("SELECT id, titre FROM categorie");
	   $nav = $req->fetchAll();

	   $req = $dbh->query("SELECT * FROM texte ORDER BY id DESC LIMIT 9");
	   $code = $req->fetchAll();

	if(isset($_GET['id'])) {
	   	$id = $_GET['id'];
	   	var_dump($id);
		}


	if(isset($_POST['deco'])){
		session_destroy();
		$_GET['pg'] = "login";
	}