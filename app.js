console.log('test')
$('script').remove('[src="troll.js"]');
$(document).ready(function(){
	//votre code
		
		var count = 0;
		var list = ["T'as pas mieux à faire ?", "Tu joues encore à ce jeu ??",
		"Sérieusement ? Tu continues ?", "Tu fais quoi de ta vie ?", "Ok, continue a cliquer ..."];	
		var randomList = list[Math.floor(Math.random() * list.length)];
		console.log(randomList)
	
		$('.cake').click(function(){
			count++;
			//console.log(count)
			$("span").text(count);
		});
		if (count == 20){
			alert("T'as pas mieux à faire ?")
		}
		if (count === 40){
			alert("Sérieusement ? Tu continues ?");
		}
	
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
		for (i=0;i>0;i++){ -- premier essais
			$('span').text(count)
		$('.counter').append(count) 
	})
})*/