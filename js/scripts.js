jQuery(function() {

	let my_switch = false;
	$('#my_button').click(function () {

		if (my_switch == false) {my_switch = true;
				$(this).html('Click for Drum');
				$('p').html('You chose Flat!');
				$('#my_image').attr('src','images/flat.png');
		} else {
			my_switch = false;
			$(this).html('Click for Flat');
			$('p').html('You chose Drum!');
			$('#my_image').attr('src','images/drum.png');
		}
	});
});

jQuery(function() {

	let change_bg = false;
	$('#edit_bg').click(function () {

		if (change_bg == false) {change_bg = true;
				$('#my_bg').attr('src','images/bluecheese.png');
		} else {
			change_bg = false;
			  $('#my_bg').attr('src','images/ranch.png');
		}
	});
});
