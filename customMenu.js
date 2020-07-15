loader.push(function () {
	WebCMS.after_init_call(function () {

		// Custom menu options
		var options = [
			{
				name:'Personal account',
				href:'https://my.gurtam.com/en/login'
			},
			{
				name:'Shop',
				href:'https://gurtam.com/en/hw-manufacturers'
			}
		];

		var startNode = $('#sub_dom_f5acebef_2_5');
		var listItem = startNode.parent();

		options.forEach(function(option) {
			var newMenuItem = listItem.clone();

			newMenuItem.find('span').html(option.name);
			newMenuItem
				.find('a')
			 	.attr('href', option.href)
				.attr('id', 'sub_dom' + options[i].name)
			
			listItem.after(newMenuItem);

			// console.log(option.name, newMenuItem);
		})
	});
});
