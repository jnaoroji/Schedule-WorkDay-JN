var saveBtn = $('.saveBtn');
var description = $('.description');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function() {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // Add a click event listener to all save buttons
  // find the parent id of save button
  // save the value of the text description as user input
  // save timeblock id as key in local storage
  saveBtn.on('click', function () {
    var timeBlockId = $(this).parent().attr("id");
    console.log(timeBlockId);
    var userInput = $(this).siblings(".description").val();
    console.log(userInput);
    localStorage.setItem(timeBlockId, userInput);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // var past = dayjs();
  // var future = dayjs();
  // var diff = targetDay.diff(today, 'hours');

  //not in 24 hour format// Get current time in 24 hour from day js
  var currentTime = dayjs().format('hh:mm:ss');
  console.log(currentTime); 
  var currentHour = dayjs().hour();
  console.log(currentHour);
  
  
  // var timeBlockHour = parseInt($(this).attr("id"));
  // console.log(timeBlockHour);


 
  
  // var diff = (timeBlockId).diff(currentHour, 'hours');
  // console.log(diff);
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM D, YYYY'));
});
