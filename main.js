
var disp = document.querySelectorAll('.resultDiv')[0];
var modeIcon = document.querySelectorAll('.blankDiv')[0];
const hasibBody = document.querySelectorAll('.hasib')[0];
const hasibBtn = document.querySelectorAll('.btn');
const hasibCalculator = document.querySelectorAll('.calculator')[0];

function calcWrite(btnvalue){
    disp.textContent += btnvalue;
};

function hasibDelete(){
    disp.textContent = "";
}

function doit(){
    var result = eval(disp.textContent);
    disp.textContent = result;
    console.log("value is " + result)
}

function modeChange(){
    modeIcon.classList.toggle("active");
    hasibBody.classList.toggle("nightMood");
    hasibCalculator.classList.toggle("nightMood");

    for ( i = 0; i <= hasibBtn.length; i++) {
        hasibBtn[i].classList.toggle("nightMood")
        
    }
    hasibBtn.classList.toggle("nightMood")
}