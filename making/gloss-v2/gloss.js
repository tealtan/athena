// Gloss bookmarklet
// v. 2.0
var connectsToServer = true;

// No Conflict the jQuery
$j = jQuery.noConflict(true);

// Set up variables
var pageTitle = document.title;
var pageUrl = $j("link[rel^='canonical']").attr('href');
if (!pageUrl) { pageUrl = window.location.href; }
var encodedUrl = window.btoa(pageUrl);
console.log('Base64 URL is ' + encodedUrl);

// Break paragraphs into spans of class "sentence" 
// (Sentence detection could be refined)

$j('p').each(function() {
  var sentences = $j(this)
    .text()
    .replace(/([^.!?]*[^.!?\s][.!?]['"]?)(\s|$)/g, '<span class="sentence">$1</span>$2');
  $j(this).html(sentences);
});

// Add toggling of highlighting on click
$j('.sentence').on('click', function() {
  var sentence = $j(this)[0];

  if ($j(this).hasClass('highlighted')) {
    var dataReturnID = $j.data(sentence, "returnID");

    if (connectsToServer) {
      $j.ajax({ // Delete the highlight
          url: 'http://localhost:8000/highlights/'+dataReturnID,
          type: 'DELETE',
          success: function(result) {
              // Do something with the result
          }
      });
    }
  }
  else {
    var highlightedText = $j(this).text();

    if (connectsToServer) {
      $j.ajax({ // Add the highlight
          url: 'http://localhost:8000/highlights/',
          type: 'POST',
          data: { title: pageTitle, url: pageUrl, text: highlightedText },
          success: function(dataReturnID) {
            $j.data(sentence, "returnID", dataReturnID);
            console.log(sentence);
          }
      });
    }
  }
  // Regardless of adding or deleting highlight, toggle the class
  $j(this).toggleClass('highlighted');
});

// Load highlighting CSS

var link = document.createElement("link");
var url = "http://tanmade.com/making/gloss/gloss.css"
link.type = "text/css";
link.rel = "stylesheet";
link.href = url;

if (document.createStyleSheet) {
    document.createStyleSheet(url);
}
else {
    document.getElementsByTagName("body")[0].appendChild(link);
}