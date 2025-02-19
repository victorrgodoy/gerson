function Cliente(nome, email, telefone, endereco) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;

    this.setEmail = function(email) {
        this.email = email;
    };
    this.setTelefone = function(telefone) {
        this.telefone = telefone;
    };
    this.setEndereco = function(endereco) {
        this.endereco = endereco;
    };

    this.getNome = function() {
        return this.nome;
    };

    this.getEmail = function() {
        return this.email;
    };

    this.getTelefone = function() {
        // Retornar o telefone completo formatado
        return `DDD: ${this.telefone.getDDD()}\nNúmero: ${this.telefone.getNumero()}`;
    };

    this.getEndereco = function() {
        return `Rua: ${this.endereco.getRua()}\nNúmero: ${this.endereco.getNumero()}\nCidade: ${this.endereco.getCidade()}\nEstado: ${this.endereco.getEstado()}`;
    };

    this.detalhe = function() {
        return 'Informações do Cliente:\n' 
            + this.getNome() 
            + '\n---------------' 
            + '\n---------------\n' 
            + 'Telefone:\n' 
            + this.getTelefone() 
            + '\n---------------\n' 
            + 'Endereço:\n' 
            + this.getEndereco() 
            + '\n---------------';
    };
}


function Telefone(ddd, numero){
    this.ddd = ddd
    this.numero = numero

    this.setDDD = function(ddd){
        this.ddd = ddd
    }
    this.setNumero = function(numero){
        this.numero = numero
    }

    this.getDDD = function(){
        return this.ddd    
    }

    this.getNumero = function(){
        return this.numero
    }    
}

function Endereco(rua, numero, cidade, estado){
    this.rua = rua
    this.numero = numero
    this.cidade = cidade
    this.estado = estado

    this.setRua = function(rua){
        this.rua = rua
    }
    this.setNumero = function(numero){
        this.numero = numero
    }
    this.setCidade = function(cidade){
        this.cidade = cidade
    }
    this.setEstado = function(estado){
        this.estado = estado
    }

    this.getRua = function(){
        return this.rua
    }
    this.getNumero = function(){
        return this.numero
    }
    this.getCidade = function(){
        return this.cidade
    }
    this.getEstado = function(){
        return this.estado
    }
}

//----------------------------------------------------------------------------------//

const telefoneCarlos = new Telefone(11, 111111111);
const enderecoCarlos = new Endereco('Av. Paulista', 987, 'São Paulo', 'SP');
const clienteCarlos = new Cliente('Carlos Conrado Heinz', 'carlos.conrado@app.com', telefoneCarlos, enderecoCarlos);

const telefoneAna = new Telefone(21, 222222222);
const enderecoAna = new Endereco('Rua das Flores', 123, 'Rio de Janeiro', 'RJ');
const clienteAna = new Cliente('Ana Maria Silva', 'ana.silva@app.com', telefoneAna, enderecoAna);

const telefonePedro = new Telefone(31, 333333333);
const enderecoPedro = new Endereco('Avenida Brasil', 456, 'Belo Horizonte', 'MG');
const clientePedro = new Cliente('Pedro Henrique Souza', 'pedro.souza@app.com', telefonePedro, enderecoPedro);

const telefoneJulia = new Telefone(41, 444444444);
const enderecoJulia = new Endereco('Rua 7 de Setembro', 789, 'Curitiba', 'PR');
const clienteJulia = new Cliente('Julia Oliveira', 'julia.oliveira@app.com', telefoneJulia, enderecoJulia);

const telefoneLucas = new Telefone(51, 555555555);
const enderecoLucas = new Endereco('Rua São João', 321, 'Porto Alegre', 'RS');
const clienteLucas = new Cliente('Lucas Martins', 'lucas.martins@app.com', telefoneLucas, enderecoLucas);

const clientes = [clienteCarlos, clienteAna, clientePedro, clienteJulia, clientePedro]

const clientesOrganizado = clientes.sort(function(a,b){
    return a.getNome().localeCompare(b.getNome())
})

for(const cliente of clientes){
    console.log(cliente.getNome())
}


list = [3,4,2,6,1]

