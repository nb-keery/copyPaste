<?php 
	if($_GET['pg']=="memo"):
		$req = $dbh->query("SELECT id, titre FROM categorie");
		$nav = $req->fetchAll();

		$req = $dbh->query("SELECT * FROM texte ORDER BY id DESC LIMIT 9");
		$code = $req->fetchAll();
	endif;
	
	if(isset($_GET['id'])) {
		$id = $_GET['id'];
		var_dump($id);
	}

	// action
	if(isset($_POST['action'])):
		extract($_POST);

		// Connexion d'utilisateur 
		if ($action == "connexion"){
			$req = $dbh->query("SELECT * FROM user WHERE pseudo='".$pseudo."' AND password='".$password."' ");
			$connect = $req->fetchAll();
			if(count($connect) > 0){
				$_SESSION[USER]['pseudo'] = $pseudo;
				header("location:index.php?pg=memo");
			}
		}elseif($action == "deconnexion"){
			unset($_SESSION[USER]);
			header("location:index.php?pg=login");
		}elseif ($action == "inscription"){
			$req = $dbh->query("SELECT * FROM user WHERE pseudo='".$pseudo."' email='".$email."' ");
			$verif = $req->fetchAll();
			if (count($verif) > 1) {
				$req = $dbh->prepare("INSERT INTO user(pseudo, email, password) VALUES (:pseudo, :email, :password)");
				$req->execute(array("pseudo" => $pseudo,
									"password" => $password,
									"email" => $email));
				$_SESSION[USER]['pseudo'] = $pseudo;
				$_SESSION[USER]['email'] = $email;
				header("location:index.php?pg=memo");
			}else{
				$msg = '';
			}
		}
	endif;




