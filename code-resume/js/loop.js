// Sorteio com loops
var numeros = [1,2,3,4,5,6,7,8,9,0];

const sortear = possibilidades => Math.floor(Math.random() * possibilidades);

const removerElemento = (numeros, elemento) => {
    let index = numeros.indexOf(elemento);
    if (index !== -1) numeros.splice(index, 1);
};

const sorteio = (numeros, quantidade) => {
    let numerosSorteados = [];
    do {
        let numero = numeros[sortear(numeros.length)];
        numerosSorteados.push(numero);
        removerElemento(numeros, numero);
    } while (numerosSorteados.length < quantidade);
    return numerosSorteados;
};

console.log(sorteio(numeros, 3));

//------------------------------------------------------//

// for-in: percorre índices (chaves)
let empresa = { razaoSocial: 'ABC LTDA', nomeFantasia: 'Mercado Online' };
for (let i in empresa) console.log(i);

let lista = [1, 2, 3];
for (let i in lista) console.log(i);

// for-of: percorre valores
for (let i of lista) console.log(i);
