ope= {"+": function(x,y){return x+y},
    "-": function(x,y){return x-y},
    "*": function(x,y){return x*y},
    "÷": function(x,y){return x/y}
}

function calcular(){
let num1 = parseFloat(document.querySelector("#num1").value);
let num2 = parseFloat(document.querySelector("#num2").value);
let op = document.querySelector("#select").value;
document.querySelector("#result").innerText = (num1+" "+op+" "+num2+" = " + ope[op](num1,num2))
}