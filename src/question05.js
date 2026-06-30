import leia from "readline-sync"

var valor = leia.question("QUAL VALOR VOCE VAI CONVERTER? ")
var opcao = leia.keyInSelect(["C -> F", "F -> C"])