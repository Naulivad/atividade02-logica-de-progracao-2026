import leia from "readline-sync"

console.log ("------HOTEL------")

var dias = leia.questionInt("OLA, QUANTOS DIAS VOCE PASSOU EM NOSSO HOTEL? ")
var idade = leia.questionInt("QUAL A SUA IDADE? ")
var diaria = 0

if (dias <= 5){
    diaria = 100
}else if(dias >= 6 && dias <= 10 ){
    diaria = 90
}else{
    diaria = 80
}

if (idade > 60){
var diariax = diaria * 0.80
    console.log("SUAS DIARIAS FORAM DE: R$ " + diariax)
}else{
var diariax = diaria
    console.log("SUAS DIARIAS FORAM DE: R$ " + diariax)
}