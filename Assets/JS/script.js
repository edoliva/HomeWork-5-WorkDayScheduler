// save reference to important DOM elements
var timeDisplayEl = $('#time-display');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY h:m a');
    timeDisplayEl.text(rightNow);
  }
setInterval(displayTime, 1000);

// row 1
var localtask0 = localStorage.getItem("task0");
var submitButton0 = document.querySelector("#submit-button0");
var doneButton0 = document.querySelector("#done-button0"); 
var lastTaskSpan0 = document.querySelector("#taskdisplay0");
var task0 = document.querySelector("#task0");
var row0 = document.querySelector("#row0"); 

console.log(localtask0);
if (localtask0 != null) {
  task0.setAttribute("style", "display: none;");
  lastTaskSpan0.setAttribute("style", "display: inline-block;");
  lastTaskSpan0.textContent = localtask0;
  submitButton0.setAttribute("style", "display: none;");
  doneButton0.setAttribute("style", "display: inline-block;");
} else {doneButton0.setAttribute("style", "display: none;");}
   
submitButton0.addEventListener("click", function(event) {  
  var task0 = document.querySelector("#task0").value.trim();
  if (task0 === "") {
    alert("Enter SOMETHING!");
    return;
  }
  localStorage.setItem("task0", task0);
  lastTaskSpan0.textContent = task0;
  task0 = document.querySelector("#task0");
  task0.setAttribute("style", "display: none;");
  lastTaskSpan0.setAttribute("style", "display: inline-block;");
  submitButton0.setAttribute("style", "display: none;");
  doneButton0.setAttribute("style", "display: inline-block;");
});

doneButton0.addEventListener("click", function(event) {  
  localStorage.removeItem("task0");
  task0 = document.querySelector("#task0");
  task0.setAttribute("style", "display: inline-block;");
  lastTaskSpan0.setAttribute("style", "display: none;");
  submitButton0.setAttribute("style", "display: inline-block;");
  doneButton0.setAttribute("style", "display: none;");
  location.reload()
});


// row 2
var localtask1 = localStorage.getItem("task1");
var submitButton1 = document.querySelector("#submit-button1");
var doneButton1 = document.querySelector("#done-button1"); 
var lastTaskSpan1 = document.querySelector("#taskdisplay1");
var task1 = document.querySelector("#task1");

console.log(localtask1);
if (localtask1 != null) {
  task1.setAttribute("style", "display: none;");
  lastTaskSpan1.setAttribute("style", "display: inline-block;");
  lastTaskSpan1.textContent = localtask1;
  submitButton1.setAttribute("style", "display: none;");
  doneButton1.setAttribute("style", "display: inline-block;");
} else {doneButton1.setAttribute("style", "display: none;");}
   
submitButton1.addEventListener("click", function(event) {  
  var task1 = document.querySelector("#task1").value.trim();
  if (task1 === "") {
    alert("Enter SOMETHING!");
    return;
  }
  localStorage.setItem("task1", task1);
  lastTaskSpan1.textContent = task1;
  task1 = document.querySelector("#task1");
  task1.setAttribute("style", "display: none;");
  lastTaskSpan1.setAttribute("style", "display: inline-block;");
  submitButton1.setAttribute("style", "display: none;");
  doneButton1.setAttribute("style", "display: inline-block;");
});

doneButton1.addEventListener("click", function(event) {  
  localStorage.removeItem("task1");
  task1 = document.querySelector("#task1");
  task1.setAttribute("style", "display: inline-block;");
  lastTaskSpan1.setAttribute("style", "display: none;");
  submitButton1.setAttribute("style", "display: inline-block;");
  doneButton1.setAttribute("style", "display: none;");
  location.reload()
});

// if (hr >= startTime+1) {
//   row1.setAttribute("style", "background-color: red;");
// } else {row1.setAttribute("style", "background-color: green;");} 






// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var hr = (new Date()).getHours(); 
var startTime = 9;

for (var i = 0; i <= 8; i++) {
  var rowi = document.querySelector("#row"+i); 
  if (hr >= startTime+i && hr < startTime+i+1) {rowi.setAttribute("style", "background-color: red;");}
  else if  (hr < startTime+i+1) {rowi.setAttribute("style", "background-color: green;");} 
  else {rowi.setAttribute("style", "background-color: grey;");}
}