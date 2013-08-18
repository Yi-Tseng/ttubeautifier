// remove all attribute method
jQuery.fn.removeAttributes = function() {
  return this.each(function() {
    var attributes = $.map(this.attributes, function(item) {
      return item.name;
    });
    var img = $(this);
    $.each(attributes, function(i, item) {
    img.removeAttr(item);
    });
  });
}

// clear all stuff...
// $('html > body').empty();
$('html > body').removeAttributes();
$('html > head').empty();

// add css(maybe not) and jquery
var bs_css = document.createElement('link');
bs_css.href = 'http://getbootstrap.com/dist/css/bootstrap.css';
bs_css.rel = 'stylesheet';
$('html > head').append(bs_css);

// jquery
var jq_script = document.createElement('script');
jq_script.src = 'http://code.jquery.com/jquery-1.10.2.min.js';
$('html > head').append(jq_script);

$('html > body')[0].setAttribute('style', 'padding-top: 60px;');

// set footer
$('#footer')[0].setAttribute('style', 'position:fixed; bottom:0; right:0px; left:0px;');
$('#footer')[0].setAttribute('align', 'center');




