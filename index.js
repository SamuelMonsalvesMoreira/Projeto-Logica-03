let heroi = {
    nome: "João",
    idade: 30,
    tipo: {
        0: "Guerreiro",
        1: "Mago",
        2: "Monge",
        3: "Ninja"
    }
};

let ataque;


atacarHeroi(heroi);

function atacarHeroi(heroi) {
    for(let index in heroi.tipo) {
        let classeheroi = heroi.tipo[index]; 
        
        if(index == 0) {
            ataque = "espada";
        } else if(index == 1) {
            ataque = "magia";
        } else if(index == 2) {
            ataque = "artes marciais";
        } else if(index == 3) {
            ataque = "shuriken";
        }

        console.log(`O ${classeheroi} atacou usando ${ataque}`);
    }
}