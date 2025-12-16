// Question 1: Wish Master Page
// Function to display current time in 24-hour format (HH:MM)
function showTime() {
  var now = new Date();
  var hours = now.getHours();      // 0–23
  var minutes = now.getMinutes();  // 0–59
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  document.getElementById("currentTime").innerText =
    "Current Time: " + hours + ":" + minutes;
}
// Update time every second
showTime();
setInterval(showTime, 1000);
function wishUser() {
  var name = document.getElementById("username").value;
  var hour = new Date().getHours();
  var wish = "";
  if (name === "") {
    alert("Please enter your name");
    return;
  }
  // Time-based wishes
if (hour >= 0 && hour <= 12) {
  wish = "Good Morning";
} else if (hour >= 13 && hour <= 15) {
  wish = "Good Afternoon";
} else if (hour >= 16 && hour <= 19) {
  wish = "Good Evening";
} else {
  wish = "Good Night";
}
  document.getElementById("wishOutput").innerText =
    "Hello, " + name + ". " + wish + "!";
}
