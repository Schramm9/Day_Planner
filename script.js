$(document).ready(function () {
  // instantiate a moment object
  var currentDay = moment();

  // display value of moment object in #displayMoment div
  $("#displayMoment").text(currentDay);
  //var eDisplayMoment = document.getElementById('displayMoment');
  //eDisplayMoment.innerHTML = currentDay;
  $(".saveBtn").click(function () {
    let time = $(this).parent().attr("id");
    let mtg = $(this).siblings(".description").val();
    localStorage.setItem(time, mtg);
  });
  $("#txt-9 .description").val(localStorage.getItem("txt-9"));
  $("#txt-10 .description").val(localStorage.getItem("txt-10"));
  $("#txt-11 .description").val(localStorage.getItem("txt-11"));
  $("#txt-12 .description").val(localStorage.getItem("txt-12"));
  $("#txt-1 .description").val(localStorage.getItem("txt-1"));
  $("#txt-2 .description").val(localStorage.getItem("txt-2"));
  $("#txt-3 .description").val(localStorage.getItem("txt-3"));
  $("#txt-4 .description").val(localStorage.getItem("txt-4"));
  $("#txt-5 .description").val(localStorage.getItem("txt-5"));
  function hourChanger() {
    let currentHr = moment().hour();
    $(".time-block").each(function () {
      var blockHr = Number($(this).attr("id").split("-")[1]);

      if (blockHr < 9) blockHr = blockHr + 12;
      //console.log(blockHr < currentHr);
      let past = blockHr < currentHr;
      let present = blockHr === currentHr;
      let future = blockHr > currentHr;
      //let description = $(".description");
      $(this).toggleClass("past", past);
      $(this).toggleClass("present", present);
      $(this).toggleClass("future", future);
    });
  }
  hourChanger();

  // repeat for other times
});
