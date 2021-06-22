/*
    O código abaixo representa um trecho de uma das estruturas de dados estudadas.

    1. Identifique a estrutura de dados e o método (função) representado no código abaixo.
       => Lista encadeada simples (LinkedList), método remove()
    
    2. Faça o mapeamento das variáveis (registrar em comentário o propósito de cada uma delas).

        b ~> data do nodo
        c ~> next do nodo
        E ~> classe LinkedList
        #f ~> #head
        #h ~> #count
        #g ~> #tail
        i ~> método remove()
        j ~> posição de remoção
        k ~> nodo a ser removido
        l ~> nodo anterior à pos. de remoção
        m ~> nodo seguinte à pos. de remoção
    
    3. Comente os principais trechos do código, explicando seu objetivo.
*/

class E {

    /* Código omitido */

    i(j) {  // Método remove(), recebe a posição de remoção

        // Se a lista estiver vazia, retorna sem fazer nada
        if(this.empty || j < 0 || j > this.#h - 1) return undefined
        
        // Declara variável para receber o nodo a ser removido
        let k

        // Se a posição for a inicial
        if(j === 0) {
            // O primeiro nodo é removido e segundo toma o seu lugar
            k = this.#f
            this.#f = this.#f.c 
            if(this.#h === 1) this.#g = this.#f.c
        }
        else {
            // Outras posições, é necessário percorrer a lista 
            // até encontrar o nodo da posição de remoção
            let l = this.#f // Nodo anterior à pos. de remoção
            for(let i = 0; i < j - 1; i++) l = l.c
            k = l.c     // Nodo a ser removido
            let m = k.c // Nodo seguinte à pos. remoção
            l.c = m
            // Regra especial para remoção do último nodo
            if(j === this.#h - 1) this.#g = l
        }
        this.#h--   // Decrementa a quantidade de nodos
        return k.b  // Retorna o data do nodo removido
    }

    /* Código omitido */

}