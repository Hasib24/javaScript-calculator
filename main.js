
var disp = document.querySelectorAll('.display')[0];

function calcWrite(btnvalue){
    
    disp.textContent += btnvalue;
    console.log(disp.textContent)
};

function hasibDelete(){
    disp.textContent = "0";
}