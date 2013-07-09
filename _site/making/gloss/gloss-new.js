// No Conflict the jQuery

$j = jQuery.noConflict(true);

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