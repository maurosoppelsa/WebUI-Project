$(document).ready(function(){

var imageUrl1 = "images/slide1.png";
var imageUrl2 = "images/slide2.png";
var imageUrl3 = "images/slide3.png";

$('#slider_home').css('background-image', 'url(' + imageUrl1 + ')');

$('#banner2').hide();

$('#banner3').hide();

$('#banner4').hide();

$('#title_sld1').hide();

$('#text_sld1').hide();

$('#title_sld1').slideDown(800);

$('#text_sld1').slideDown(1000);

$('#slider_home').delay(8000).fadeOut(2000);

setTimeout(function() {
        $('#slider_home').css('background-image', 'url(' + imageUrl2 + ')');

        $('#title_sld1').hide();

        $('#text_sld1').hide();

        $('#bn1_bt').hide();

        $('#banner2').fadeIn(1000);

    }, 10000);

$('#slider_home').delay(4000).fadeIn(2000);

$('#slider_home').delay(8000).fadeOut(2000);


setTimeout(function() {
        $('#slider_home').css('background-image', 'url(' + imageUrl3 + ')');

        $('#banner2').hide();

        $('#banner3').fadeIn(1000);

        $('#banner4').fadeIn(1000);

    }, 27000);

$('#slider_home').delay(4000).fadeIn(2000);

});
