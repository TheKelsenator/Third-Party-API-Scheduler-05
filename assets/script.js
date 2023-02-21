// Wrap all code that interacts with the DOM in a call to jQuery.
var timeDisplayEl = $('#currentDay');
var row = $('#hour');


// Add code to display the current date in the header of the page.
function displayTime() {
  var rightNow = dayjs().format('dddd, MMM DD[th] [at] h:mm a');
  timeDisplayEl.text(rightNow);
}

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
function displayRows(businessHours) {
  for (let i = 0; i < businessHours.length; i++) {
    if 
  }
}






var businessHours = [
  {
    id: "0",
    hour: "9",
    time: "9",
    ampm: "am",
    task: ""
  },
  {
    id: "1",
    hour: "10",
    time: "10",
    ampm: "am",
    task: ""
  },
  {
    id: "2",
    hour: "11",
    time: "11",
    ampm: "am",
    task: ""
  },
  {
    id: "3",
    hour: "12",
    time: "12",
    ampm: "pm",
    task: ""
  },
  {
    id: "4",
    hour: "1",
    time: "13",
    ampm: "pm",
    task: ""
  },
  {
    id: "5",
    hour: "2",
    time: "14",
    ampm: "pm",
    task: ""
  },
  {
    id: "6",
    hour: "3",
    time: "15",
    ampm: "pm",
    task: ""
  },
  {
    id: "7",
    hour: "4",
    time: "16",
    ampm: "pm",
    task: ""
  },
  {
    id: "8",
    hour: "5",
    time: "17",
    ampm: "pm",
    task: ""
  },
]

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?



// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

displayTime();

