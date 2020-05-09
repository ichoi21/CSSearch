$(document).ready(function () {
  $("#btnSubmit").on("click", function (e) {
    e.preventDefault();
    // var api_key = $("#api_key").val();
    var api_key = "8db0f9bc1f4b7d7c56298c24299661bf";
    var textInput = $("#textInput").val();
    $("#textInput").val("");
    var cat = $("#cat").val();
    $("#limit").val("");
    $("main").html("");

    $.ajax({
      type: "GET",
      url: `https://developers.zomato.com/api/v2.1/search?entity_id=306&entity_type=city&q=coffee%20shop&count=3&apikey=${api_key}`,
      dataType: "json",
    }).then(function (response) {
      console.log(response);

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

