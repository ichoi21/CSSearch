$(document).ready(function () {
  $("#btnSubmit").on("click", function (e) {
    e.preventDefault();
    var api_key = "&apikey=8db0f9bc1f4b7d7c56298c24299661bf";
    var cat = "&q=coffee";
    var searchURL = "https://developers.zomato.com/api/v2.1/search?";
    var cityURL = "https://developers.zomato.com/api/v2.1/cities?";
    var count = "&count=5";
    var textInput = $("#textInput").val();
    var entityId = "";
    var OpHours = moment().format("MMMM Do YYYY, h:mm:ss a");
    console.log(OpHours);

    $.ajax({
      type: "GET",
      url: cityURL + "q=" + textInput + api_key,
      dataType: "json",
    }).then(function (response) {
      console.log(response);

      var cityId = response.location_suggestions[0].id;
      var entityId = "entity_id=" + cityId + "&entity_type=city";
      // console.log(entityId);

      $.ajax({
        type: "GET",
        url: searchURL + entityId + cat + count + api_key,
        dataType: "json",
      }).then(function (dresponse) {
        console.log(dresponse);

        var randNum = Math.floor(Math.random() * dresponse.restaurants.length);

        console.log(dresponse.restaurants[randNum].restaurant.url);

        // for (var i = 0; i < response.restaurants.length; i++) {
        //   var still = response.restaurants[i].restaurant.url;
        //   // var gif = response.restaurants[i].restaurant.original.url;
        //   $("body").append(
        //     `<img src=${response.restaurants[randNum].restaurant.photos[0].photo.url}>`
        //   );
        // }

        var name = dresponse.restaurants[0].restaurant.name;
        var img =
          dresponse.restaurants[randNum].restaurant.photos[0].photo.thumb_url;
        var shopAddress = dresponse.restaurants[0].restaurant.location.address;
        var shopLocality =
          dresponse.restaurants[0].restaurant.location.locality;
        var shopHours = dresponse.restaurants[0].restaurant.timings;
        var uRatings =
          dresponse.restaurants[0].restaurant.user_rating.rating_text;

        var randNum = Math.floor(Math.random() * dresponse.restaurants.length);

        console.log(dresponse.restaurants[randNum].restaurant.url);

        var randNum = Math.floor(Math.random() * dresponse.restaurants.length);
        var name = dresponse.restaurants[0].restaurant.name;
        var img =
          dresponse.restaurants[randNum].restaurant.photos[0].photo.thumb_url;
        var shopAddress = dresponse.restaurants[0].restaurant.location.address;
        var shopLocality =
          dresponse.restaurants[0].restaurant.location.locality;
        var shopHours = dresponse.restaurants[0].restaurant.timings;
        var uRatings =
          dresponse.restaurants[0].restaurant.user_rating.rating_text;

        $(".card-text").append(
          `<img src=${dresponse.restaurants[randNum].restaurant.photos[0].photo.thumb_url}>`
        );

        $(".card-title").html("<h5>" + name + "</h5>");
        $("#image").attr("src", img);
        $("#address").html("<b>Location: </b>" + shopAddress);
        $("#hood").html("<b>Neighborhood: </b>" + shopLocality);
        $("#hours").html("<b>Operating Hours: </b>" + shopHours);
        $("#ratings").html("<b>Ratings: </b>" + uRatings);
      });
    });
  });
});
