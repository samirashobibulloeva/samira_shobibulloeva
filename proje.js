
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function myFunction() {
  var x = document.getElementById("myInput");
  document.getElementById("demo").innerHTML = "Şunu arıyorsunuz: " + x.value;

}

function myFunction2() {
  document.getElementById("demo2").innerHTML = "Merhaba Güzel İnsan ! ";
}

function myFunction4(event) {
  let unicode= event.which;
  document.getElementById("demo").innerHTML = unicode;
}

function myFunction33(event) {
  let unicode= event.which;
  document.getElementById("demo33").innerHTML = unicode;
}

  // ПИШИ ПОСЛЕ ЭТОГО 
  // ПИШИ ПОСЛЕ ЭТОГО 
  // ПИШИ ПОСЛЕ ЭТОГО 

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  let myVar = setInterval(myTimer ,1000);
function myTimer() {
  const d = new Date();
  document.getElementById("demo444").innerHTML = d.toLocaleTimeString();
}





$(document).ready(function(){
  
  $("#hide").click(function(){
    $("#sakla").hide();
  });
  $("#show").click(function(){
    $("#sakla").show();
  });
});

$(document).ready(function(){
  $("#hide2").click(function(){
    $("#sakla2").hide();
  });
  $("#show2").click(function(){
    $("#sakla2").show();
  });
});

$(document).ready(function(){
  $("#hide3").click(function(){
    $("#sakla3").hide();
  });
  $("#show3").click(function(){
    $("#sakla3").show();
  });
});

$(document).ready(function(){
  $("#hide4").click(function(){
    $("#sakla4").hide();
  });
  $("#show4").click(function(){
    $("#sakla4").show();
  });
});
$(document).ready(function(){
  $("#hide5").click(function(){
    $("#sakla5").hide();
  });
  $("#show5").click(function(){
    $("#sakla5").show();
  });
});

$(document).ready(function(){
  $("#hide6").click(function(){
    $("#sakla6").hide();
  });
  $("#show6").click(function(){
    $("#sakla6").show();
  });
});

$(document).ready(function(){
  $("button").click(function(){
    var div = $("div");  
    div.animate({left: '100px'}, "slow");
    div.animate({fontSize: '3em'}, "slow");
  });
});

$(document).ready(function(){
  $("#btn1").click(function(){
    $("p").append(" <b>Metin ekle</b>.");
  });

  $("#btn2").click(function(){
    $("ol").append("<li>Liste ekle</li>");
  });
});


// time 

function displayDate() {
  document.getElementById("zamanGoster").innerHTML = Date();
}

//time


// МЕНЯТЬ ЦВЕТ 

function mOver(obj) {
  obj.innerHTML = "Hayattaki açıklardan faydalanıp, gündelik hayattaki sorunların üstesinden gelmeye ve hayattan maksimum kazanım sağlamaya yarayan yöntemlerdir."
}

function mOut(obj) {
  obj.innerHTML = "LifeHack nedir? Öğrenmek için burayı mouse getir"
}


