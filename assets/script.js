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
