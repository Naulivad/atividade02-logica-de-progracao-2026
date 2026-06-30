import leia from "readline-sync"

var numero1 = leia.questionInt("DIGITE O NUMERO 1: ")
var numero2 = leia.questionInt("DIGITE O NUMERO 2: ")
var numero3 = leia.questionInt("DIGITE O NUMERO 3: ")

if(numero1 > numero2 && numero2 > numero3){
    console.log("SEUS NUMEROS EM ORDEM CRESCENTE: " + numero3 + numero2 + numero1)
} else if (numero1 > numero3 && numero3 > numero2){
    console.log("SEUS NUMEROS EM ORDEM CRESCENTE: " + numero2 + numero3 + numero1)
} else if (numero2 > numero1 && numero1 > numero3){
    console.log("SEUS NUMEROS EM ORDEM CRESCENTE: " + numero3 + numero1 + numero2)
} else if (numero3 > numero1 && numero1 > numero2){
    console.log("SEUS NUMEROS EM ORDEM CRESCENTE: " + numero2 + numero1 + numero3)
}else if (numero3 > numero2 && numero2 > numero1){
    console.log("SEUS NUMEROS EM ORDEM CRESCENTE: " + numero1 + numero2 + numero3)
}