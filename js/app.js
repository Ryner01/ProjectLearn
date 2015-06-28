$(document).ready(function(){

	//date-picker
	var isClicking = false;
	var isClicking2 = false;

	$('#date-picker-1').mousedown(function(e){
		var pos = $(this).offset();
		var srcX = pos.left;

		docW = $('body').width();
		relX = e.pageX - srcX;
		isClicking = true;
	});
	$('#date-picker-2').mousedown(function(e){
		var pos = $(this).offset();
		var srcX = pos.left;

		docW = $('body').width();
		relX = e.pageX - srcX;
		isClicking2 = true;
	});

	$(document).mousemove(function(e){
		sliderWidth = $('.date-pick-slider').width();
		sliderOffset = $('.date-pick-slider').offset();

		slidePicker1 = (parseInt($('#date-picker-1').css('left'), 10)) + $('#date-picker-1').width();
		slidePicker2 = (parseInt($('#date-picker-2').css('left'), 10)) - $('#date-picker-2').width();

		//active state slider - tohle resi velikosti a centruje to mezi 2 pickers
		if (isClicking == true || isClicking2 == true) {

			var ActiveSliderWidth = $('#date-picker-2').offset().left - $('#date-picker-1').offset().left;
			$('.date-pick-slider-active').css('width',ActiveSliderWidth + "px");

			sl1cntr = (parseInt($('#date-picker-1').css('left'), 10)) + ($('#date-picker-1').width()) / 2;
			$('.date-pick-slider-active').css('margin-left',sl1cntr + "px");

			//slider data - deleni a posilani
			sliderDaysPixels = sliderWidth / 365;
			var days = ActiveSliderWidth / sliderDaysPixels;
			$('#current-date-number').html(Math.round(days));

			//data preperation
			var daysStart = Math.round(sl1cntr / sliderDaysPixels);
			var daysEnd = daysStart + Math.round(days);

			//output ready
			var StartDate = new Date(new Date().getFullYear(), 0, daysStart);
			var EndDate = new Date(new Date().getFullYear(), 0, daysEnd);

			//inner-picker-text
		};
		
		if (isClicking ) {
			//picker1 movment
			var picker = $('#date-picker-1').css('left');

			var mouseX = e.pageX;
			var diffX = mouseX - relX - sliderOffset.left;

			$('#date-picker-1').css('left',(diffX) + 'px');

			//max and min picker left values
			if (diffX <= -46) {
				$('#date-picker-1').css('left','-45px');
			};
			if (diffX >= slidePicker2) {
				$('#date-picker-1').css('left',slidePicker2 + "px");
			};

			//inner-picker-text-1
			var d = StartDate;
			var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   			var date = month[d.getMonth()] + ", " +  d.getDate();
			$('#date-inner-text-1').html(date);

		}else if(isClicking2){
			//picker2 movement
			var picker = $('#date-picker-2').css('left');

			var mouseX = e.pageX;
			var diffX = mouseX - relX - sliderOffset.left;

			$('#date-picker-2').css('left',(diffX) + 'px');

			//max and min picker left values
			if (diffX <= slidePicker1) {
				$('#date-picker-2').css('left',slidePicker1 + "px");
			};
			if (diffX >= 483) {
				$('#date-picker-2').css('left','483px');
			};
			//inner-picker-text-2
			var d = EndDate;
			var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   			var date = month[d.getMonth()] + ", " +  d.getDate();
			$('#date-inner-text-2').html(date);
		};

	});

	//mouseup for pickers
	$(document).mouseup(function(e){
		isClicking=false;
		isClicking2=false;
	});

});