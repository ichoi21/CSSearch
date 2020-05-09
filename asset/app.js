$(document).ready(function () {
  $("#btnSubmit").on("click", function (e) {
    e.preventDefault();
    // var api_key = $("#api_key").val();
    var api_key = "&apikey=8db0f9bc1f4b7d7c56298c24299661bf";
    var cat = "&q=coffee";
    var searchURL = "https://developers.zomato.com/api/v2.1/search?";
    var count = "&count=5";

    // var textInput = $("#textInput").val();
    // $("#textInput").val("");
    // var cat = $("#cat").val();
    // $("#limit").val("");
    // $("main").html("");

    $.ajax({
      type: "GET",
      url: searchURL + "entity_id=306&entity_type=city" + cat + count + api_key,
      dataType: "json",
    }).then(function (response) {
      console.log(response);

<<<<<<< HEAD
      var randNum = Math.floor(Math.random() * response.restaurants.length);

      console.log(response.restaurants[randNum].restaurant.url)

      $(".card-text").append(`<img src=${response.restaurants[randNum].restaurant.photos[0].photo.thumb_url}>`);

      // for (var i = 0; i < response.restaurants.length; i++) {
      //   var still = response.restaurants[i].restaurant.url;
      //   // var gif = response.restaurants[i].restaurant.original.url;
      //   $("body").append(
      //     `<img src=${response.restaurants[randNum].restaurant.photos[0].photo.url}>`
      //   );
      // }
    });
  });
});

=======
      var name = response.address;

      $("#shopName").text(name);
      $("#icon").attr(
        "src",
        "http://openweathermap.org/img/wn/" + icon + ".png"
      );

      $("#address").html("<b>Location: </b>" + shopAddress);
      $("#hood").html("<b>Neighborhood: </b>" + shopLocality);
      $("#hours").html("<b>Operating Hours: </b>" + shopHours);
      $("#ratings").html("<b>Ratings: </b>" + uRatings);
    });
  });
});
>>>>>>> fcab1ef1fd5ea25f128e73337cc91b3e3a39f2a9
