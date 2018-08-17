// TOOLTIPS
$('.item-title').on('click', function () {
	var tooltip = $(this).attr("id");
	$.dialog({
		animation: 'scale',
		animateFromElement: true,
		keyboardEnabled: true,
		animationBounce: 1,
		title: false,
		content: 'url:https://resources.sandyinc.com/st/carpetflooring/carpetone/site2/tooltips/'+tooltip+'.html',
		opacity: 0.6,
		backgroundDismiss: true,
		closeIcon: true,
		closeIconClass: 'fa fa-times',
		columnClass: 'col-md-7',
	});
});
/*$('.license').on('click', function () {
	$.dialog({
		animation: 'scale',
		animateFromElement: true,
		keyboardEnabled: true,
		animationBounce: 1,
		title: false,
		content: 'url:http://resources.sandyinc.com/st/carpetflooring/carpetone/site2/tooltips/licenseinfo.html',
		opacity: 0.6,
		backgroundDismiss: true,
		closeIcon: true,
		closeIconClass: 'fa fa-times',
		columnClass: 'col-lg-4',
	});
});*/
$('.termsconditions').on('click', function () {
	$.dialog({
		animation: 'scale',
		animateFromElement: true,
		keyboardEnabled: true,
		animationBounce: 1,
		title: false,
		content: 'url:https://resources.sandyinc.com/st/carpetflooring/carpetone/site2/tooltips/termsconditions.html',
		opacity: 0.6,
		backgroundDismiss: true,
		closeIcon: true,
		closeIconClass: 'fa fa-times',
		columnClass: 'col-lg-10',
	});
});

//Checks if user has entered in all required fields and selected at least 5 screens and submits if true
$('#survey').submit(function() {
	var allScreens = getScreensAmount();
	var allScreensAmount = allScreens[0] + allScreens[1] + allScreens[2] + allScreens[3] + allScreens[4];
	
    if ($.trim($("#firstname").val()) === "" || $.trim($("#lastname").val()) === "" || $.trim($("#phone1").val()) === "" || $.trim($("#email").val()) === "" || $.trim($("#storename").val()) === "" || $.trim($("#address1").val()) === "" || $.trim($("#city").val()) === "" || $.trim($("#state").val()) === "" || $.trim($("#zip").val()) === "") {
        $.dialog({
			animation: 'scale',
			animateFromElement: true,
			keyboardEnabled: true,
			animationBounce: 1,
			icon: 'fa fa-warning',
			title: '<p class="alert-title">Error</p>',
			content: '<p class="alert-text">Please enter the required contact information.</p>',
			opacity: 0.6,
			backgroundDismiss: true,
			closeIcon: true,
			closeIconClass: 'fa fa-times',
			columnClass: 'col-sm-6',
		});
		$.fn.fullpage.moveTo(2);
        return false;
    }
	if (allScreensAmount < 2) {
		$.dialog({
			animation: 'scale',
			animateFromElement: true,
			keyboardEnabled: true,
			animationBounce: 1,
			icon: 'fa fa-warning',
			title: '<p class="alert-title">Error</p>',
			content: '<p class="alert-text">You must choose at least 2 screens. You currently have ' + allScreensAmount + '.</p>',
			opacity: 0.6,
			backgroundDismiss: true,
			closeIcon: true,
			closeIconClass: 'fa fa-times',
			columnClass: 'col-sm-6',
		});
		$.fn.fullpage.moveTo(3);
        return false;
	}
	if ($.trim($("#datepicker-data").val()) === "") {
        $.dialog({
			animation: 'scale',
			animateFromElement: true,
			keyboardEnabled: true,
			animationBounce: 1,
			icon: 'fa fa-warning',
			title: '<p class="alert-title">Error</p>',
			content: '<p class="alert-text">Please choose a preferred installation date.</p>',
			opacity: 0.6,
			backgroundDismiss: true,
			closeIcon: true,
			closeIconClass: 'fa fa-times',
			columnClass: 'col-sm-6',
		});
		$.fn.fullpage.moveTo(5);
        return false;
    }
	if ($('#useraccept').prop('checked') === false ) {
        $.dialog({
			animation: 'scale',
			animateFromElement: true,
			keyboardEnabled: true,
			animationBounce: 1,
			icon: 'fa fa-warning',
			title: '<p class="alert-title">Error</p>',
			content: '<p class="alert-text">Please check that you have viewed and accept the terms and conditions.</p>',
			opacity: 0.6,
			backgroundDismiss: true,
			closeIcon: true,
			closeIconClass: 'fa fa-times',
			columnClass: 'col-sm-6',
		});
        return false;
    }
});