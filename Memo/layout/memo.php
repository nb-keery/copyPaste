<?php  include('include/nav.php'); ?>
<div id="infoUser">
	<span>
			<a href="index.php?pg=user">
			<?php echo $_SESSION['pseudo'].' <i class="fa fa-user"></i>';?>
			</a>
	</span>
	<form method="POST" action="index.php?pg=login">
		<input type="submit" name="deco" value="Déconnexion" class="button">
	</form>
</div>

<div id="container">
	<ul>
		<?php 
			for ($i=0; $i < count($code); $i++) { 
				echo '<li>
						<span><h2>'. $code[$i]['titre'] .'</h2></span>
						<i class="fa fa-lightbulb-o"></i>
						<textarea>'. $code[$i]['code'] .'</textarea>
						<span class="gallery"><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i></span>
						<div>'. $code[$i]['info'] .'</div>
					</li>';
			}
		?>
	</ul>
</div>


<div class="formulaireAjout">
  <h2>Ajouter un code</h2>
  	<form method="POST" action="">
		<label><span>Titre :</span><input type="text" id="newTitre" placeholder="Entrez le titre de votre texte" required></label>
		<label><span>Code :</span><textarea id="newTexte" placeholder="Ajoutez du texte" required></textarea></label>
		<label><span>Info : </span><textarea id="newInfo" class="wys" name="prix" placeholder="Ajoutez des informations"></textarea></label>
		<input type="submit" value="Ajouter" id="addText" class="button">
	</form>
</div>