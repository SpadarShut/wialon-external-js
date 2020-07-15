(function () {

	//create array with icons (path, redirectURl)
	var icons = [
		{
			iconPath:'http://dinacheley.com/wialon/lessons/images/twitter-clr.svg',
			href:'https://twitter.com/WialonGPS'
		},
		{
			iconPath:'http://dinacheley.com/wialon/lessons/images/facebook-clr.svg',
			href:'https://web.facebook.com/Gurtam.en'
		},
		{
			iconPath:'http://dinacheley.com/wialon/lessons/images/insta-clr.svg',
			href:'https://www.instagram.com/gurtam_team/'
		},
		{
			iconPath:'http://dinacheley.com/wialon/lessons/images/apple-clr.svg',
			href:'https://apps.apple.com/ru/app/id960699792'
		}
	];

	var div = document.createElement('div');
	icons.forEach(function(icon){
		div.innerHTML += "<a href='"+ icon.href +"' target='_blank'><img src='"+ icon.iconPath +"'></a>";
	})
	div.style = "border: none; margin:2em auto; display: flex; justify-content: center";
	document.getElementById('login_body').after(div);

})()
