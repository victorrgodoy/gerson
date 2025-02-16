// Variáveis
var tonyStark = "Homem de Ferro"; 
let steveRogers = "Capitão América";
const thor = "Deus do Trovão";
console.log(`Super-heróis da Marvel: ${steveRogers}, ${tonyStark}, ${thor}`);

//------------------------------------------------------//

// var: escopo de função, permite hoisting e redeclaração
var nome = "Black Panther";
if (true) {
    var hulk = "Eric Bana";
    console.log(hulk);
}
console.log(hulk); // Acessível fora do bloco

var jogador = "neymar";
jogador = "messi"; // Pode ser reatribuída

var x = 10;
var x = 20; // Pode ser redeclarada

//------------------------------------------------------//

// let: escopo de bloco, não pode ser redeclarada
if (true) {
    let pais = "brasil";
    console.log(pais);
}
// console.log(pais); // Erro

let y = 10;
// let y = 20; // Erro

//------------------------------------------------------//

// const: escopo de bloco, não pode ser reatribuída ou redeclarada
const idade = 18;
const nomePersonagem = "Patrick";
const capitao = { nome: nomePersonagem, idade };

// Acesso ao objeto
console.log(capitao.nome);

//------------------------------------------------------//

// Funções

// Padrão
function calcularPotencia(base, expoente) {
    return base ** expoente;
}
console.log("Resultado:", calcularPotencia(2, 3));

// Função como objeto
const calcularPotencia2 = new Function("base, expoente", "return base**expoente");
console.log("Resultado:", calcularPotencia2(2, 2));

// Método dentro de um objeto
const personagem = {
    apelido: "Príncipe do Santos FC",
    nome: "Neymar",
    idade: 32,
    descricao() {
        return `Nome: ${this.nome}, Apelido: ${this.apelido}, Idade: ${this.idade}`;
    }
};
console.log(personagem.descricao());

// Função como variável
const soma = function(n1, n2) {
    return n1 + n2;
};
console.log("Soma:", soma(1, 1));

// Arrow function
const soma2 = (n1, n2) => n1 + n2;
console.log("Soma2:", soma2(2, 2));

