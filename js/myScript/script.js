
$(document).ready(function () {
  let videos = [
    one = {
      title: "JavaScript",
      image: "img/card/card.png"
    },
    two = {
      title: "HTML",
      image: "img/card/card.png"
    },
    three = {
      title: "CSS",
      image: "img/card/card.png"
    },
    four = {
      title: "Flexbox",
      image: "img/card/card.png"
    },
    five = {
      title: "JQuery",
      image: "img/card/card.png"
    },
    six = {
      title: "AJax",
      image: "img/card/ajax.png"
    },
    seven = {
      title: "JSon",
      image: "img/card/json.jpg"
    },
    eight = {
      title: "PHP",
      image: "img/card/php.png"
    },
    nine = {
      title: "Laravel",
      image: "img/card/card.png"
    },
    ten = {
      title: "C Program",
      image: "img/card/card.png"
    },
    eleven = {
      title: "C++",
      image: "img/card/card.png"
    },
    twelve = {
      title: "Java",
      image: "img/card/java.jpg"
    },
    thirteen = {
      title: "Apex",
      image: "img/card/apex.png"
    },
    fourteen = {
      title: "Spring",
      image: "img/card/spring.jpg"
    },
    fifhteen = {
      title: "C#",
      image: "img/card/card.png"
    },
    sixteen = {
      title: "JavaScript",
      image: "img/card/js.png"
    },
    twenty = {
      title: "HTML",
      image: "img/card/html.png"
    },
    twentyOne = {
      title: "CSS",
      image: "img/card/css.jpg"
    },
    twentyTwo = {
      title: "Flexbox",
      image: "img/card/flex.jpg"
    },
    twentyThree = {
      title: "JQuery",
      image: "img/card/card.png"
    },
    twentyFour = {
      title: "AJax",
      image: "img/card/ajax.png"
    },
    twentyFive = {
      title: "JSon",
      image: "img/card/json.jpg"
    },
    twentySix = {
      title: "PHP",
      image: "img/card/php.png"
    },
    twentySeven = {
      title: "Laravel",
      image: "img/card/laravel.png"
    },
    twentyEight = {
      title: "C Program",
      image: "img/card/cpro.png"
    },
    twentyNine = {
      title: "C++",
      image: "img/card/cplus.jpg"
    },
    thirty = {
      title: "Java",
      image: "img/card/java.jpg"
    },
    thirtyOne = {
      title: "Apex",
      image: "img/card/apex.png"
    },
    thirtyThree = {
      title: "Spring",
      image: "img/card/spring.jpg"
    },
    thirtyFoure = {
      title: "C#",
      image: "img/card/cshap.png"
    }

  ]
  function loop() {
    for (let i = 0; i < 15; i++) {
      var card = '<div class="col-lg-3  col-sm-6 p-0" >' +
        ' <div class="view overlay zoom card-border">' +
        '<a href="VideoPlay.html">' +
        '<div class="back1">' +
        '<p class="back2">' +
        ' <br>' +
        '<i class="fa fa-play-circle back2"></i>' +
        '<!-- <i class="fa fa-bars back2"></i> -->' +
        '</p>' +
        '</div>' +
        '<img id="thumbnail" src="../' + videos[i].image + '" class="img-fluid" style="height: 100px "alt="Subject">' +
        '<div class="mask flex-center waves-effect waves-light" style="background-color: rgba(0, 0, 0,.7);">' +
        '  <p class="white-text back"><i class="fa fa-play-circle"></i>' +
        '  PLAY</p>' +
        '</div>' +
        '<hr>' +
        '<p class="title">&nbsp; &nbsp;' + videos[i].title + '</p>' +
        '</a> ' +
        '</div>' +
        '</div>';
      $('#p-more').append(card);
    }
  }
  loop();

  $('#btn-showMore').on('click', function () {
    loop();
  });
})
// ..............scroll top function...........
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
                
 function scrollFunction() {
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     document.getElementById("btnScroll").style.display = "block";
     
   } else {
     document.getElementById("btnScroll").style.display = "none";
   
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {

 $("html, body").animate({
             scrollTop: 0
         }, 600);
         return false;
 }
 // ..............///scroll top function...........