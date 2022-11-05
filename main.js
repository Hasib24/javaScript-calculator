
var disp = document.querySelectorAll('.display')[0];

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