/*

    1) Observe a árvore binária representada na figura "arvore.png". Responda:
        a) Quantos níveis essa árvore possui? 6 (seis)
        b) Qual a altura da subárvore cuja raiz é 16? 4 (quatro)
        c) Qual a profundidade do nodo de valor 29? 4 (quatro)

    2) Monte em código, neste arquivo, a árvore representada na figura.

    3) No código, remova os seguintes nodos: 58, 35, 87 e 51.

    4) Execute os métodos de percurso da árvore e anote, abaixo, os respectivos resultados após as remoções:
        a) Percurso em-ordem: 1,  9, 14, 16, 20, 29, 43, 44, 60, 72, 79, 86, 92, 99
        b) Percurso pré-ordem: 44, 16,  9,  1, 14, 29, 20, 43, 86, 72, 60, 79, 99, 92
        c) Percurso pós-ordem: 1, 14,  9, 20, 43, 29, 16, 60, 79, 72, 92, 99, 86, 44

    5) Anexe este arquivo, com o código da árvore binária de busca, ao
        entregar a prova.

*/

class Node {
    constructor(val) {
        this.data = val
        this.left = null        // Ponteiro para subárvore à esquerda
        this.right = null       // Ponteiro para subárvore à direita
    }
}

export class BinarySearchTree {

    #root           // Raiz da árvore

    constructor() {
        this.#root = null        
    }

    insert(val) {

        const node = new Node(val)

        // 1º caso: árvore vazia
        if(this.#root === null) this.#root = node

        // 2º caso: inserção recursiva ~> percorre a árvore recursivamente
        // para encontrar a posição do novo nodo
        else this.#insertNode(node, this.#root)
       
    }

    // Parâmetros:
    // node ~> nodo a ser inserido
    // root ~> a raiz da SUBÁRVORE onde será feita a inserção
    #insertNode(node, root) {
        // 1º caso: valor do nodo é MENOR que o valor da raiz ~> para a esquerda
        if(node.data < root.data) {
            // Verifica se o nodo à esquerda da raiz está desocupado
            // e, se for o caso, insere aí o nodo
            if(root.left === null) root.left = node
            // Caso o nodo à esquerda da raiz já exista, reiniciamos
            // o processo considerando este como raiz da subárvore
            else this.#insertNode(node, root.left)
        }
        // 2º caso: valor do nodo é MAIOR que o valor da raiz ~> vai para a direita
        else if (node.data > root.data) {
            // Acontece a mesma coisa que no caso anterior, mas do lado direito
            if(root.right === null) root.right = node
            else this.#insertNode(node, root.right)
        }
        // Note que, se o valor do nodo for IGUAL ao valor da raiz, nada acontece:
        // o pedido de inserção é ignorado para evitar valores duplicados na árvore
    }

    /****************************************************************
     * PERCURSOS
    *****************************************************************/
    // PERCURSO EM-ORDEM
    // 1º: visita em-ordem a subárvore esquerda
    // 2º: visita a raiz
    // 3º: visita em-ordem a subárvore direita
    // fnCallback: função externa que será chamada toda vez que o percurso
    // passar por um nodo
    inOrderTraversal(fnCallback, root = this.#root) {
        if(root !== null) {
            this.inOrderTraversal(fnCallback, root.left)    // 1º
            fnCallback(root.data)                           // 2º
            this.inOrderTraversal(fnCallback, root.right)   // 3º
        }
    }

    // PERCURSO PRÉ-ORDEM
    // 1º: visita a raiz
    // 2º: visita pré-ordem a subárvore esquerda
    // 3º: visita pré-ordem a subárvore direita
    // fnCallback: função externa que será chamada toda vez que o percurso
    // passar por um nodo
    preOrderTraversal(fnCallback, root = this.#root) {
        if(root !== null) {
            fnCallback(root.data)                           // 1º
            this.preOrderTraversal(fnCallback, root.left)   // 2º
            this.preOrderTraversal(fnCallback, root.right)  // 3º
        }
    }

    // PERCURSO PÓS-ORDEM
    // 1º: visita pós-ordem a subárvore esquerda
    // 2º: visita pós-ordem a subárvore direita
    // 3º: visita a raiz
    // fnCallback: função externa que será chamada toda vez que o percurso
    // passar por um nodo
    postOrderTraversal(fnCallback, root = this.#root) {
        if(root !== null) {
            this.postOrderTraversal(fnCallback, root.left)      // 1º 
            this.postOrderTraversal(fnCallback, root.right)     // 2º
            fnCallback(root.data)                               // 3º
        }
    }

