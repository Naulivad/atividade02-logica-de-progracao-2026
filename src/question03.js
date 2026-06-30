import leia from "readline-sync"

var gols = leia.questionInt("QUANTOS GOLS VOCE FEZ? ")
var passC = leia.questionInt("QUANTOS PASSES CERTOS VOCE FEZ? ")
var passE = leia.questionInt("QUANTOS PASSES ERRADOS VOCE FEZ? ")

var cagols = gols * 50
var capassc = passC * 10
var capasse = passE * -5
var calc = cagols + capassc + capasse

console.log("SEU RESULTADO DE PONTOS EM JOGO E DE: " + calc)

if(calc < 50){
    console.log("Péssima partida.")
}else if (calc >= 50 && calc <= 100){
    console.log("Partida ruim.")
}else if (calc >= 101 && calc <= 150){
    console.log("Fez o básico")
}else if (calc >= 151 && calc <= 200){
    console.log("Foi bem na partida")
}else{
    console.log("Jogou demais")
}

