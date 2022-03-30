
var num1 = document.getElementById("num1").value
var num2 = document.getElementById("num2").value
var resultado 
var x 
var y 

x = "Olá"
y = "Tchau"

num1 = parseInt(num1)
num2 = parseInt(num2)
resultado = (num1+num2)%2

//if(resultado==0){
 //   x = 1

//}
//else{
//    y = 1
//}

function calcular(params){
    
    document.getElementById("pontos1").innerHTML = `Eu disse: ${resultado}`
    document.getElementById("pontos2").innerHTML = `Eu disse: ${resultado}`
}