$(document).ready(function (){

	function isEmail(email) {

		  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		 
		  return regex.test(email);

		}

	$('#submitbutton').click(function(){

		var errorMessage = "";

		var fieldsMissing = "";

		/* fields missing message */

			if($('#email').val() == "") {
				fieldsMissing += "<br> Email";
			}
			if($('#telephone').val() == "") {
				fieldsMissing += "<br> Telephone";
			}
			if($('#password').val() == "") {
				fieldsMissing += "<br> Password";
			}
			if($('#confirmPassword').val() == "") {
				fieldsMissing += "<br> Confirm Password";
			}
			if (fieldsMissing != "") {
				errorMessage += "<p> The following fields are missing </p>" + fieldsMissing;
			}

		/* invalid message */

		if (isEmail($('#email').val()) == false) {
			errorMessage += "<p>Your email address is not valid </p>";
		}

		if ($.isNumeric($('#telephone').val()) == false) {
			errorMessage += "<p>Your telephone number is not valid </p>"
		}

		if ($('#password').val() != $('#confirmPassword').val()) {
			errorMessage += "<p>Your passwords do not match</p>"		
		}

		if (errorMessage != "") {
			$('#errorMessage').html(errorMessage);
		} else {

			$('#successMessage').html('Thank you for signing up!');
			$('#errorMessage').hide();
		}
		
	});
});