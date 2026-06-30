import leia from "readline-sync"

var notacarnaval1 = leia.questionFloat("QUAL A NOTA 1: ")
var maiornota = notacarnaval1
var menornota = notacarnaval1
var notacarnaval2 = leia.questionFloat("QUAL A NOTA 2: ")
maiornota = (notacarnaval2 > maiornota) ? notacarnaval2 : maiornota
menornota = (notacarnaval2 < menornota) ? notacarnaval2 : menornota
var notacarnaval3 = leia.questionFloat("QUAL A NOTA 3: ")
maiornota = (notacarnaval3 > maiornota) ? notacarnaval3 : maiornota
menornota = (notacarnaval3 < menornota) ? notacarnaval3 : menornota
var notacarnaval4 = leia.questionFloat("QUAL A NOTA 4: ")
maiornota = (notacarnaval4 > maiornota) ? notacarnaval4 : maiornota
menornota = (notacarnaval4 < menornota) ? notacarnaval4 : menornota
var notacarnaval5 = leia.questionFloat("QUAL A NOTA 5: ")
maiornota = (notacarnaval5 > maiornota) ? notacarnaval5 : maiornota
menornota = (notacarnaval5 < menornota) ? notacarnaval5 : menornota
var notacarnaval6 = leia.questionFloat("QUAL A NOTA 6: ")
maiornota = (notacarnaval6 > maiornota) ? notacarnaval6 : maiornota
menornota = (notacarnaval6 < menornota) ? notacarnaval6 : menornota

var soma = (notacarnaval1 + notacarnaval2 + notacarnaval3 + notacarnaval4 + notacarnaval5 + notacarnaval6) - (maiornota + menornota)

var media = (soma / 4)

console.log("A MEDIA DAS NOTAS RETIRANDO A MAIOR E MENOR NOTA QUE FORAM " + maiornota + " E " + menornota + ", É DE: " + media)

