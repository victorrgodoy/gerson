// Criando objetos
const bancoNacional = { nome: "Banco Nacional", cnpj: "22222222222222" };
const caixa = new Object();
caixa.nome = "Caixa";
caixa.cnpj = "11111111111111";

// Referência de objetos
const bradesco = caixa;
bradesco.nome = "Banco Bradesco"; // Altera caixa também

// Argumento por referência
let saldo = { valor: 10 };
function aumentarMaisDez(referencia) {
    referencia.valor += 10;
}
aumentarMaisDez(saldo);
console.log(saldo.valor); // 20

// Métodos call() e apply()
const detalhador = {
    detalhar: function (cidade, estado) {
        return `\nNome fantasia: ${this.nome}\nRazão Social: ${this.razaoSocial}\n---\nCidade: ${cidade}\nEstado: ${estado}`;
    }
};
let mercadoOnline = { nome: "Mercado Online", razaoSocial: "ABC LTDA" };
console.log(detalhador.detalhar.call(mercadoOnline, "São José", "SP"));
console.log(detalhador.detalhar.apply(mercadoOnline, ["São José", "SP"]));

// Adicionando atributos dinamicamente
const apple = { nome: "Apple" };
apple.razaoSocial = "APPLE LTDA";
console.log(apple.razaoSocial);

// Objeto dentro de objeto
const microsoft = { 
    nome: "Microsoft", 
    telefone: { numero: "0000-0000", ddd: "11" } 
};
console.log(`Telefone: ${microsoft.telefone.numero}\nDDD: ${microsoft.telefone.ddd}`);

// Percorrendo chaves e valores
for (let chave in microsoft) {
    console.log(chave); 
}
let valores = Object.values(microsoft);
console.log(valores);

// Deletando uma propriedade
delete microsoft.telefone;

// Adicionando um novo método ao objeto
microsoft.detalhe = function() {
    return `${this.nome}`;
};
console.log(microsoft.detalhe());

// Métodos getter e setter
const sony = {
    nome: 'Sony',
    telefone: '11 11111-1111',
    set colocarNome(nome) {
        this.nome = nome;
    }
};

Object.defineProperty(sony, 'pegarNome', {
    get: function() { return this.nome; }
});

console.log(`Nome da empresa: ${sony.pegarNome}`);
sony.colocarNome = 'Samsung';
console.log(`Nome da empresa: ${sony.pegarNome}`);

// Função construtora
function Empresa(nome, telefone) {
    this.nome = nome;
    this.telefone = telefone;
    this.detalhe = function() {
        return `${this.nome}, ${this.telefone}, ${this.balanco}`;
    };
}

// Adicionando um novo atributo via prototype
Empresa.prototype.balanco = 1000;
const novaEmpresa = new Empresa('Apple', '111');
console.log(novaEmpresa.detalhe());
