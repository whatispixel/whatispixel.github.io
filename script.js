$(document).ready(function(){


    $('.cube').addClass('animation');
    $('#currentPage').hide();

    $('#cubefront').hide();
    $('#cubeback').hide();
    $('#cubetop').hide();
    $('#cubebottom').hide();
    $('#cubeleft').hide();
    $('#cuberight').hide();
    

  var navigation = '.cube div';

   $(navigation).on('click', function(){
   		$('.cube').removeClass('animation');
      $('.cube').hide();
      var current = $(this).attr('class');
      console.log(current);
      $('.currentPage').show().addClass('width');
      $('#cube' + current).show();
  });

   $('button').on('click', function(){
      var current = $(this).parent().parent().attr('id');
      $('#' + current).hide();
      $('.currentPage').hide();
      console.log(current);
      $('.cube').show().addClass('animation');
   });

   });