    // Retorna o menor valor da árvore
    min() {
        let min = this.#minNode(this.#root)
        return min !== null ? min.data : null
    }

    // Encontra o nodo com o menor valor da árvore ou subárvore
    #minNode(root) {
        let min = root
        while(min !== null && min.left !== null) min = min.left
        return min
    }

    // Retorna o maior valor da árvore
    max() {
        let max = this.#maxNode(this.#root)
        return max !== null ? max.data : null
    }

    // Encontra o nodo com o maior valor da árvore ou subárvore
    #maxNode(root) {
        let max = root
        while(max !== null && max.right !== null) max = max.right
        return max
    }

    // Procura pelo valor especificado e retorna true caso exista
    // ou false caso contrário
    search(key) {
        let node = this.#searchNode(this.#root, key)
        // Se for retornado um node válido (diferente de null),
        // é porque o valor existe na árvore
        return node !== null
    }

    // Procura pelo nodo que armazena key
    #searchNode(root, key) {

        // 1º caso: a árvore está vazia
        if(root === null) return null

        // 2º caso: o valor de key é MENOR que o valor da raiz
        // Continua a busca pela subárvore ESQUERDA
        if(key < root.data) return this.#searchNode(root.left, key)

        // 3º caso: o valor de key é MAIOR que o valor da raiz
        if(key > root.data) return this.#searchNode(root.right, key)

        // 4º caso: o valor de key é IGUAL ao valor da raiz
        // O nodo que contém o valor foi encontrado e é root
        return root
    }

    remove(key) {
        this.#root = this.#removeNode(this.#root, key)
    }

    // Remove o nodo com o key especificado a partir de root
    #removeNode(root, key) {

        // 1º caso: árvore vazia
        if(root === null) return null

        // 2º caso: o valor de key é MENOR que o valor da raiz
        if(key < root.data) {
            root.left = this.#removeNode(root.left, key)
            return root
        }

        // 3º caso: o valor de key é MAIOR que valor da raiz
        if(key > root.data) {
            root.right = this.#removeNode(root.right, key)
            return root
        }

        // 4º caso: o valor de key é IGUAL ao valor da raiz
        // (encontrou o nodo a ser removido)

        // Caso 4.1: remoção de nodo folha (grau 0)
        if(root.left === null && root.right === null) {
            root = null
            return root
        }

        // Caso 4.2: remoção de nodo grau 1 com descendentes à esquerda
        if(root.left !== null && root.right === null) {
            root = root.left
            return root
        }

        // Caso 4.3: remoção de nodo grau 1 com descendentes à direita
        if(root.left === null && root.right !== null) {
            root = root.right
            return root
        }

        // Caso 4.4: remoção de nodo de grau 2

        // Precisamos encontrar:
        // a) o MAIOR nodo da subárvore ESQUERDA *ou*
        // b) o MENOR nodo da subárvore DIREITA
        const newRoot = this.#maxNode(root.left)
        // ou: const newRoot = this.#minNode(root.right)

        // Leva o valor do novo root para o root original
        root.data = newRoot.data

        // Excluímos o valor duplicado que ficou na subárvore esquerda do root
        // (de onde veio o maior valor)
        root.left = this.#removeNode(root.left, newRoot.data)
        // ou: root.right = this.#removeNode(root.right, newRoot.data)

        return root
    }

}

const arvore = new BinarySearchTree()

arvore.insert(51)
arvore.insert(16)
arvore.insert(9)
arvore.insert(1)
arvore.insert(14)
arvore.insert(44)
arvore.insert(35)
arvore.insert(29)
arvore.insert(20)
arvore.insert(43)

arvore.insert(87)
arvore.insert(72)
arvore.insert(58)
arvore.insert(60)
arvore.insert(79)
arvore.insert(86)
arvore.insert(99)
arvore.insert(92)

// 58, 35, 87 e 51
arvore.remove(58)
arvore.remove(35)
arvore.remove(87)
arvore.remove(51)

const percursoEm = [], percursoPre = [], percursoPos = []

arvore.inOrderTraversal(n => percursoEm.push(n))
arvore.preOrderTraversal(n => percursoPre.push(n))
arvore.postOrderTraversal(n => percursoPos.push(n))

console.log({percursoEm})
console.log({percursoPre})
console.log({percursoPos})