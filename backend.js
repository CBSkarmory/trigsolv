var inSideA;
var inSideB;
var inSideC;
var outSideA;
var outSideB;
var outSideC;
var outAngleA;
var outAngleB;
var outAngleC;
var outputs;
window.onload = function(){
    //load vars
    inSideA = document.getElementById("inSideA");
    inSideB = document.getElementById("inSideB");
    inSideC = document.getElementById("inSideC");

    outSideA = document.getElementById("outSideA");
    outSideB = document.getElementById("outSideB");
    outSideC = document.getElementById("outSideC");

    outAngleA = document.getElementById("outAngleA");
    outAngleB = document.getElementById("outAngleB");
    outAngleC = document.getElementById("outAngleC");
    
//    outputs = [outSideA.textContent, outSideB.textContent, outSideC.textContent, outAngleA.textContent, outAngleB.textContent, outAngleC.textContent];
}

var form = document.getElementById("FormSSS");
form.addEventListener("submit", function (event){
    event.preventDefault();
    //form validation
    if(!(inSideA.value && inSideB.value && inSideC.value)){
        alert("Please fill out all fields");
        return;
    }
    var side_a = parseFloat(inSideA.value);
    var side_b = parseFloat(inSideB.value);
    var side_c = parseFloat(inSideC.value);
    //math validation
    if(side_a + side_b <= side_c ||
       side_b + side_c <= side_a || 
       side_c + side_a <= side_b){
        alert("No such Triangle");
        return;
    }
    //math
    var pi = 3.1415926535
    var angle_a = (360/(2*pi)) * Math.acos((Math.pow(side_b,2) + Math.pow(side_c,2) - Math.pow(side_a,2))/(2 * side_b * side_c));
    var angle_b = (360/(2*pi)) * Math.acos((Math.pow(side_a,2) + Math.pow(side_c,2) - Math.pow(side_b,2))/(2 * side_a * side_c));
    var angle_c = 180 - angle_a - angle_b;
    //output
    outSideA.textContent = side_a;
    outSideB.textContent = side_b;
    outSideC.textContent = side_c;
    outAngleA.textContent = angle_a.toFixed(3);
    outAngleB.textContent = angle_b.toFixed(3);
    outAngleC.textContent = angle_c.toFixed(3);
});