<nav id="nav">
	<div id="ajouter">
		<button id="add" class="button">+</button>
		<form method='POST' action=''>
			<input type='text' id="nLang" placeholder='Ajouter un nouveau langage' required>
			<input type='button' id="lang" value='Ajouter' name='langage'>
		</form>
	</div>
	<ul>
<?php  
	for ($i=0; $i < count($nav); $i++) { 
		echo '<li class="html">'. strtoupper($nav[$i]['titre']).'</li>';}?>
	</ul>

	<button class="button">Enregistrer<img src="img/save.png"></button>
</nav>

