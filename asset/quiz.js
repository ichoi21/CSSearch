// function to start the quiz
// #btnStart
$(document).on("click", "#btnStart", function () {
  //triggers quiz in modal
  //   $("#formInput").html(`<div class="modal fade" id="quizModal" tabindex="-1" role="dialog" aria-labelledby="quizModalLabel" aria-hidden="true">
  //   <div class="modal-dialog modal-dialog-centered">
  //     <div class="modal-content">
  //       <div class="modal-header">
  //         <h5 class="modal-title" id="exampleModalLabel">Answer THIS!</h5>
  //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
  //           <span aria-hidden="true">&times;</span>
  //         </button>
  //       </div>
  //       <div class="modal-body text-center">
  //         All Content are not written by us but consolidated to bring together for an idea to portray our skills under web development while taking a BootCamp Program. Credits shall be given to those and from those where the context were given.
  //       </div>
  //       <div class="modal-footer bg-secondary text-light">
  //       </div>
  //     </div>
  //   </div>
  // </div>`)
  refreshQ();
});
