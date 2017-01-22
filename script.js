   $(document).ready(function(){

  	$('.closetab').hide();
    
$('#front').hide();

    $('.cube').addClass('animation');
  $('.currentPage').hide();

  var navigation = '.cube div';

   $(navigation).on('click', function(){
   		$('.cube').removeClass('animation');
      $('.cube').hide();
      
      var page=this.className;
      console.log(page);
      $('.currentPage').show().addClass('black');
                   
      
      

  });


   $('#close').on('click', function(){
      $('.currentPage').hide();
      $('.cube').show().addClass('animation');  
   });    
  });
