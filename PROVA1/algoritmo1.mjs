/*
    ALGORITMO DE ORDENAÇÃO QUICK SORT
    k -> função que representa o algoritmo de ordenação
    m -> vetor a ser ordenado
    n -> posição inicial no vetor
    o -> posição final no vetor
    p -> pivô
    q -> posição de divisão
    f -> função de comparação
*/
function k(m, f, n, o) {
    if(o <= n) return
    const p = o
    let q = n - 1
    for(let i = n; i < o; i++) {
        //if(m[i] < m[p]) {
        if(f(m[p], m[i])) { // Parâmetros invertidos
            q++
            if(i !== q) [ m[i], m[q] ] = [ m[q], m[i] ]
        }
    }
    q++
    //if(m[p] < m[q]) [ m[p], m[q] ] = [ m[q], m[p] ]
    if(f(m[q], m[p])) [ m[p], m[q] ] = [ m[q], m[p] ] // Par. invertidos
    k(m, f, n, q - 1)
    k(m, f, q + 1, o)
}

import { countries } from './countries.mjs'

k(countries, (a, b) => {
    if(a.continent === b.continent) {
        return a.country > b.country
    }
    else return a.continent > b.continent
}, 0, countries.length - 1)
console.log(countries)