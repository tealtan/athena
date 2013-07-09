/* Author:

$(document).ready(function(){
  
  $('#home ul a').hover(
    function(){ $('.trigger').addClass('hidden'); }
  );
  $('#collecting').hover(
    function(){ $('#pinboard-highlights').toggleClass('hidden'); }
  );
  $('#editing').hover(
    function(){ $('#assistant-editing').toggleClass('hidden'); }
  );
  $('#writing').hover(
    function(){ $('body').toggleClass('frenchpaper'); }
  );
  
  $('#home').toggleClass('editing');
  
});

*/

$(document).ready(function(){
  
  $(".pin-description").each(function() {
     $(this).text($(this).text().replace("<blockquote>>", ""));
   });
  
  $('#making').hover(
    function(){ $('#in-progress').fadeToggle(300, 'linear'); }
  );
  
  if (!Modernizr.touch) {
  
  $('#home ul a').mouseenter(
    function(){ 
      $('.trigger').fadeOut(300, 'linear');
      $('#home').removeClass('editing');
      }
  );
  $('#reading').hover(
    function(){ $('#pinboard-highlights').fadeIn(300, 'linear'); }
  );
  $('#designing').hover(
    function(){ $('#recent-work').fadeIn(300, 'linear'); }
  );
  $('#editing').mouseenter(
    function(){ $('#assistant-editing').fadeIn(300, 'linear'); $('#assistant-editing-pic').fadeIn(500, 'linear'); }
  );
  $('#writing').hover(
    function(){ $('body').toggleClass('frenchpaper'); }
  );
  
  $('#playing').mouseenter(
    function(){ $('#home').fadeTo(300, 0, 'linear'); }
  );
  $('#playing').mouseleave(
    function(){ $('#home').fadeTo(300, 1, 'linear'); }
  );
  
  }
  
});