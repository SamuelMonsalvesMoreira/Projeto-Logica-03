# 🎮 Sistema de Classes de Herói - JavaScript

## 📋 Sobre o Projeto

Sistema orientado a objetos desenvolvido em JavaScript que simula heróis de aventura com diferentes tipos e ataques únicos. Projeto criado como parte dos estudos de Programação Orientada a Objetos.

## ⚔️ Funcionalidades

- ✅ Criação de heróis com nome, idade e tipo
- ✅ Sistema de ataques personalizados por classe
- ✅ 4 tipos disponíveis: Guerreiro, Mago, Monge e Ninja
- ✅ Código limpo sem repetições (princípio DRY)

## 🎯 Tipos de Herói

| Tipo | Ataque |
|------|--------|
| 🛡️ Guerreiro |  Espada |
| 🔮 Mago |  Magia |
| 🥋 Monge |  Artes Marciais |
| 🗡️ Ninja |  Shuriken |

## 🚀 Como Usar

```javascript
// Criando heróis
const guerreiro = new Heroi('Arthur', 30, 'guerreiro');
const mago = new Heroi('Merlin', 100, 'mago');

// Executando ataques
guerreiro.atacar(); // o guerreiro atacou usando espada
mago.atacar();      // o mago atacou usando magia
