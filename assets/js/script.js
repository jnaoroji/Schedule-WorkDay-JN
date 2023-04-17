// All variables declared
var saveBtn = $('.saveBtn');
var description = $('.description');
var timeBlock = $('.time-block');
var timeBlockId = $(timeBlock).attr("id");
var timeBlockId;
var timeBlockHour;
var userInput;

//current hour using dayjs
var currentHour = dayjs().hour();
console.log(currentHour);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//all code in one function
$(document).ready(function() {
   
  // TODO: Add code to display the current date in the header of the page.
  
  //dayjs used to display date in header
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM D, YYYY'));
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //function goes through each timeblock, finds its id and user input and 
  //puts it in its corresponding description text area
  $(timeBlock).each(function () {
    var timeBlockId = $(this).attr('id').split('-')[1];
    console.log("Time Block Id = " + timeBlockId);
    var userInput = localStorage.getItem(timeBlockId);
    console.log("user input = " + userInput);

    if (userInput !== null) {
    $(this).children(".description").val(userInput);
    }
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    // condition changes class by comparing to current hour in day js
    if (parseInt(timeBlockId) < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (parseInt(timeBlockId) == currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }

  });


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    // Add a click event listener to all save buttons, find the parent id of save button
    // save the value of the text description as user input, save timeblock id as key in local storage
    saveBtn.on('click', function (event) {
      event.preventDefault();
      
      timeBlockId = $(this).parent().attr("id").split('-')[1];
      console.log(timeBlockId);
      var userInput = $(this).siblings(".description").val();
      console.log(userInput);
      localStorage.setItem(timeBlockId, userInput);
    
    });
});  
  
