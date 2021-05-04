/*
    ESTRUTURAS DE DADOS FILA

    - Fila é uma lista linear de acesso restrito, que permite apenas as operações
      de enfileiramento (enqueue) e desenfileiramento (dequeue), a primeira ocorrendo
      no final da estrutura e a segunda no início da estrutura.
    - Como consequência, a fila funciona pelo princípio FIFO (First In, First Out -
      primeiro a entrar, primeiro a sair).
    - A principal aplicação das filas são tarefas que envolvem o processamento de tarefas
      por ordem de chegada.
*/
export class Queue {

    #data

    constructor() {
        this.#data = []     // Vetor vazio
    }

    // Inserção na fila (enfileiramento)
    enqueue(val) {
        this.#data.push(val)
    }

    // Remoção da fila (desenfileiramento)
    dequeue() {
        return this.#data.shift()
    }

    // "Espiadinha" (no início)
    peek() {
        return this.#data[0]
    }

    get empty() {
        return this.#data.length === 0
    }

    print() {
        return JSON.stringify(this.#data)
    }
}