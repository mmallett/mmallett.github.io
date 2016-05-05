$(document).ready(function(){

  $('#show-more').click(function(){
    var more = $('div.more');
    if(more.is(':visible')){
      $(this).text('Tell me more');
      more.slideUp();
    }
    else{
      $(this).text('Tell me less');
      more.slideDown();
    }
  });

});
