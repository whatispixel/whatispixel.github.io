   $(document).ready(function(){

  	$('.closetab').hide();

    $('.cube').addClass('animation');
  
  var navigation = '.cube div';

   $(navigation).on('click', function(){
   		$('.cube').removeClass('animation');
   		$(this).addClass('active'); 
   		$(this).find('.closetab').show();
    	console.log(this.style);
    });


   $('.closetab').on('click', function(){
   		console.log("oooooo");
   		$(this).parent().removeClass('active');
   		$('.closetab').hide();
   		$('.cube').addClass('animation');
   		console.log("smh");
   });
  });
