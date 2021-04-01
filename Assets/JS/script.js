// save reference to important DOM elements
var timeDisplayEl = $('#time-display');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY hh:mm a');
    timeDisplayEl.text(rightNow);
  }
setInterval(displayTime, 1000);



// row ALL
var localtaski = localStorage.getItem("task"+i);
var submitButtoni = document.querySelector("#submit-button"+i);
var doneButtoni = document.querySelector("#done-button"+i); 
var lastTaskSpani = document.querySelector("#taskdisplay"+i);
var taski = document.querySelector("#task"+i);
var rowi = document.querySelector("#row"+i); 

for (var i = 0; i <=8; i++) {
  localtaski = localStorage.getItem("task"+i);
  submitButtoni = document.querySelector("#submit-button"+i);
  doneButtoni = document.querySelector("#done-button"+i); 
  lastTaskSpani = document.querySelector("#taskdisplay"+i);
  taski = document.querySelector("#task"+i);
  rowi = document.querySelector("#row"+i); 

console.log(localtaski);
if (localtaski != null) {
  taski.setAttribute("style", "display: none;");
  lastTaskSpani.setAttribute("style", "display: inline-block;");
  lastTaskSpani.textContent = localtaski;
  submitButtoni.setAttribute("style", "display: none;");
  doneButtoni.setAttribute("style", "display: inline-block;");
} else {doneButtoni.setAttribute("style", "display: none;");}
   
submitANDdone (i);

}

function submitANDdone (i) { 
  localtaski = localStorage.getItem("task"+i);
  submitButtoni = document.querySelector("#submit-button"+i);
  doneButtoni = document.querySelector("#done-button"+i); 
  lastTaskSpani = document.querySelector("#taskdisplay"+i);
  taski = document.querySelector("#task"+i);
  rowi = document.querySelector("#row"+i); 

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
  location.reload();
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


// row 1
// var localtaski = localStorage.getItem("taski");
// var submitButtoni = document.querySelector("#submit-buttoni");
// var doneButtoni = document.querySelector("#done-buttoni"); 
// var lastTaskSpani = document.querySelector("#taskdisplayi");
// var taski = document.querySelector("#taski");
// var rowi = document.querySelector("#rowi"); 

// console.log(localtaski);
// if (localtaski != null) {
//   taski.setAttribute("style", "display: none;");
//   lastTaskSpani.setAttribute("style", "display: inline-block;");
//   lastTaskSpani.textContent = localtaski;
//   submitButtoni.setAttribute("style", "display: none;");
//   doneButtoni.setAttribute("style", "display: inline-block;");
// } else {doneButtoni.setAttribute("style", "display: none;");}
   
// submitButtoni.addEventListener("click", function(event) {  
//   var taski = document.querySelector("#taski").value.trim();
//   if (taski === "") {
//     alert("Enter SOMETHING!");
//     return;
//   }
//   localStorage.setItem("taski", taski);
//   lastTaskSpani.textContent = taski;
//   taski = document.querySelector("#taski");
//   taski.setAttribute("style", "display: none;");
//   lastTaskSpani.setAttribute("style", "display: inline-block;");
//   submitButtoni.setAttribute("style", "display: none;");
//   doneButtoni.setAttribute("style", "display: inline-block;");
// });

// doneButtoni.addEventListener("click", function(event) {  
//   localStorage.removeItem("taski");
//   taski = document.querySelector("#taski");
//   taski.setAttribute("style", "display: inline-block;");
//   lastTaskSpani.setAttribute("style", "display: none;");
//   submitButtoni.setAttribute("style", "display: inline-block;");
//   doneButtoni.setAttribute("style", "display: none;");
//   location.reload()
// });


// row 2
// var localtask1 = localStorage.getItem("task1");
// var submitButton1 = document.querySelector("#submit-button1");
// var doneButton1 = document.querySelector("#done-button1"); 
// var lastTaskSpan1 = document.querySelector("#taskdisplay1");
// var task1 = document.querySelector("#task1");

// console.log(localtask1);
// if (localtask1 != null) {
//   task1.setAttribute("style", "display: none;");
//   lastTaskSpan1.setAttribute("style", "display: inline-block;");
//   lastTaskSpan1.textContent = localtask1;
//   submitButton1.setAttribute("style", "display: none;");
//   doneButton1.setAttribute("style", "display: inline-block;");
// } else {doneButton1.setAttribute("style", "display: none;");}
   
// submitButton1.addEventListener("click", function(event) {  
//   var task1 = document.querySelector("#task1").value.trim();
//   if (task1 === "") {
//     alert("Enter SOMETHING!");
//     return;
//   }
//   localStorage.setItem("task1", task1);
//   lastTaskSpan1.textContent = task1;
//   task1 = document.querySelector("#task1");
//   task1.setAttribute("style", "display: none;");
//   lastTaskSpan1.setAttribute("style", "display: inline-block;");
//   submitButton1.setAttribute("style", "display: none;");
//   doneButton1.setAttribute("style", "display: inline-block;");
// });

// doneButton1.addEventListener("click", function(event) {  
//   localStorage.removeItem("task1");
//   task1 = document.querySelector("#task1");
//   task1.setAttribute("style", "display: inline-block;");
//   lastTaskSpan1.setAttribute("style", "display: none;");
//   submitButton1.setAttribute("style", "display: inline-block;");
//   doneButton1.setAttribute("style", "display: none;");
//   location.reload()
// });


// pin time to top
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// color rows
var hr = (new Date()).getHours(); 
var startTime = 9;
for (var i = 0; i <= 8; i++) {
  var rowi = document.querySelector("#row"+i); 
  if (hr >= startTime+i && hr < startTime+i+1) {
    rowi.setAttribute("style", "background-color: #ff6961;");
  } else if (hr < startTime+i+1) {
    rowi.setAttribute("style", "background-color: #77dd77;");
  } else {rowi.setAttribute("style", "background-color: #d3d3d3;");
  }
}

