<?php 
	require("conf/config.php");
	require("header.html");
	require("script/traitement.php");
	extract($_GET);

	if(isset($_SESSION[USER]['pseudo'])):
		if (file_exists('layout/'.$pg.'.php')) {
			$page = $pg.".php";
		}else{
			$page = "404.php";
		}
	else:
		$page = "login.php";
	endif;
	
	include('layout/'.$page);
	require("footer.html");

