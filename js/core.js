/*this file adds all necessaries libraries into the pages*/
$(document).ready(function () {

        /*main style file*/
        $('head').append('<link rel="stylesheet" href="css/style.css" type="text/css" />');
        /*jquery libraries*/
        $('head').append('<link rel="stylesheet" href="js/jquery-ui-1.11.4/jquery-ui.css" />');
        $('head').append('<link rel="stylesheet" href="js/jquery-ui-1.11.4/jquery-ui.structure.css" />');
        $('head').append('<link rel="stylesheet" href="js/jquery-ui-1.11.4/jquery-ui.theme.css" />');
        $('head').append('<script src="js/jquery-ui-1.11.4/jquery-ui.js"></script>');
        $('head').append('<link rel="stylesheet" href="js/jquery-ui-1.11.4/jquery-ui.theme.css" />');
        /*bootstrap libraries ver. 3.3.5*/
        $('head').append('<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">');
        $('head').append('<script src="bootstrap/js/bootstrap.min.js"></script>');
        /*effects files*/
        $('head').append('<script src="js/button_effects.js"></script>');
        $('head').append('<script src="js/img_effects.js"></script>');
});
