<div id="formLog">
	<form method="POST" action="">
		<label for="pseudo"><span>Pseudo</span><input type="text" name="pseudo" autofocus required placeholder="Pseudo"></label>
		<label for="password"><span>Mot de passe</span><input type="password" name="password" required placeholder="Mot de passe"></label>
		<input type="submit" name="connexion" value="Connexion" class="button">
	</form>
</div>

<div id="logo"><img src="img/eureka.png"><h1>Mémo</h1></div>

<p>Venez découvrir le mémo en ligne, rapide et facile d'utilisation vous pouvez enregistrer des codes de tous types de langage avec la possibilité des les trier pour les retrouver de la manière la plus rapide qui soit</p>


<div id="formIns">
	<h2>S'inscrire</h2>
	<?php if ($message == 1) {
		echo "<p class='invalide'>Le pseudo ou l'adresse email est déjà utilisé</p>";
	} ?>
	<form method="POST" action="">
		<input type="text" name="pseudo" autofocus required placeholder="Pseudo">
		<input type="password" name="password" required placeholder="Mot de passe">
		<input type="password" name="password"  placeholder="Confirmation du mot de passe">
		<input type="email" name="email" required placeholder="Adresse email">
		<input type="email" name="email2"  placeholder="Confirmation de l'adresse email">
		<input type="submit" value="Inscription" name="submit" class="button">
	</form>
</div>