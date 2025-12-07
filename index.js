// Samuel Monsalves Moreira
// �� Sistema de Classes de Herói - JavaScript

// 📋 Descrição do Projeto

// Este projeto implementa um sistema de classes para representar heróis de aventura em JavaScript, desenvolvido como parte dos estudos de Programação Orientada a Objetos. 
// O sistema permite criar diferentes tipos de heróis com características únicas e simular seus ataques de forma organizada e escalável.

// 🎯 Objetivo

// Criar uma classe genérica que represente um herói de aventura com as seguintes funcionalidades:
// - Propriedades: nome, idade e tipo
// - Método de ataque personalizado conforme o tipo do herói
// - Sistema limpo e sem repetição de código

// ⚔️ Tipos de Herói e Ataques

//    |Tipo |      |Ataque |
// | 🛡️ Guerreiro = Espada |
// | 🔮 Mago      = Magia |
// | 🥋 Monge     = Artes Marciais |
// | 🗡️ Ninja     = Shuriken |

// ## 🛠️ Tecnologias Utilizadas

// - **JavaScript ES6+**
// - **Programação Orientada a Objetos**
// - **Classes e Métodos**
// - **Enums/Objects para mapeamento**

// ## 💡 Conceitos Aplicados

// - ✅ Variáveis e Operadores
// - ✅ Estruturas de Decisão
// - ✅ Funções e Métodos
// - ✅ Classes e Objetos
// - ✅ Clean Code

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