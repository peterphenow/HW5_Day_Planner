// select and update current day id
let currentDay = $("#currentDay");
let currentDate = moment().format("dddd, MMM Do, YYYY");
currentDay.text(currentDate);

//sets variable to an empty object for use later
let userInput = {};

//allows save button to save to local storage
let saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
  //take all user inputs and sets to variables
  let nine = $("#nine").val();
  let ten = $("#ten").val();
  let eleven = $("#eleven").val();
  let twelve = $("#twelve").val();
  let one = $("#one").val();
  let two = $("#two").val();
  let three = $("#three").val();
  let four = $("#four").val();
  let five = $("#five").val();

  //creates an object to save to local storage
  userInput = {
    nineAM: nine,
    tenAM: ten,
    elevenAM: eleven,
    twelvePM: twelve,
    onePM: one,
    twoPM: two,
    threePM: three,
    fourPM: four,
    fivePM: five,
  };

  //saves above object to local storage using stringify
  localStorage.setItem("schedule", JSON.stringify(userInput));
});
