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
          dresponse.restaurants[0].restaurant.photos[randNum].photo.thumb_url;
        var shopAddress = dresponse.restaurants[0].restaurant.location.address;
        var shopLocality =
          dresponse.restaurants[0].restaurant.location.locality;
        var shopHours = dresponse.restaurants[0].restaurant.timings;
        var uRatings =
          dresponse.restaurants[0].restaurant.user_rating.rating_text;

        $("#restName").html("<h5>" + name + "</h5>");
        $("#restImg").append(
          `<img src=${img}>`
        );
        $("#image").attr("src", img);
        $("#address").html("<b>Location: </b>" + shopAddress);
        $("#hood").html("<b>Neighborhood: </b>" + shopLocality);
        $("#hours").html("<b>Operating Hours: </b>" + shopHours);
        $("#ratings").html("<b>Ratings: </b>" + uRatings);

        var randNum = Math.floor(Math.random() * dresponse.restaurants.length);

        // console.log(dresponse.restaurants[randNum].restaurant.url);

        // var randNum = Math.floor(Math.random() * dresponse.restaurants.length);
        var nameTwo = dresponse.restaurants[1].restaurant.name;
        var imgTwo =
          dresponse.restaurants[1].restaurant.photos[randNum].photo.thumb_url;
        var shopAddressTwo = dresponse.restaurants[1].restaurant.location.address;
        var shopLocalityTwo =
          dresponse.restaurants[1].restaurant.location.locality;
        var shopHoursTwo = dresponse.restaurants[1].restaurant.timings;
        var uRatingsTwo =
          dresponse.restaurants[1].restaurant.user_rating.rating_text;

        $("#restNameTwo").html("<h5>" + nameTwo + "</h5>");
        $("#restImgTwo").append(
          `<img src=${imgTwo}>`
        );
        $("#imageTwo").attr("src", imgTwo);
        $("#addressTwo").html("<b>Location: </b>" + shopAddressTwo);
        $("#hoodTwo").html("<b>Neighborhood: </b>" + shopLocalityTwo);
        $("#hoursTwo").html("<b>Operating Hours: </b>" + shopHoursTwo);
        $("#ratingsTwo").html("<b>Ratings: </b>" + uRatingsTwo);

        var nameThree = dresponse.restaurants[2].restaurant.name;
        var imgThree =
          dresponse.restaurants[2].restaurant.photos[randNum].photo.thumb_url;
        var shopAddressThree = dresponse.restaurants[2].restaurant.location.address;
        var shopLocalityThree =
          dresponse.restaurants[2].restaurant.location.locality;
        var shopHoursThree = dresponse.restaurants[2].restaurant.timings;
        var uRatingsThree =
          dresponse.restaurants[2].restaurant.user_rating.rating_text;

        $("#restNameThree").html("<h5>" + nameThree + "</h5>");
        $("#restImgThree").append(
          `<img src=${imgThree}>`
        );
        $("#imageThree").attr("src", imgThree);
        $("#addressThree").html("<b>Location: </b>" + shopAddressThree);
        $("#hoodThree").html("<b>Neighborhood: </b>" + shopLocalityThree);
        $("#hoursThree").html("<b>Operating Hours: </b>" + shopHoursThree);
        $("#ratingsThree").html("<b>Ratings: </b>" + uRatingsThree);

        var nameFour = dresponse.restaurants[3].restaurant.name;
        var imgFour =
          dresponse.restaurants[3].restaurant.photos[randNum].photo.thumb_url;
        var shopAddressFour = dresponse.restaurants[3].restaurant.location.address;
        var shopLocalityFour =
          dresponse.restaurants[3].restaurant.location.locality;
        var shopHoursFour = dresponse.restaurants[3].restaurant.timings;
        var uRatingsFour =
          dresponse.restaurants[3].restaurant.user_rating.rating_text;

        $("#restNameFour").html("<h5>" + nameFour + "</h5>");
        $("#restImgFour").append(
          `<img src=${imgFour}>`
        );
        $("#imageFour").attr("src", imgFour);
        $("#addressFour").html("<b>Location: </b>" + shopAddressFour);
        $("#hoodFour").html("<b>Neighborhood: </b>" + shopLocalityFour);
        $("#hoursFour").html("<b>Operating Hours: </b>" + shopHoursFour);
        $("#ratingsFour").html("<b>Ratings: </b>" + uRatingsFour);

        var nameFive = dresponse.restaurants[4].restaurant.name;
        var imgFive =
          dresponse.restaurants[4].restaurant.photos[randNum].photo.thumb_url;
        var shopAddressFive = dresponse.restaurants[4].restaurant.location.address;
        var shopLocalityFive =
          dresponse.restaurants[4].restaurant.location.locality;
        var shopHoursFive = dresponse.restaurants[4].restaurant.timings;
        var uRatingsFive =
          dresponse.restaurants[4].restaurant.user_rating.rating_text;

        $("#restNameFive").html("<h5>" + nameFive + "</h5>");
        $("#restImgFive").append(
          `<img src=${imgFive}>`
        );
        $("#imageFive").attr("src", imgFive);
        $("#addressFive").html("<b>Location: </b>" + shopAddressFive);
        $("#hoodFive").html("<b>Neighborhood: </b>" + shopLocalityFive);
        $("#hoursFive").html("<b>Operating Hours: </b>" + shopHoursFive);
        $("#ratingsFive").html("<b>Ratings: </b>" + uRatingsFive);


      });
    });
  });
});

