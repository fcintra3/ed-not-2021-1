// Função que eleva um número ao quadrado
// Se precisar disso em uma situação real, use Math.pow() ou
// o operador **
function quadrado(n) {
    return n * n
}
console.log(quadrado(9))

// Características da função acima:
// 1) Apenas um parâmetro
// 2) Apenas uma linha de código, com return
// 3) CANDIDATA PERFEITA A VIRAR ARROW FUNCTION

// Transformando em arrow function
// a) Não precisa de parênteses envolvendo o parâmetro
// b) A palavra function é substituída pelo sinal =>, DEPOIS do parâmetro
// c) Não são necessárias as chaves nem a palavra return
const quadrado2 = n => n * n
console.log(quadrado2(9))
