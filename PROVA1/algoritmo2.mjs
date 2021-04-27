/*
    ALGORITMO DE BUSCA BINÁRIA  
    k -> função que representa o algoritmo de busca
    m -> vetor a ser pesquisado
    n -> valor a ser pesquisado
    o -> posição inicial no vetor
    p -> posição final no vetor
    q -> meio calculado do vetor
    f -> função de comparação
*/
function k(m, f) {
    let o = 0, p = m.length - 1, q
    while(p >= o) {
        q = Math.floor((p + o) / 2)
        
        /*if(m[q] === n) return q
        else if(n > m[q]) o = q + 1
        else p = q - 1*/

        /*if(f(m[q]) === 0) return q
        else if(f(m[q] === -1)) o = q + 1
        else p = q - 1*/

        switch(f(m[q])) {
            case 0:
                return q
            case 1:
                o = q + 1
                break
            default: // case -1
                p = q - 1
        }
    }
    return -1  // Não existe
}

import { countries } from './countries.mjs'

console.log(k(countries, (valorVetor, valorBusca = 'Brazil') => {
    if(valorBusca === valorVetor.country) return 0
    else if(valorBusca < valorVetor.country) return -1
    else return 1
}))
