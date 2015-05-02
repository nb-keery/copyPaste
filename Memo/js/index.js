$(document).ready(function(){

	// wisiwig
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
	$(".gallery").on("click", function(){
		var code 		= $(this).parent().find("textarea").val();
		var titre 		= $(this).parent().find("span:first-child").text();
		var id 			= $(this).parent().attr("data-id");
		var info 		= $(this).parent().find("div").text();
		var contenu 	= "<h2 data-code='"+id+"'>"+ titre +"</h2><div id='principal'>";
		contenu 		= contenu + "<textarea id='colorBTA1'>"+ info +"</textarea>";
		contenu 		= contenu + "<textarea id='colorBTA2'>"+ code +"</textarea></div>";
		contenu 		= contenu + "<button class='button' id='aide' title='Afficher ou cacher les informations'><i class='fa fa-info'></i></button>";
		contenu 		= contenu + "<button class='button save' title='Valider les modifications'><i class='fa fa-pencil-square-o'></i></button>";
		contenu 		= contenu + "<button class='button sup' title='Supprimer ce code'><i class='fa fa-trash-o'></i></button>";
		$(".gallery").colorbox({html:contenu,width:" 80%", height: "85%", opacity : 0.9, close : '<i class="fa fa-times"></i>'},function(){
			$("#colorBTA1").hide();
		});
		$(document).on("click", "#aide" ,function(){
			var myInfo = $("#colorBTA1").is(":visible");
			if(myInfo){
				$("#colorBTA1").hide();
				$("#colorBTA2").css("width", "97%");
			}else{
				$("#colorBTA1").show().css("width", "30%");
				$("#colorBTA2").css("width", "69%");
			}
		});	
	});
		
	//Fonctions dans la colorbox
	//Enregistrer
	$(document).on("click", ".save", function(){
		var info 		= $("#colorBTA1").val();
		var code 		= $("#colorBTA2").val();
		var id 			= $(this).parent().find("h2").attr("data-code");
		var titre 		= $("#colorbox h2").text();
		var myData 		= {infoCode : info, texteCode: code, titreCode: titre };
		var li 			= $("#container").find("li");
		console.log($(this).parent().parent());
		$.ajax({
			type: "POST",
			url: "ajax/action.php",
			data: myData,
			success: function(data){
				$("#cboxLoadedContent").append('<p class="valide">Les modifications ont bien été enregistré <i class="fa fa-check"></i></p>');
				setTimeout(function(){$("#colorbox p").hide();}, 1300);		
				$( "li" ).each(function() {
					if($(this).attr("data-id") == id){
						$(this).find("textarea").val(code);
						$(this).find("div").text(info);
					}
				});
			}
		});
	});

	//Supprimer
	$(document).on("click", ".sup", function(){
			var titreColorBox 	= $("#colorbox h2").text();
			var supprimer 		= {deleteCode : '', titreCode: titreColorBox};
			var id 	 			= $("#colorbox h2").attr("data-code");
			var li 				= $("#container").find("li");
			var contenu 		= '<div id="formSupprimer"><span>Êtes-vous sûr de vouloir supprimer définitivement ce code ?</span>';
			contenu 			= contenu+'<button class="button accepteSup">Oui</button><button class="button refuseSup">Non</button></div>';
			$("#cboxLoadedContent").append(contenu);
			$(document).on("click", ".accepteSup", function(){
				$.ajax({
					type: "POST",
					url: "ajax/action.php",
					data: supprimer,
					success: function(data){
						$("#formSupprimer, #colorbox").hide();
						$("#container").append('<p class="valide">Le code a bien été supprimé <i class="fa fa-check"></i></p>');
						setTimeout(function(){$("p.valide").hide();}, 1300);	
						$( "li" ).each(function() {
							if($(this).attr("data-id") == id){
								$(this).remove();
							}
						});	
					}
				});
			});
	});
	$(document).on("click", ".refuseSup", function(){
		$("#formSupprimer").remove();
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