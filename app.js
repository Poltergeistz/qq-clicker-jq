console.log('test')
$('script').remove('[src="troll.js"]');
$(document).ready(function(){
	//votre code
		
		var count = 0;
		var list = ["T'as pas mieux à faire ?", "Tu joues encore à ce jeu ??",
		"Sérieusement ? Tu continues ?", "Tu fais quoi de ta vie ?", "Ok, continue a cliquer ..."];	
		console.log(count);
	
		$('.cake').click(function(){
			count++; // incrémente à chaque click sur l'image du cake
			console.log(count);
			$('span').text(count); // modifie le texte compteur en prenant en compte l'incrémentation
			if ((count % 20) == 0){ //Si le nombre de click est un multiple de 20 alors (ça prends 0 mais pas le reste (20,40,60, etc), je ne comprends pas)
				var randomList = list[Math.floor(Math.random() * list.length)]; // Ma variable fait un random de l'index pour sortir une phrase du tableau list
				console.log(randomList);
				alert(randomList); // affiche une phrase au hasard
			}
		
		});
	
	});
	/* 

	$('.cake').click(function(){
		
		 $('.counter').html(function(i, val) { 
			return +val+1 });
		var count = $('.counter').length;
		console.log(count);
		if (count === 20 ){
			alert("T'as pas mieux à faire ?");
		}
		if (count === 40){
			alert("Sérieusement ? Tu continues ?");
		}
		for (count=0;count>19;count++){ -- premier essais
			$('span').text(count)
		$('.counter').append(count) 
	})
})*/