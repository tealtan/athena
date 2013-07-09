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