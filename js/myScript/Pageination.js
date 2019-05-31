$(document).ready(function () {
  let videos = [
    one = {
      title: "JavaScript",
      image: "img/card/js.png"
    },
    two = {
      title: "HTML",
      image: "img/card/html.png"
    },
    three = {
      title: "CSS",
      image: "img/card/css.jpg"
    },
    four = {
      title: "Flexbox",
      image: "img/card/flex.jpg"
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
      image: "img/card/laravel.png"
    },
    ten = {
      title: "C Program",
      image: "img/card/cpro.png"
    },
    eleven = {
      title: "C++",
      image: "img/card/cplus.jpg"
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
      image: "img/card/cshap.png"
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

  function content(sd, ed) {
    $("#parent").empty()
    for (let i = sd; i < ed; i++) {
      var cardIndex = '<div class="col-lg-3  col-sm-6" >' +
        ' <div class="view overlay zoom card-border">' +
        '<a href="page/VideoPlay.html">' +
        '<div class="back1">' +
        '<p class="back2">' +
        ' <br>' +
        '<i class="fa fa-play-circle back2"></i>' +
        '<!-- <i class="fa fa-bars back2"></i> -->' +
        '</p>' +
        '</div>' +
        '<img id="thumbnail" src="' + videos[i].image + '" class="img-fluid" style="height: 100px "alt="Subject">' +
        '<div class="mask flex-center waves-effect waves-light" style="background-color: rgba(0, 0, 0,.7);">' +
        '  <p class="white-text back"><i class="fa fa-play-circle"></i>' +
        '  PLAY</p>' +
        '</div>' +
        '<hr>' +
        '<p class="title">&nbsp; &nbsp;' + videos[i].title + '</p>' +
        '</a> ' +
        '</div>' +
        '</div>';
      $('#parent').append(cardIndex);
    }
  }
  $('#pagination-demo').twbsPagination({
    totalPages: Math.round(videos.length / 9),
    visiblePages: 2,
    next: 'Next',
    prev: 'Prev',
    onPageClick: function (event, page) {
      //fetch content and render here
      start = (page - 1) * 12;
      end = 12 * (page);
      content(start, end);
    }
  });
})

