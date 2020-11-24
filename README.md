# HW5_Day_Planner

### **Objective**

The objective of this homework was to create a daily scheduler where the user could input tasks or events as a reminder for each hour throughout a workday and have it save to local storage. I needed to use Moment.js to handle date and times and in order to dynamically update the CSS throughout the day to highlight past, present, and future hours. After inputs are saved, the user can simply click the clear calendar button to delete the object from local storage.

### **Challenges**

This homework required me to research and use Moment.js without any practice or reviewing in class. This was a bit challenging having to learn it all on my own by just reading the online documentation. My biggest challenge was figuring out how to dynamically highlight each hour based on the time of day. Eventually, I just had to google and modify an example I found on StackOverflow. Another challenge I faced was deciding between dynamically creating the HTML time blocks with the javascript, or manually creating the time blocks within the HTML itself. I decided to manually create each block in the HTML since I wasn't very comfortable creating it with Javascript. By the due date for this homework, though, I felt like I had a good enough understanding to create it with javascript, but I just didn't have the time to redo the entire assignment. I also was not able to figure out how to make each save button save only the time block it was with. In the end, I had any save button work to save the entire page, which still works just fine.

### **Link**

[See deployed page here](https://peterphenow.github.io/HW5_Day_Planner/)

### **Screenshots**

<img src="./assets/img/WorkdaySchedulerBlank.png" alt="scheduler with no input" width="400" height="250">&nbsp;&nbsp;<img src="./assets/img/WorkdaySchedulerWithInputs.png" alt="scheduler with saved input" width="400" height="250">

### **License**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
