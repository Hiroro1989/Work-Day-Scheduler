// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var data;
  var datas =[];
  var timeblockId;
  var taskEl;

// var tasks = [];
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $(".saveBtn").on("click", function (e) {
    e.preventDefault();

   timeblockId = $(this).parent('.time-block').attr('id');
   taskEl = $(this).parent().children('.description').val();

    data = {
      time: timeblockId,
      task: taskEl,
    }

    datas.push(data);
    
    localStorage.setItem("datas", JSON.stringify(datas));
    console.log(datas);

  });

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
var currentTime =dayjs().format("H");
$('.time-block').each(function(){
  // var timeblockId = $(this).attr('id');
  var hour = parseInt(timeblockId);
  if(hour<currentTime){
    $(this).addClass('past');
  }else if(hour == currentTime){
    $(this).addClass('present');
  }else{
    $(this).addClass('future');
  }
})


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    var savedData = JSON.parse(localStorage.getItem('datas'));
    console.log(savedData);

    if(savedData !== null){
      datas = savedData;
        $.each(datas, function(index, item) {
          $("#" + item.time + " .description").val(item.task);
        });
    }

   


    console.log(savedData);
    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs().format("dddd, MMMM D"); //Do?
    $("#currentDay").text(today);
    //console.log(dayjs().format("h:m"));
  
});