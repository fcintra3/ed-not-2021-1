import { LinkedList } from './lib/LinkedList.mjs'

let lista = new LinkedList()
console.log(lista.print())

lista.insert(0, 76)
console.log(lista.print())

lista.insert(0, 22)
console.log(lista.print())

lista.insert(2, 8)
console.log(lista.print())

lista.insert(1, 47)
console.log(lista.print())

lista.insert(2, 29)
console.log(lista.print())

lista.insertHead(51)
console.log(lista.print())

lista.insertTail(14)
console.log(lista.print())

let removed = lista.remove(0)
console.log({removed})
console.log(lista.print())

removed = lista.remove(5)
console.log({removed})
console.log(lista.print())

lista.insertTail(33)
console.log(lista.print())

removed = lista.remove(3)
console.log({removed})
console.log(lista.print())

removed = lista.removeTail()
console.log({removed})
console.log(lista.print())

let pos = lista.indexOf(22)
console.log({pos})

pos = lista.indexOf(8)
console.log({pos})

pos = lista.indexOf(99)
console.log({pos})

pos = lista.indexOf(29)
console.log({pos})

let peek0 = lista.peek(0)
let peek2 = lista.peek(2)
let peek3 = lista.peek(3)
let peek4 = lista.peek(4)
console.log({peek0, peek2, peek3, peek4})

let peekHead = lista.peekHead()
let peekTail = lista.peekTail()
console.log({peekHead, peekTail})
