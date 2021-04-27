let trocas, comps, pass

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1) {
    if(fim > ini) {     // Condição de saída das chamadas recursivas
        pass++
        const pivot = fim
        let div = ini - 1
        // Loop for vai até a PENÚLTIMA posição
        for(let i = ini; i < fim; i++) {
            //if(vetor[i] < vetor[pivot]) {
            if(fnComp(vetor[pivot], vetor[i])) {    // Parâmetros invertidos
                comps++
                div++
                if(i !== div) {
                    [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ]
                    trocas++
                }
            }
        }
        div++
        // Colocamos o pivô no seu lugar definitivo
        //if(vetor[pivot] < vetor[div]) {
        if(fnComp(vetor[div], vetor[pivot])) {      // Parâmetros invertidos
            [ vetor[pivot], vetor[div] ] = [ vetor[div], vetor[pivot] ]
            trocas++
        }
        comps++

        // Ordena o subvetor à esquerda do pivô
        quickSort(vetor, fnComp, ini, div - 1)

        // Ordena o subvetor à direita do pivô
        quickSort(vetor, fnComp, div + 1, fim)
    }
}

import { gastos } from './cota-parlamentar-282-mil.mjs'

trocas = 0, pass = 0, comps = 0
//console.log('ANTES:', candidatos)
console.time('Ordenando gastos...')
// Ordenando pelo nome de urna (NM_URNA_CANDIDATO)
//quickSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)

// Ordenação por SG_UE, depois por DS_CARGO e, finalmente, por NR_CANDIDATO
quickSort(gastos, (a, b) => {
    if(a.partido === b.partido) {
        if(a.nome_parlamentar === b.nome_parlamentar) {
            return a.id_documento > b.id_documento
        }
        else return a.nome_parlamentar > b.nome_parlamentar
    }
    else return a.partido > b.partido  
})

let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenando gastos...')
console.log('DEPOIS:', gastos)
console.log({trocas, pass, comps, memoria})