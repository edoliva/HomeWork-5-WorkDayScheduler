// save reference to important DOM elements
var timeDisplayEl = $('#time-display');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY a');
    timeDisplayEl.text(rightNow);
  }
setInterval(displayTime, 1000);

// row 1
for (let i = 0; i <= 7; i++) {
var localtaski = localStorage.getItem("task"+i);
var submitButtoni = document.querySelector("#submit-button"+i);
var doneButtoni = document.querySelector("#done-button"+i); 
var lastTaskSpani = document.querySelector("#taskdisplay"+i);
var taski = document.querySelector("#task"+i);

console.log(localtaski);
if (localtaski != null) {
  taski.setAttribute("style", "display: none;");
  lastTaskSpani.setAttribute("style", "display: inline-block;");
  lastTaskSpani.textContent = localtaski;
  submitButtoni.setAttribute("style", "display: none;");
  doneButtoni.setAttribute("style", "display: inline-block;");
} else {doneButtoni.setAttribute("style", "display: none;");}
   
submitButtoni.addEventListener("click", function(event) {  
  var taski = document.querySelector("#task"+i).value.trim();
  if (taski === "") {
    alert("Enter SOMETHING!");
    return;
  }
  localStorage.setItem("task"+i, taski);
  lastTaskSpani.textContent = taski;
  taski = document.querySelector("#task"+i);
  taski.setAttribute("style", "display: none;");
  lastTaskSpani.setAttribute("style", "display: inline-block;");
  submitButtoni.setAttribute("style", "display: none;");
  doneButtoni.setAttribute("style", "display: inline-block;");
});

doneButtoni.addEventListener("click", function(event) {  
  localStorage.removeItem("task"+i);
  taski = document.querySelector("#task"+i);
  taski.setAttribute("style", "display: inline-block;");
  lastTaskSpani.setAttribute("style", "display: none;");
  submitButtoni.setAttribute("style", "display: inline-block;");
  doneButtoni.setAttribute("style", "display: none;");
  location.reload()
});
};

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
