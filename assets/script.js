// Wrap all code that interacts with the DOM in a call to jQuery.
var timeDisplayEl = $('#currentDay');
var whole = $('#container-whole');

var businessHours = [
  {
    id: "Hour-9",
    hour: "9",
    time: "9",
    ampm: "am",
    task: ""
  },
  {
    id: "Hour-10",
    hour: "10",
    time: "10",
    ampm: "am",
    task: ""
  },
  {
    id: "Hour-11",
    hour: "11",
    time: "11",
    ampm: "am",
    task: ""
  },
  {
    id: "Hour-12",
    hour: "12",
    time: "12",
    ampm: "pm",
    task: ""
  },
  {
    id: "Hour-13",
    hour: "1",
    time: "13",
    ampm: "pm",
    task: ""
  },
  {
    id: "Hour-14",
    hour: "2",
    time: "14",
    ampm: "pm",
    task: ""
  },
  {
    id: "Hour-15",
    hour: "3",
    time: "15",
    ampm: "pm",
    task: ""
  },
  {
    id: "Hour-16",
    hour: "4",
    time: "16",
    ampm: "pm",
    task: ""
  },
  {
    id: "Hour-17",
    hour: "5",
    time: "17",
    ampm: "pm",
    task: ""
  },
];

// Code to display the current date in the header of the page.
displayTime();

function displayTime() {
  var rightNow = dayjs().format('dddd, MMM DD[th] [at] h:mm a');
  timeDisplayEl.text(rightNow);
}

// Code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements.
function saveTasks() {
  var x = $(this).parent().attr("id")
  var y = $(this).siblings(".description").val();
  localStorage.setItem(x, y);
}

function displayTasks() {
  businessHours.forEach(function (_thisHour) {
    $(`#${_thisHour.id}`).val(_thisHour.task);
    console.log($(`#${_thisHour.id}`).val(_thisHour.task));
  })
}

function init() {
  $(".time-block").each(function() {
    var x = $(this).attr("id");
    $(this).children(".description").val(localStorage.getItem(x));
  })
 // if (storedData) {
 //   businessHours = storedData;
 // }

 // saveTasks();
  //displayTasks();
}


// Code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. 
let currentHour = dayjs().hour();

businessHours.forEach(function (thisHour) {
  let colorCode 
  if (currentHour > thisHour.time) {
    colorCode = "past";
  } else if (currentHour+"" === thisHour.time) {
    colorCode = "present";
  } else {
    colorCode = "future";
  }

  whole.append(`<div class="container-fluid px-5">
                  <div id=${thisHour.id} class="time-block row">
                    <div class="hour col-2 col-md-1 py-3 ${colorCode}">${thisHour.hour} ${thisHour.ampm}</div>
                    <textarea class="col-8 col-md-9 description ${colorCode}" rows="3"></textarea>
                    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
                    <i class="fas fa-save" aria-hidden="true"></i>
                    </button>
                    <button class="btn trashBtn col-2 col-md-1" aria-label="save">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>`)
  
})

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
// $(".saveBtn").on("click", function() {
//   console.log($(this).siblings(".description").val());
// })

$(".saveBtn").on("click", saveTasks)
init()

