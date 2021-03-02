/*

   DADOS PARA O EXERCÍCIO

   nome;sigla;area;populacao
   Sergipe;SE;21915.08;2278308
   Alagoas;AL;27848.14;3322820
   Rio Grande do Norte;RN;52811.05;3479010
   Paraíba;PB;56469.78;3996496
   Pernambuco;PE;98148.32;9496294
   Ceará;CE;148920.47;9075649
   Piauí;PI;251577.74;3264531
   Maranhão;MA;331937.45;7035055
   Bahia;BA;564733.18;14812617

*/

let estadosNe = []

let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}

estadosNe.push(estado1)

/*
   1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os
      ao vetor estadosNe usando push().
*/

let estado2 = {
   nome: 'Alagoas',
   sigla: 'AL',
   area: 27848.14,
   populacao: 3322820
}

estadosNe.push(estado2)

let estado3 = {
   nome: 'Rio Grande do Norte',
   sigla: 'RN',
   area: 52811.05,
   populacao: 3479010
}

estadosNe.push(estado3)

let estado4 = {
   nome: 'Paraíba',
   sigla: 'PB',
   area: 56469.78,
   populacao: 3996496
}

estadosNe.push(estado4)


let estado5 = {
   nome: 'Pernambuco',
   sigla: 'PE',
   area: 98148.32,
   populacao: 9496294
}

estadosNe.push(estado5)

let estado6 = {
   nome: 'Ceará',
   sigla: 'CE',
   area: 148920.47,
   populacao: 9075649
}

estadosNe.push(estado6)

let estado7 = {
   nome: 'Piauí',
   sigla: 'PI',
   area: 251577.74,
   populacao: 3264531
}

estadosNe.push(estado7)

let estado8 = {
   nome: 'Maranhão',
   sigla: 'MA',
   area: 331937.45,
   populacao: 7035055
}

estadosNe.push(estado8)

let estado9 = {
   nome: 'Bahia',
   sigla: 'BA',
   area: 564733.18,
   populacao: 14812617
}

estadosNe.push(estado9)

// Exibindo o vetor para verificar se está tudo certo
console.log(estadosNe)

/*
   2) Escreva uma arrow function que receba dois parâmetros, área e população, e
      calcule a densidade demográfica retornando o resultado da divisão da
      segunda pela primeira. 
*/

// Usei const aqui porque densidadeDemog deve receber um valor inicial
// e esse valor não será mais alterado
const densidadeDemog = (area, pop) => pop / area

/*
   3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado,
      chame a arrow function criada em 2) e efetue o cálculo correspondente.
      Com o resultado do cálculo, crie uma propriedade chamada 'densidade
      demográfica' para cada objeto representando um Estado.

      Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.

*/

for(let i = 0; i < estadosNe.length; i++) {
   // Acrescentando a nova propriedade "densidade demográfica".
   // O nome contém duas palavras, então a sintaxe de colchetes é obrigatória.
   estadosNe[i]['densidade demográfica'] = densidadeDemog(estadosNe[i].area, estadosNe[i].populacao)

   // Excluindo a propriedade "sigla"
   delete estadosNe[i].sigla
}

/* 4) Escreva uma arrow function que receba um objeto. Na função, use for..in
      para extrair as propriedades e seus valores e exibi-los com console.log().

*/

const listaEstado = estado => {
   for(let prop in estado) {
      console.log(`${prop} => ${estado[prop]}`)
   }
}

/* 5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor,
      invoque a função escrita em 4) para exibi-lo.
*/

// Traço separador
console.log('-----------------------------------------------')

for(let est of estadosNe) {
   listaEstado(est)
   // Traço separador
   console.log('-----------------------------------------------')
}

/*
   6)
      a) Declare um vetor vazio.
      b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme
         os dados no topo deste arquivo, um de cada vez. Faça as inserções de 
         modo que o vetor final esteja em ordem alfabética. No caso, o primeiro 
         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
         deve ser inserido com unshift(), para manter a ordem alfabética. 
         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois 
         já existentes, e assim por diante.

*/

let nomesUf = []

// Sergipe => pode ser adicionado com push(), visto que o vetor está vazio
nomesUf.push('Sergipe')

// Alagoas => deve ser inserido com unshift() para vir antes de Alagoas
nomesUf.unshift('Alagoas')

// Rio Grande do Norte => com splice(), entre os dois já existentes
nomesUf.splice(1, 0, 'Rio Grande do Norte')

// Paraíba => com splice(), antes de RN
nomesUf.splice(2, 0, 'Paraíba')

// Pernambuco => com splice(), antes de SE
nomesUf.splice(3, 0, 'Pernambuco')

// Ceará => com splice(), antes de RN
nomesUf.splice(1, 0, 'Ceará')

// Piauí => com splice(), antes de SE
nomesUf.splice(5, 0, 'Piauí')

// Maranhão => com splice(), antes de RN
nomesUf.splice(2, 0, 'Maranhão')

// Bahia => com splice(), antes de CE
nomesUf.splice(1, 0, 'Bahia')

// Traço separador
console.log('***********************************************')

console.log(nomesUf)