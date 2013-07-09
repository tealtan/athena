// No Conflict the jQuery

$j = jQuery.noConflict(true);

// Break paragraphs into spans of class "sentence" 
// (Sentence detection could be refined)

alert('Working!');

// function parseStory() {
//   var story = $j(this);
//   var storyJSON = "";
//   
//   $story.on('click', function() {
//     
//     if ($story.find('h3 a')) {
//       storyJSON += "headline: " + $story.find('h3 a').html + ",";
//     }
//     
//     prompt("Story info",storyJSON);
//   });
// };

$j('.aColumn .ledeStory').each(function() {

  var storyJSON = "{\n  large_story: true, \n";
  
  $j(this).on('click', function() {
    
    var storyinputs = $j(this).children();
    
    storyJSON += "  headline: '" + $j(storyinputs).find('h1 a').text().trim() + "',\n";
    storyJSON += "  byline: '" + $j(storyinputs).find('.byline').text().substring(4).trim() + "',\n";
    
    $j(storyinputs).each(function() {
      if ($j(this).is('.ledePhoto')) {
        storyJSON += "  photo_url: '" + $j(this).find('.image a img').attr('src') + "',\n";
        storyJSON += "  photo_credit: '" + $j(this).find('.credit').text().trim() + "',\n"; }
      if ($j(this).is('.summary')) {
        storyJSON += "  summary: '" + $j(this).text().trim() + "',\n"; }
      if ($j(this).is('.refer')) {
        storyJSON += "  refers: '" + $j(this).html().trim() + "',\n"; }
    });
    storyJSON = storyJSON.slice(0,-2);
    storyJSON += " },";
    
    prompt("Story info",storyJSON);
  });
  
});

$j('.aColumn .storyFollowsLede').each(function() {
  
  var storyJSON = "{\n  small_story: true, \n";
  
  $j(this).on('click', function() {
    
    var storyinputs = $j(this).children();
    $j(storyinputs).each(function() {
      if ($j(this).is('.thumbnail')) {
        storyJSON += "  photo_url: '" + $j(this).children('a').children('img').attr("src") + "',\n"; }
      else if ($j(this).is('.kicker')) {
        storyJSON += "  kicker: '" + $j(this).text() + "',\n"; }
      else if ($j(this).is('h1')) {
        storyJSON += "  headline: '" + $j(this).children('a').text().trim() + "',\n"; }
      else if ($j(this).is('h3')) {
        storyJSON += "  headline: '" + $j(this).children('a').text().trim() + "',\n"; }
      else if ($j(this).is('h5')) {
        storyJSON += "  headline: '" + $j(this).children('a').text().trim() + "',\n"; }
      else if ($j(this).is('.byline')) {
        storyJSON += "  byline: '" + $j(this).text().substring(4).trim() + "',\n"; }
      else if ($j(this).is('.summary')) {
        storyJSON += "  summary: '" + $j(this).text().trim() + "',\n"; }
      else if ($j(this).is('.refer')) {
        storyJSON += "  refers: '" + $j(this).html().trim() + "',\n"; }
    });
    storyJSON = storyJSON.slice(0,-2);
    storyJSON += " },";  
    
    prompt("Story info",storyJSON);
  });
  
});

$j('.aColumn .story').each(function() {
  
  var storyJSON = "{\n  small_story: true, \n";
  
  $j(this).on('click', function() {
    
    var storyinputs = $j(this).children();
    $j(storyinputs).each(function() {
      if ($j(this).is('.thumbnail')) {
        storyJSON += "  photo_url: '" + $j(this).children('a').children('img').attr("src") + "',\n"; }
      else if ($j(this).is('.kicker')) {
        storyJSON += "  kicker: '" + $j(this).text() + "',\n"; }
      else if ($j(this).is('h1')) {
        storyJSON += "  headline: '" + $j(this).children('a').text().trim() + "',\n"; }
      else if ($j(this).is('h3')) {
        storyJSON += "  headline: '" + $j(this).children('a').text().trim() + "',\n"; }
      else if ($j(this).is('h5')) {
        storyJSON += "  headline: '" + $j(this).children('a').text().trim() + "',\n"; }
      else if ($j(this).is('.byline')) {
        storyJSON += "  byline: '" + $j(this).text().substring(4).trim() + "',\n"; }
      else if ($j(this).is('.summary')) {
        storyJSON += "  summary: '" + $j(this).text().trim() + "',\n"; }
      else if ($j(this).is('.refer')) {
        storyJSON += "  refers: '" + $j(this).html().trim() + "',\n"; }
    });
    storyJSON = storyJSON.slice(0,-2);
    storyJSON += " },";  
    
    prompt("Story info",storyJSON);
  });
  
});

$j('.bColumn .story').each(function() {
  
  var storyJSON = "{ inline_media_type: '',\n";
  
  $j(this).on('click', function() {
    
    var storyinputs = $j(this).children();
    $j(storyinputs).each(function() {
      if ($j(this).is('.wideThumb')) {
        storyJSON += "  photo_url: '" + $j(this).children('a').children('img').attr("src") + "',\n"; }
      else if ($j(this).is('.kicker')) {
        storyJSON += "  kicker: '" + $j(this).text() + "',\n"; }
      else if ($j(this).is('h5')) {
        storyJSON += "  headline: '" + $j(this).children('a').text().trim() + "',\n"; }
      else if ($j(this).is('.summary')) {
        storyJSON += "  summary: '" + $j(this).text().trim() + "',\n"; }
      else if ($j(this).is('.refer')) {
        storyJSON += "  refers: '" + $j(this).html().trim() + "',\n"; }
    });
    storyJSON = storyJSON.slice(0,-2);
    storyJSON += " },";  
    
    prompt("Story info",storyJSON);
  });
  
});