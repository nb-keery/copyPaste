$(document).ready(function(){


		tinymce.init({
	    selector: ".wys",
	    plugins: [
	        "advlist autolink lists link image charmap print preview anchor textcolor",
	        "searchreplace visualblocks code fullscreen",
	        "insertdatetime media table contextmenu paste"
	    ],
	    menubar : false,
	    toolbar: "bold | italic | bullist | alignleft aligncenter alignright | forecolor backcolor"
	});


		//Afficher la colorbox pour chaque code
		$("#container > ul > li > span.gallery").click(function(){
			var code = $(this).prev("textarea").val();
			var titre = $(this).prevAll("span").children().text();
			var info = $(this).next().text();
			$(".gallery").colorbox({html:"<h2>"+ titre +"</h2><div id='principal'><textarea id='colorBTA1'>"+ info +"</textarea><textarea id='colorBTA2'>"+ code +"</textarea></div><button class='button' id='aide' title='Afficher ou cacher les informations'><i class='fa fa-info'></i></button><button class='button' title='Valider les modifications'><i class='fa fa-pencil-square-o'></i></button><button class='button' title='Supprimer ce code'><i class='fa fa-trash-o'></i></button>", width:" 80%", height: "85%", opacity : 0.9, close : '<i class="fa fa-times"></i>'}, function(){
				$("#colorBTA1").hide();
				$(document).on("click", "#aide",function(){

					$("#colorBTA1").fadeIn("fast");
					$("#colorBTA2").css({"width": "70%",
										"display": "inline-block"});
					$(document).on("click","#aide", function(){
						$("#colorBTA1").hide();
						$("#colorBTA2").css({"width": "97%",
											"display": "block"});
					})
				})
			});
		})
		
		//Fonctions dans la colorbox

		//Enregistrer
		$(document).on("click", "#colorbox button:nth-child(4)", function(){
			var colorBTA1 = $("#colorBTA1").val();
			var colorBTA2 = $("#colorBTA2").val();
			var titreColorBox = $("#colorbox h2").text();
			var save = {infoCode : colorBTA1, texteCode: colorBTA2, titreCode: titreColorBox };
			$.ajax({
				type: "POST",
				url: "ajax/action.php",
				data: save,
				success: function(data){
					$("#cboxLoadedContent").append('<p class="valide">Les modifications ont bien été enregistré <i class="fa fa-check"></i></p>');
					setTimeout(function(){$("#colorbox p").hide();}, 1300);			
				}
			});
		});

		//Supprimer
		$(document).on("click", "#colorbox button:nth-child(5)", function(){
			var titreColorBox = $("#colorbox h2").text();
			var supprimer = {deleteCode : '', titreCode: titreColorBox};
			$("#cboxLoadedContent").append('<div id="formSupprimer"><span>Êtes-vous sûr de vouloir supprimer définitivement ce code ?</span><button class="button">Oui</button><button class="button">Non</button></div>');
			$("#formSupprimer > button:nth-child(2)").click(function(){
				$.ajax({
					type: "POST",
					url: "ajax/action.php",
					data: supprimer,
					success: function(data){
						$("#formSupprimer, #colorbox").hide();
						$("#container").append('<p class="valide">Le code a bien été supprimé <i class="fa fa-check"></i></p>');
						setTimeout(function(){$("p.valide").hide();}, 1300);		
					}
				});
			});
		});
		$(document).on("click", "#formSupprimer > button:nth-child(3)", function(){
			$("#formSupprimer").hide();
		});


		//Ajuster la taille du menu par rapport à la fenêtre
		$("#nav").css("height", $(window).height());
		$(window).resize(function(){
			$("#nav").css("height", $(window).height());
		});

		//Ajouter un langage au nav
		$("#ajouter > form").hide();
		 $("#add").click(function(){
			$("#ajouter > form").slideToggle("slow");
		})

		$("#lang").click(function(){
			var myLang = $("#nLang").val().toUpperCase();
			var myData = {langage:myLang};
			$.ajax({
				type: "POST",
				url: "ajax/action.php",
				data: myData,
				success: function(data){
					console.log(data);
					$("#nav > ul").append("<li>"+ myLang +"</li>");
					$("#ajouter > form").slideToggle("slow");
				}
			})
		})

		//Bouger les cases du menu
		 $(function() {
   		 $("#nav > ul").sortable();
   		 $("#nav > ul").disableSelection();
  			});

		//Afficher les informations pour chaque code
		 $("#container > ul > li > div").hide();
		
		 $("#container > ul > li > i").mouseover(function(){
		 	$(this).nextAll("div").show();
		  });
		  $("#container > ul > li > i").mouseleave(function(){
		 	$("#container > ul > li > div").fadeOut();
		  });

		  //Ajouter un nouveau code
		  $("#addText").click(function(){
		  	var newTitre = $("#newTitre").val();
		  	var newTexte = $("#newTexte").val();
		  	var newInfo = tinyMCE.activeEditor.getContent();
			var myNewCode = {titreNewCode: newTitre, texteNewCode: newTexte, infoNewCode: newInfo};
			$.ajax({
				type: "POST",
				url: "ajax/action.php",
				data: myNewCode,
				success: function(data){
					// prepend
				}
			});
		});

		}); 