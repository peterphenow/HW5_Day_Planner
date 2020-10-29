// select and update current day id
let currentDay = $("#currentDay");
let currentDate = moment().format("dddd, MMM Do, YYYY");
currentDay.text(currentDate);

//get save button to save to local storage
let saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
  console.log("save worked!");
});

//allow user to input notes for each hour
let userInputEl = $(".description");
userInputEl.on("click", function () {
  console.log("click worked!");
});
