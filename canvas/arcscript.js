window.onload = function() {
	hidden = false;
	selectedColorSet = "random";
	window.customArray = new Array();
	window.tooltipsRequired = true;
	
	//SET CANVAS CLICK TO SPIN-----------------------------------------------
	$("#button").click(function() {
		window.tooltipsRequired = false;
		spin();
	});
	
	//HIDE & SHOW FOOTER BAR
	
	//hide
	$("#hide").click(function() {
		$("#control-bar").animate({left: $(window).width() }, 370);
		$("#menu-button").animate({left: $(window).width() -45 }, 370);
		hidden = true;
	});
	//show
	$("#menu-button").click(function() {
		$("#control-bar").animate({left: 0 }, 370);
		$("#menu-button").animate({left: -35 }, 370);
		hidden = false;
		
	});
	
	
	//ON RESIZE
	
	//keep footer bar hidden if closed
	$(window).resize(function() {
		if (hidden == true){
			$("#control-bar").css('left', $(window).width());
			$("#menu-button").css('left', $(window).width() -45);
		}
	
		windowWidth = $(window).width();
		windowHeight = $(window).height();
		$("canvas").css("width", windowWidth);
		$("canvas").css("height", windowHeight);
	});
	
	//REMOVE SCROLLBARS-----------------------------------------------
	$("body").css("overflow", "hidden");
	
	
	//DROPDOWN FUNCTIONALITY-----------------------------------------------
	
	//dropdown show and hide
	$(".dropdown").click(function() {
		
		if ( $("#popupcolors").css("display") == "none" ) {
			$("#popupcolors").css("display", "block").fadeTo(250, 1);
		} else {
			$("#popupcolors").fadeTo(250, 0, function(){
				$("#popupcolors").css("display","none");
			});
		}
	});
	
	//place clicked color text in dropdown and set the color variable
	dropArray = ["random","red","green","blue","orange","white","black","custom"];
	for(i=0; i<dropArray.length; i++){
		$("#" + dropArray[i] + "-drop").click(function() {
			newtext = $(this).html();
			$(".dropdowntext").html(newtext);
			window.selectedColorSet = $(this).html().toLowerCase();
			setColors();
			
			for( i=1; i<=12; i++ ){
				$('#swatch' + i).css('background-color', window.colorArray[i-1]);
			}
		});
	}
	
	
	// COLOR PICKER-----------------------------------------------
	
	//Set colorpicker to open on swatch click
	$('.swatch').colorpicker({
		inline: false
	});
	
	//determine the ID of clicked swatch
	for (var i=1;i<=12;i++){
		$(document).on("click", "#swatch" + i,function(){
			selectedSwatch = "#" + this.id;
		});
	}
	
	//change swatch bg color on okay, set selectedcolor to custom
	$(document).on( 'click', '.ui-colorpicker-ok', function () {
		value = $(selectedSwatch).val();
		$(selectedSwatch).css("background-color", "#" + value);
	   
		$(".dropdowntext").html("Custom");
		window.selectedColorSet = "custom";
		
		for( i=1; i<=12; i++ ){
			window.customArray[i-1] = $('#swatch' + i).css('background-color');
		}
		window.customIsSet = true;	   
	});
	
	//CALL SPIN FUNCTION!-----------------------------------------------
	spin();
		
	//FADE IN TOOLTIPS-----------------------------------------------
	
	setTimeout(function(){
		$("#swatch-tooltip").fadeTo(900, 1);
	},900); 
		
	setTimeout(function(){
		if (window.tooltipsRequired == true){
			$("#clicktospin")
			.css('left', ($(window).width()/2) - $("#clicktospin").width()/2)
			.css('top', ($(window).height()/2 - 20) - $("#clicktospin").height()/2)
			.fadeTo(900, 1);
		}
	},8000); 
	
	
	
	
}
