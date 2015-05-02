<?php 
	if (isset($_POST['connexion'])) {
		$pseudo = $_POST['pseudo'];
		$password = $_POST['password'];
		$req = $dbh->query("SELECT * FROM user WHERE pseudo='".$pseudo."' AND password='".$password."' ");
		$connect = $req->fetchAll();
		if (!empty($connect)) {
			session_start();
			$_SESSION['pseudo'] = $pseudo;
			session_cache_expire(1);
			$_GET['pg'] = "memo";
		}
	}

	$message=0;
	if(isset($_POST['submit'])){
		$pseudo = $_POST['pseudo'];
		$pass = $_POST['password'];
		$email = $_POST['email'];

		$req = $dbh->query("SELECT * FROM user WHERE pseudo='".$pseudo."' OR email='".$email."' ");
		$verif = $req->fetchAll();
		if (empty($verif)) {
			$req = $dbh->prepare("INSERT INTO user(pseudo, email, password) VALUES (:pseudo, :email, :password)");
			$req->execute(array("pseudo" => $pseudo,
								"password" => $pass,
								"email" => $email));
			session_start();
			$_SESSION['pseudo'] = $pseudo;
			$_SESSION['email'] = $email;
			$_GET['pg'] = "memo";
		}elseif (!empty($verif)) {
			$message = 1;
		}
	}