// Grabs the CurrentDay Element from the HTML file and Displays the current day
$("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));

//Grabs planner input Element
var formElement = $(".form-control");

//Grabs the current hour only from moment.js
var currentHour = moment().format("H");

//Grabs the time element from the HTML
var timeEl = $(".time");

//Event Listener To Save User Input to Local Storage
$(".btn").click("click", function (Event) {
  var textInput = formElement.val();
  var time = timeEl.data("hour");
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
