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

      var randNum = Math.floor(Math.random() * response.restaurants.length);

      console.log(response.restaurants[randNum].restaurant.url)

      $(".card-title").append(`<h5>${response.restaurants[0].restaurant.name}</h5>`)
      $(".card-text").append(`<img src=${response.restaurants[randNum].restaurant.photos[0].photo.thumb_url}>`);

    });
  });
});

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


