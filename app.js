
 const atcApp = {};


 atcApp.slideMenus = () => {
        const $settingsBtn = $(".slider-btn");
		const $settingsMenu = $(".settings-menu");
		$settingsMenu.hide()
		$settingsBtn.on("click", function(){
       $(this).next().slideToggle("fast");
   });
	}

 atcApp.getTheme = () => {
 	
 		let themeValue = $("#themeSelect").find(":selected").val();
 		$("#demo-button").removeClass().addClass(themeValue).attr( "data-theme", themeValue);
 		

 	   $("#themeSelect").on("change", function(){
 		  themeValue = $(this).find(":selected").val();
 		  $("#demo-button").attr( "theme", themeValue);
 		  $("#demo-button").removeClass().addClass(themeValue).attr( "data-theme", themeValue);
 	    });
 }

 atcApp.getBtnColor = () => {
 	$("#colorPicker").on("change", function(){
 		const colorValue = $(this).val();
 		$("#demo-button").css("background-color", colorValue);
 	});
 }	

 atcApp.getTxtColor = () => {
 	$("#colorPicker2").on("change", function(){
 		const colorValue2 = $(this).val();
 		$("#demo-button").css("color", colorValue2);
 	});
 }	

 atcApp.getSize = () => {
 	$(".btn-select input").on("click", function(){
 		const sizeValue = $(this).val();
 		$("#demo-button").css("width", sizeValue);
 		});
 }

 atcApp.generateCss = () => {

    

 	 $(".generate-btn").on("click", function(){

 	 const color = $("#demo-button").css("color");
 	 const bgColor = $("#demo-button").css("background-color");
 	 const width = $("#demo-button").css("width");
 	 const dataTheme = $("#demo-button").attr("data-theme");
 	 let selectorName;
 	 
 	
if ( dataTheme === 'narrative') {
	  selectorName  = '.product__add-to-cart-button';
} else if (dataTheme === 'debut') {
      selectorName  = '#AddToCart-product-template';
} else if (dataTheme === 'jumpstart') {
      selectorName  = '#AddToCart-';
} else if (dataTheme === 'venture') {
      selectorName  = '#AddToCart-product-template';
} else if (dataTheme === 'boundless') {
      selectorName  = '#AddToCart-product-template';
} else if (dataTheme === 'simple') {
      selectorName  = '#AddToCart';
} else if (dataTheme === 'brooklyn') {
      selectorName  = '#AddToCart--product-template';
} else if (dataTheme === 'pop') {
      selectorName  = '#addToCart';
} else if (dataTheme === 'supply') {
      selectorName  = '#addToCart';
} else if (dataTheme === 'minimal') {
      selectorName  = '#AddToCart';
} else {
	alert('You must select your theme first!');

 }
 

 $("#copyCss").val(`@media screen and (min-width: 768px) { ${selectorName} { background-color: ${bgColor}; color: ${color}; width: ${width}; } }`);

 

});
 	 	};
 	

 atcApp.openAndCloseModal = () => {
 	
    	
    $(".generate-btn").on("click", function(){
    	$(".modal").show();
    });

    $(".close").on("click", function(){
    	$(".modal").hide();
    })
  
 }

atcApp.copyCss = () => {
 $(".copy").on("click", function(){
 document.querySelector(".modal-css #copyCss").select();
  document.execCommand("Copy");
 $(".modal-css").append("<p>Copied!</p>");

 })
}
	





	atcApp.init = () => {

		$('.modal').hide();
		atcApp.slideMenus();
		atcApp.getTheme();
		atcApp.getBtnColor();
		atcApp.getTxtColor();
		atcApp.getSize();
		atcApp.openAndCloseModal();
		atcApp.copyCss();
	    atcApp.generateCss();


	}

	$(function() {
       // Init app
     atcApp.init();
});