
var the_comic;
var comic_obj;
var recomend="recomend";
var qualifier = "qualifier";
var mag = "mag";
var recomId;
var biggest=0;
var big_selection;



$(document).ready(function(){

loadComics();

showComics();

$('#rec_bt').click(function(){

clean_mag();

  for (var i=1;i<=10;i++){

    the_comic = localStorage.getItem(("comic")+i);

    comic_obj = JSON.parse(the_comic);

    mag = "#mag"+i;

    if(comic_obj.recomended==""){


      $(mag).fadeOut(1000);

    }else{

      $(mag).fadeIn(1000);

      $(mag).append('<p id="recomendations" class="data_box">'+comic_obj.recomended+' recomendations</p>');

    }
  }
});


$('#qual_bt').click(function(){

  clean_mag();

  for (var i=1;i<=10;i++){

    the_comic = localStorage.getItem(("comic")+i);

    comic_obj = JSON.parse(the_comic);

    mag = "#mag"+i;

    if(comic_obj.qualification==""){

      $(mag).fadeOut(1000);

    }else{

        $(mag).fadeIn(1000);

        $(mag).append('<p id="qualifications" class="data_box">Qualification: '+comic_obj.qualification+'</p>');

    }

  }

});

$('#top_bt').click(function(){

  clean_mag();

  $('.magazines').fadeIn(1000);

});


$('#most_pop').click(function(){

  clean_mag();

  for (var i=1;i<=10;i++){

    the_comic = localStorage.getItem(("comic")+i);

    comic_obj = JSON.parse(the_comic);

      if(parseInt(comic_obj.recomended)>biggest){

      biggest = parseInt(comic_obj.recomended);

      big_selection = i;

    }
  }

  $('.magazines').fadeOut(1000);

  mag = "#mag"+ big_selection;

    $(mag).append('<p id="recomendations" class="data_box">'+biggest+' recomendations</p>');

  $(mag).fadeIn(1000);

});

});

function clean_mag(){

for (var i=1;i<=10;i++){

  $('#recomendations').remove();
  $('#qualifications').remove();
}
}

function loadComics(){

  var comic = [
{id:"1",name:"Donec nec justo",edition:"lacus",url: "images/magazines/mag1.jpg",qualification:"1",recomended:""},
{id:"2",name:"Vivamus nisl du",edition:"dui",url:"images/magazines/mag2.jpg",qualification:"",recomended:"3"},
{id:"3",name:"Lacinia pellentesque",edition:"dui",url:"images/magazines/mag3.jpg",qualification:"5",recomended:""},
{id:"4",name:"Adipiscing ",edition:"lorem",url:"images/magazines/mag4.jpg",qualification:"2",recomended:"2"},
{id:"5",name:"Vestibulum pulvinar",edition:"Proin",url:"images/magazines/mag5.jpg",qualification:"",recomended:"1"},
{id:"6",name:"Lorem sollicitudin",edition:"tristique",url:"images/magazines/mag6.jpg",qualification:"4",recomended:""},
{id:"7",name:"Proin",edition:"commodo",url:"images/magazines/mag7.jpg",qualification:"",recomended:""},
{id:"8",name:"Quisque arcu",edition:"interdum",url:"images/magazines/mag8.jpg",qualification:"",recomended:"1"},
{id:"9",name:"Class aptent taciti",edition:"Mauris",url:"images/magazines/mag9.jpg",qualification:"",recomended:"2"},
{id:"10",name:"Proin malesuada",edition:"sem",url:"images/magazines/mag10.jpg",qualification:"",recomended:""}
];
localStorage.setItem("comic",JSON.stringify(comic));
}

function showComics(){

var the_comic = [];
the_comic = localStorage.getItem('comic');
console.log("valor de the_comic: " + the_comic);

 comic_obj = JSON.parse(the_comic);

  for (var i=0;i<10;i++){





  console.log('valor de objeto ' + comic_obj[i].name );

  $('#rc1').append('<div id="'+mag+i+'" class="col-md-2 magazines"><div class="mag_content"><img src="'+comic_obj[i].url+'"><span><b>Name:</b> "'+comic_obj[i].name+'"</span><span><b>Edition: </b>"'+comic_obj[i].edition+'"</span><a id="'+recomend+i+'" href="#">Recomend</a><a id="'+qualifier+i+'" href="#">Qualification</a></div></div>');

  }

}
