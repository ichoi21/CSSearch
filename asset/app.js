$(document).ready(function () {
  $("#btnSubmit").on("click", function (e) {
    e.preventDefault();
    var api_key = $("#api_key").val();
    var textInput = $("#textInput").val();
    $("#textInput").val("");
    var cat = $("#cat").val();
    $("#limit").val("");
    $("main").html("");

    $.ajax({
      type: "GET",
      url: `https://developers.zomato.com/api/v2.1/establishments?establishment_id=286&city_id=306&count=5&apikey=${api_key}`,
      dataType: "json",
    }).then(function (response) {
      console.log(response);

      for (var i = 0; i < response.data.length; i++) {
        var still = response.data[i].images.original_still.url;
        var gif = response.data[i].images.original.url;
        $("main").prepend(
          `<img class="gif" data-still=${still} data-gif=${gif} src=${still}></img>`
        );
      }
    });
  });
});

console.log("the git flow");
