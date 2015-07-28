$(document).ready(function(){

$('#invalid_login').hide();

$('#form_register').hide();

  $('#reg_user').click(function(){

    $('#form_login').fadeOut();

    $('#form_register').fadeIn();

  });

$('#register_bt').click(function(){

var new_user = $('#new_user').val();

var new_pass = $('#new_pass').val();

var ret_pass = $('#ret_pwd').val();

var type_user = $('#user_options').val();

 if(/^[a-zA-Z0-9- ]*$/.test(new_user) == false) {

  $('#invalid_data').text("The user must not have special characters");
  $('#invalid_data').fadeIn();

} else if(new_user.length ==0 || new_pass.length ==0 || ret_pass.length ==0){

  $('#invalid_data').text("You have to complete all the fields");
  $('#invalid_data').fadeIn();


} else if(new_pass.length <7){

  $('#invalid_data').text("The password must be greater than 7");
  $('#invalid_data').fadeIn();

} else if(new_pass != ret_pass){

  $('#invalid_data').text("The paswords not match");
  $('#invalid_data').fadeIn();

} else{

  AddUser(new_user, new_pass,type_user);

    $('#form_login').fadeIn();
    $('#form_register').fadeOut();
}

$('#new_user').focus(function(){

  $('#invalid_data').hide();

});

$('#new_pass').focus(function(){

  $('#invalid_data').hide();

});

$('#ret_pwd').focus(function(){

  $('#invalid_data').hide();

});

});

$('#login_bt').click(function(){

  var user_input = $('#name').val();
  var pass_input = $('#pwd').val();

  var validate= validateUser (user_input,pass_input);

  if(validate){

window.location.href = "index.html";

return false;

  } else{

$('#invalid_login').fadeIn();

  }

});

$('#name').focus(function(){

  $('#invalid_login').hide();

});

$('#pwd').focus(function(){

  $('#invalid_login').hide();

});

});

function AddUser(new_user, new_pass,type)
{
  var data = localStorage.getItem('user');
  var users = [];
  if(data){users = JSON.parse(data);}
  users.push({user:new_user,password: new_pass, type: type});
  localStorage.setItem("user",JSON.stringify(users));
}


function validateUser (user, pass)
{
  var user_data = localStorage.getItem('user');
  var user_array = [];
  if(user_data){user_array = JSON.parse(user_data);}
  
  var valid_user = false;
  if(user_array){
    for(var i=0;i<user_array.length;i++){
        var current_user = user_array[i];
        if(current_user.user == user && current_user.password == pass)
        {  valid_user = true;
           localStorage.setItem("session_user",JSON.stringify(current_user));
        }
    }
  }
  return valid_user;
}
