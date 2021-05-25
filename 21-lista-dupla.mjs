import { DoublyLinkedList } from './lib/DoublyLinkedList.mjs'

const lista = new DoublyLinkedList()
console.log(lista.print())

lista.insert(0, 'Odorico')  // Primeiro nodo (lista vazia)
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(1, 'Gercina')  // Inserção no final
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(0, 'Temístocles')  // Inserção no início
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(1, 'Deusdete')  // Inserção intermediária
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(2, 'Alípio')  // Inserção intermediária
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(2, 'Cremilda')  // Inserção intermediária
console.log(lista.print())
console.log(lista.printReverse())

let removed = lista.removeHead()        // Remoção do início
console.log({removed})
console.log(lista.print())
console.log(lista.printReverse())

removed = lista.removeTail()        // Remoção do final
console.log({removed})
console.log(lista.print())
console.log(lista.printReverse())

removed = lista.remove(2)        // Posição intermediária
console.log({removed})
console.log(lista.print())
console.log(lista.printReverse())

lista.insertTail('Pierina')
lista.insertTail('Ildefonso')
console.log(lista.print())
console.log(lista.printReverse())

let peekHead = lista.peekHead()
let peekTail = lista.peekTail()
let peek3 = lista.peek(3)
console.log({peekHead, peekTail, peek3})

let idxDeusdete = lista.indexOf('Deusdete')
let idxPierina = lista.indexOf('Pierina')
let idxCremilda = lista.indexOf('Cremilda')
let idxIldefonso = lista.indexOf('Ildefonso')
let idxOdorico = lista.indexOf('Odorico')
console.log({idxDeusdete, idxPierina, idxCremilda, idxIldefonso, idxOdorico})