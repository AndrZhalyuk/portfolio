$(document).ready(function() {
	$("#nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });
    $("header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });


	var color_sircle = '#76f9be',
		sircle_bgc = '#0c204a',
		font_color = '#0c204a',
		textSize = 28;

	$("#test-circle1").circliful({
		animationStep: 5,
		foregroundBorderWidth: 10,
		backgroundBorderWidth: 10,		
		fontColor: font_color ,
		backgroundColor: sircle_bgc,
		foregroundColor: color_sircle,
		percentageTextSize: textSize,
		percent: 75
	});
	$("#test-circle2").circliful({
		animationStep: 5,
		foregroundBorderWidth: 10,
		backgroundBorderWidth: 10,		
		fontColor: font_color ,
		backgroundColor: sircle_bgc,
		foregroundColor: color_sircle,
		percentageTextSize: textSize,
		percent: 75
	});
	$("#test-circle3").circliful({
		animationStep: 5,
		foregroundBorderWidth: 10,
		backgroundBorderWidth: 10,		
		fontColor: font_color ,
		backgroundColor: sircle_bgc,
		foregroundColor: color_sircle,
		percentageTextSize: textSize,
		percent: 75
	});
	$("#test-circle4").circliful({
		animationStep: 5,
		foregroundBorderWidth: 10,
		backgroundBorderWidth: 10,		
		fontColor: font_color ,
		backgroundColor: sircle_bgc,
		foregroundColor: color_sircle,
		percentageTextSize: textSize,
		percent: 75
	});
	$("#test-circle5").circliful({
		animationStep: 5,
		foregroundBorderWidth: 10,
		backgroundBorderWidth: 10,		
		fontColor: font_color ,
		backgroundColor: sircle_bgc,
		foregroundColor: color_sircle,
		percentageTextSize: textSize,
		percent: 75
	});
	$("#test-circle6").circliful({
		animationStep: 5,
		foregroundBorderWidth: 10,
		backgroundBorderWidth: 10,		
		fontColor: font_color ,
		backgroundColor: sircle_bgc,
		foregroundColor: color_sircle,
		percentageTextSize: textSize,
		percent: 75
	});
$(".phone-input").mask("+38 (999) 999-99-99");		

	 $('.js_input').keyup(function(event) {
	 	var $input = $(this),
	 	value = $input.val(),
	 	validate = $input.data('validate'),
	 	strip = $input.data('strip');


	 	if(value && validate){
	 		var striped_val = value;
	 		if(strip) {
	 			striped_val = striped_val.replace(new RegExp(strip, 'g'), '');
	 		}

	 		var reg_exp = new RegExp(validate, 'gi');

	 		if (!reg_exp.test(striped_val)){
	 			$input.removeClass('valid_input').addClass('error_input');					
	 		}
	 		else{
	 			$input.removeClass('error_input').addClass('valid_input');	
	 		}
	 	}
	 	else{
	 			$input.removeClass('error_input').addClass('valid_input');	
	 		}
								

	 });
	 function  input_valid($form, $input, validate, value, strip){
	 	var striped_val = value;
	 	if (strip) striped_val = striped_val.replace(new RegExp(strip, 'g'), '');

	 	var reg_exp = new RegExp(validate, 'gi');
	 	
	 	if (!reg_exp.test(striped_val)){
	 		$input.removeClass('valid_input').addClass('error_input');	
	 		$form.data('valid', false);
	 	}
	 }
	$('.main-form').submit(function(e){
		e.preventDefault();
		var $thisForm = $(this),
			First_name= $('input[name="first_name"]').val(),
			Last_name = $('input[name="last_name"]').val(),
			Phone_num = $('input[name="phone"]').val(),					
			Email =		$('input[name="email"]').val(); 
			

		$thisForm.data('valid', true);
		$('.form-group', $thisForm).removeClass('error_input valid_input');

		$('.js_input', $thisForm).each(function(index, el) {
			var $input = $(this),
				is_required = $input.prop('required'),
				value = $input.val(),
				validate = $input.data('validate'),
				strip = $input.data('strip');
				
			if(is_required){
				if(!value){
					$input.removeClass('valid_input').addClass('error_input');	
					$thisForm.data('valid', false);
				}else if(validate){

					input_valid($thisForm, $input, validate, value, strip);
									}
			}else if(value && validate){

				var name = input_valid($thisForm, $input, validate, value, strip);
				console.log(name);
			}
		});

		if($thisForm.data('valid')){
			
		}
		return false;
	});
});
 function main() {

(function () {
   'use strict';

$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});  
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });
}());
}
main();

