// Samuel Monsalves Moreira
// �� Sistema de Classes de Herói - JavaScript

const ATAQUES = {
    'guerreiro': 'espada',
    'mago': 'magia', 
    'monge': 'artes marciais',
    'ninja': 'shuriken'
};

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() {
        const ataque = ATAQUES[this.tipo];
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const guerreiro = new Heroi('Arthur', 30, 'guerreiro');
const mago = new Heroi('Merlin', 100, 'mago');
const monge = new Heroi('Liu', 25, 'monge');
const ninja = new Heroi('Ryu', 28, 'ninja');

guerreiro.atacar(); // o guerreiro atacou usando espada
mago.atacar();      // o mago atacou usando magia
monge.atacar();     // o monge atacou usando artes marciais
ninja.atacar();     // o ninja atacou usando shuriken