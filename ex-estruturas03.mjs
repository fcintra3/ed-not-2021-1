/*
    Implemente um programa que receba números em ordem aleatória, mas os
    insira em ordem crescente em uma lista encadeada. Os números devem ser
    adicionados à lista um por vez.

    Por exemplo, inserir o número 25, a lista fica ( 25 )
    Na sequência, insira o número 14, a lista fica ( 14, 25 )
    Insira o número 19, a lista fica (14, 19, 25)
    Insira o número 3, a lista fica (3, 14, 19, 25)

    A cada inserção, o programa deve determinar a posição correta de inserção
    para manter a lista em ordem.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { DoublyLinkedList } from './lib/DoublyLinkedList.mjs'

const list = new DoublyLinkedList()

function insertInList(val) {

    // 1º caso: lista vazia
    if(list.empty) list.insertTail(val)

    // 2º caso: procurando a posicao de inserção
    else {
        for(let i = 0; i < list.count; i++) {
            // Buscar o valor do nodo da posição atual
            let valPos = list.peek(i)
            // Compara o valor a ser inserido (val) com o valor da posição atual (valPos)
            if(valPos > val) {
                // Se o valor que já está na lista é MAIOR que o valor que queremos inserir,
                // encontramos a posição de inserção
                list.insert(i, val)
                return              // Sai da função
            }
        }
        // Se rodamos todo o for sem encontrar a posição de inserção,
        // é porque o novo valor deve ser inserido no final da lista
        list.insertTail(val)
    }

}

insertInList(25)
console.log(list.print())

insertInList(14)
console.log(list.print())

insertInList(19)
console.log(list.print())

insertInList(3)
console.log(list.print())

insertInList(37)
console.log(list.print())

insertInList(19)
console.log(list.print())