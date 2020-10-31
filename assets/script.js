// select and update current day id
let currentDay = $("#currentDay");
let currentDate = moment().format("dddd, MMM Do, YYYY");
currentDay.text(currentDate);

//sets variable to an empty object for use later
let userInput = {};
//create variables for HTML elements
let nine = $("#nine");
let ten = $("#ten");
let eleven = $("#eleven");
let twelve = $("#twelve");
let one = $("#one");
let two = $("#two");
let three = $("#three");
let four = $("#four");
let five = $("#five");

//allows save button to save to local storage
let saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
  //take all user inputs and sets to variables
  let nineVal = nine.val();
  let tenVal = ten.val();
  let elevenVal = eleven.val();
  let twelveVal = twelve.val();
  let oneVal = one.val();
  let twoVal = two.val();
  let threeVal = three.val();
  let fourVal = four.val();
  let fiveVal = five.val();

  //creates an object to save to local storage
  userInput = {
    nineAM: nineVal,
    tenAM: tenVal,
    elevenAM: elevenVal,
    twelvePM: twelveVal,
    onePM: oneVal,
    twoPM: twoVal,
    threePM: threeVal,
    fourPM: fourVal,
    fivePM: fiveVal,
  };

  //saves above object to local storage using stringify
  localStorage.setItem("schedule", JSON.stringify(userInput));
});

//run function to check if any previous user data is stored in local storage in order to populate times
getStoredData();

//creates a function to pull any saved local storage data for the calendar
function getStoredData() {
  let userInputParsed = JSON.parse(localStorage.getItem("schedule"));

  //if local storage is empty, or null, exit function
  if (userInputParsed === null) {
    nine.val("");
    ten.val("");
    eleven.val("");
    twelve.val("");
    one.val("");
    two.val("");
    three.val("");
    four.val("");
    five.val("");
  } else {
    //set previous user inputs to calendar fields
    nine.val(userInputParsed.nineAM);
    ten.val(userInputParsed.tenAM);
    eleven.val(userInputParsed.elevenAM);
    twelve.val(userInputParsed.twelvePM);
    one.val(userInputParsed.onePM);
    two.val(userInputParsed.twoPM);
    three.val(userInputParsed.threePM);
    four.val(userInputParsed.fourPM);
    five.val(userInputParsed.fivePM);
  }
}

//clear "schedule" from local storage when button clicked
let clearBtn = $("#clear");
clearBtn.on("click", function () {
  localStorage.removeItem("schedule");
  getStoredData();
});

//set moment.js hours
$("#09").text(moment(9, "HH:mm").format("LT"));
$("#10").text(moment(10, "HH:mm").format("LT"));
$("#11").text(moment(11, "HH:mm").format("LT"));
$("#12").text(moment(12, "HH:mm").format("LT"));
$("#13").text(moment(13, "HH:mm").format("LT"));
$("#14").text(moment(14, "HH:mm").format("LT"));
$("#15").text(moment(15, "HH:mm").format("LT"));
$("#16").text(moment(16, "HH:mm").format("LT"));
$("#17").text(moment(17, "HH:mm").format("LT"));

//the following function was copied and modified from https://stackoverflow.com/questions/62462599/how-can-i-change-elements-style-based-on-the-time-of-day
//Change textarea background color based on time
let checkTime = function () {
  //Get Current time
  let currentTime = moment().format("HH");

  //get all elements with class "hourly-block"
  let hourlyBlockElements = $(".hourly-block");

  //loop through hourly-block classes
  for (let i = 0; i < hourlyBlockElements.length; i++) {
    //Get element i's ID as a string
    let elementID = hourlyBlockElements[i].id;

    //get element by ID
    let manipID = document.getElementById(hourlyBlockElements[i].id);

    //remove any old classes from element
    $(hourlyBlockElements[i].id).removeClass(".present .past .future");

    // apply new class if task is present/past/future. Applies to the next sibling of the parent element
    if (elementID < currentTime) {
      $(manipID).parent().next().addClass("past");
    } else if (elementID > currentTime) {
      $(manipID).parent().next().addClass("future");
    } else {
      $(manipID).parent().next().addClass("present");
    }
  }
};

// checkTime every 5 minutes
setInterval(checkTime(), 1000 * 60 * 5);
