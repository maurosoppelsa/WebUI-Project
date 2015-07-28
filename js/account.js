$(document).ready(function(){

  var the_user = localStorage.getItem("session_user");
  var user_obj = JSON.parse(the_user);

if(!user_obj){

  window.location.href = "login.html";

  return false;

}else{

  $('#user_name').text(" "+user_obj.user);

if(user_obj.type=="Admin"){

$('#icon_user').addClass('glyphicon glyphicon-wrench');

$('#admin_panel').show();

$('#divider_profile').show();

}else{

  $('#icon_user').addClass('glyphicon glyphicon-user');

}

$('#logout').click(function(){

  clean_userSession();

  window.location.href = "login.html";

  return false;

});

}

});

function clean_userSession(){

  localStorage.removeItem('session_user');

}
