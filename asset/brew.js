$(document).ready(function () {
  init();

  function init() {
    $("#btnBrew").on("click", function (e) {
      e.preventDefault();
      $("#brew").html(`<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/2Sela-8BF9Q" allowfullscreen></iframe>
</div>`);
    });

    $("#btnMyth").on("click", function (e) {
      e.preventDefault();
      $("#myth").html(`<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.missioncoffeeco.com/blogs/news/fact-or-myth-do-light-roasts-have-more-caffeine-than-dark-roasts"></iframe>
</div>`);
    });

    $("#btnRoast").on("click", function (e) {
      e.preventDefault();
      $("#roast").html(`<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.kickinghorsecoffee.com/en/blog/caffeine-myths-espresso-vs-drip"></iframe>
</div>`);
    });

    $("#btnCB").on("click", function (e) {
      e.preventDefault();
      $("#cold").html(`<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/3ypIcalc59Y"></iframe>
</div>`);
    });
  }
});
