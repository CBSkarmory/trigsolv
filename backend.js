var inSideA;
var inSideB;
var inSideC;
var outSideA;
var outSideB;
var outSideC;

window.onload = function(){
    //load vars
    inSideA = document.getElementById("inSideA");
    inSideB = document.getElementById("inSideB");
    inSideC = document.getElementById("inSideC");

    outSideA = document.getElementById("outSideA");
    outSideB = document.getElementById("outSideB");
    outSideC = document.getElementById("outSideC");
}

var form = document.getElementById("FormSSS");
form.addEventListener("submit", function (event){
    event.preventDefault();
    if(!(inSideA.value && inSideB.value && inSideC.value)){
        alert("Please fill out all fields");
    }else{
        var side_a = parseFloat(inSideA.value);
        var side_b = parseFloat(inSideB.value);
        var side_c = parseFloat(inSideC.value);

        outSideA.textContent = side_a;
        outSideB.textContent = side_b;
        outSideC.textContent = side_c;
    }


})