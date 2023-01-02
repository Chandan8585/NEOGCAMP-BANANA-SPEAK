
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
outputDiv.innerText = "Tanay Pratap"
console.log(txtInput);


function clickEventHandler(){
    console.log("clicked!") ;
    console.log("input", txtInput.value); 
};
function clickEventHandler(){
    outputDiv.innerText = "ajsjsjsjsjsjsj  " +  txtInput.value;
};

btnTranslate.addEventListener("click", clickEventHandler)



// document.querySelector('textarea');
// document.querySelector("#txt-input");
// .btn-primary
// #input-btn
// "input[name='translator']"

