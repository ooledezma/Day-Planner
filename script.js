// Grabs the CurrentDay Element from the HTML file and Displays the current day
$("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));

//Grabs planner input Element
var formElement = $(".form-control");

//Grabs the current hour only from moment.js
var currentHour = moment().format("H");

//Grabs the time element from the HTML
var timeEl = $(".time");

//Event Listener To Save User Input to Local Storage
$(".btn").click("click", function () {
  var textInput = $(this).siblings(".description").val();
  var time = $(this).parent().data("hour");
  localStorage.setItem(time, textInput);
});

//Adds color to the planner input based on the hour
for (i = 0; i < timeEl.length; i++) {
  var plannerHour = timeEl[i].getAttribute("data-hour");

  if (plannerHour < currentHour) {
    formElement[i].classList.add("past");
    formElement[i].classList.remove("present");
    formElement[i].classList.remove("future");
  } else if (plannerHour == currentHour) {
    formElement[i].classList.add("present");
    formElement[i].classList.remove("future");
    formElement[i].classList.remove("past");
  } else if (plannerHour > currentHour) {
    formElement[i].classList.add("future");
    formElement[i].classList.remove("past");
    formElement[i].classList.remove("present");
  }
}

//Grabs what is in local storage and add its to the correct time row
$("#9input").val(localStorage.getItem("09"));
$("#10input").val(localStorage.getItem("10"));
$("#11input").val(localStorage.getItem("11"));
$("#12input").val(localStorage.getItem("12"));
$("#13input").val(localStorage.getItem("13"));
$("#14input").val(localStorage.getItem("14"));
$("#15input").val(localStorage.getItem("15"));
$("#16input").val(localStorage.getItem("16"));
$("#17input").val(localStorage.getItem("17"));
