const forma1 = {
    base: 5,
    altura: 3.7,
    tipo: 'T'   // Triângulo
}

const forma2 = {
    base: 4.8,
    altura: 6.4,
    tipo: 'E'   // Elipse
}

const forma3 = {
    base: 153.7,
    altura: 122.1,
    tipo: 'Q'   // Quadrilátero
}

const forma4 = {
    base: 16,
    altura: 21,
    tipo: 'J'   // Forma não reconhecida
}

const forma5 = {
    base: 'batata',
    altura: 'beterraba',
    tipo: 'E'
}

const forma6 = {
    medida1: 22,
    medida2: 7,
    tipo: 'Q'
}

/*
    A forma tradicional com que o JavaScript lida com objetos não permite o 
    controle sobre sua criação nem sobre o seu conteúdo. Os objetos funcionam
    baseados estritamente no "controle de qualidade" feito pelo usuário/programador.
*/

function calcularArea(forma) {
    switch(forma.tipo) {
        case 'Q':
            return forma.base * forma.altura
        case 'T':
            return forma.base * forma.altura / 2
        case 'E':
            return (forma.base / 2) * (forma.altura / 2) * Math.PI
        default:
            return NaN
    }
}

console.log(forma1, calcularArea(forma1))
console.log(forma2, calcularArea(forma2))
console.log(forma3, calcularArea(forma3))
console.log(forma4, calcularArea(forma4))
console.log(forma5, calcularArea(forma5))
console.log(forma6, calcularArea(forma6))