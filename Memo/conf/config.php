<?php $dbh = new PDO('mysql:host=localhost;dbname=memo', 'root', '', array(
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO:: FETCH_ASSOC,
		PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8" ));

		define("USER", "copyPaste");

		session_start();