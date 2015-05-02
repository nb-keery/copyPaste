<?php session_start();?>
<!DOCTYPE html>
<html>
<head>
	<title>Mémo</title>
	<meta charset="utf-8" /> 
	<script type="text/javascript" src="js/jquery-2.1.3.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
	<link rel="shortcut icon" href="img/eureka.png" type="image/x-icon" />
	<link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
	<script type="text/javascript" src="js/tinymce/tinymce.min.js"></script>
	<script src="js/jquery.colorbox-min.js"></script>
</head>
	<?php include('conf/config.php');
		  include('js/script.php');
		  ?>
<body>
<?php
		if (empty($_SESSION)) {
			$_GET['pg'] = 'login'; 
		}else{
			$_GET['pg'] = "memo";
		}

		if ($_GET['pg']) {
				$page = $_GET['pg'].'.php';
				if (file_exists('script/'.$page)) {
					include('script/'.$page);
				}else{
					include('script/traitement.php');
				}
				if (file_exists('layout/'.$page)) {
					include('layout/'.$page);
				}else{
					include('404.php');
				}
		}else{
			include('script/'.$page.'php');
			include('layout/'.$page.'php');
		}
		?>
</body>