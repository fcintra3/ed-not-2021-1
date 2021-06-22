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

import { LinkedList } from './lib/LinkedList.mjs'

let lista = new LinkedList()
//console.log(lista.print())


function insertVal (val)
{
    let i = 0
    let busca = lista.peek(0)
    let count = lista.count

    console.log({busca, count})
    
    //Se não há nenhum valor inserido ainda
    if(count === 0) 
    {
        lista.insert(0, val)
        console.log("IF")
    }
    else if(busca > val)
    {
        lista.insert(0, val)
        console.log("ELSE IF")
    }
    else 
    {
        
        for (i = 0; i < count; i++)
        {
            busca = lista.peek(i)
            if(busca > val)
            {
                console.log({i})
                lista.insert(i, val)
                console.log("ELSE")
                break    

            }
            
        }
        console.log({i}) 
    }


/*
    else
    {
        console.log({count})
        let busca = lista.peekHead()
        //console.log({busca})
        for(let i = 0; i < count; i++)
        {
            if(busca > val) 
            {
                lista.insert(i, val)
                busca = busca.next
                //console.log(lista.print())
            }
            else if(busca < val)
            {
                lista.insertTail(val)
                busca = busca.next
            }                 
        }
    }
*/
}
console.log("1º Número")
insertVal(25)
console.log(lista.print())

console.log("2º Número")
insertVal(14)
console.log(lista.print())

console.log("3º Número")
insertVal(19)
console.log(lista.print())

console.log("4º Número")
insertVal(3)
console.log(lista.print())

console.log("5º Número")
insertVal(11)
console.log(lista.print())
/*
console.log("6º Número")
insertVal(44)
console.log(lista.print())

console.log("7º Número")
insertVal(99)
console.log(lista.print())

console.log("8º Número")
insertVal(8)
console.log(lista.print())
*/

/*
insert(pos, val)
{
    let inserted = new Node(val)
    if(this.empty) {
        this.#head = inserted
        this.#tail = inserted
    }


}
*/

