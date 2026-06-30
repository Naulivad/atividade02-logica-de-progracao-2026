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
    diaria * 0.80
}else{
    diaria
}

console.log(diaria)