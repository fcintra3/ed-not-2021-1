/*
    ESTRUTURAS DE DADOS PILHA

    - Pilha é uma lista linear de acesso restrito, que permite apenas as operações
      de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
    - Como consequência, a pilha funciona pelo princípio LIFO (Last In, First Out -
      último a entrar, primeiro a sair).
    - A principal aplicação das pilhas são tarefas que envolvem a inversão de uma
      sequência de dados.
*/
export class Stack {

    #data

    constructor() {
        this.#data = []      // Inicializa o vetor vazio
    }

    // Inserção
    push(val) {
        this.#data.push(val)
    }

    // Retirada
    pop() {
        return this.#data.pop()
    }

    // "Espiadinha": retorna o valor que está no topo da pilha (último valor), mas
    // sem retirá-lo de lá
    peek() {
        return this.#data[this.#data.length - 1]
    }

    // A pilha está vazia (true/false) - PROPRIEDADE CALCULADA (só getter)
    get empty() {
        return this.#data.length === 0
    }

    print() {
        return JSON.stringify(this.#data)
    }

}

/*
let pilha = new Stack()
pilha.push(5)
pilha.push(6)
pilha.push(0)
pilha.push(2)
console.log('Peek:', pilha.peek())
console.log('Peek:', pilha.peek())
console.log(pilha.empty)
console.log(pilha.print())
let x = pilha.pop()
console.log('Pop:', x)
console.log('Peek:', pilha.peek())
console.log('Peek:', pilha.peek())
console.log(pilha.print())
*/