'use strict';
const squadre = [
    {
        nome : 'Milan',
        punti : 0,
        falli_subiti : 0,
    },
    {
        nome : 'Inter',
        punti : 0,
        falli_subiti : 0,
    },
    {
        nome: 'Juventus',
        punti : 0,
        falli_subiti : 0,
    }
]




for (const squadra of squadre) {
    squadra.falli_subiti = getRandomInt();
    squadra.punti = getRandomInt();
}

const NomiFalli = squadre.map((squadra) => {
    // console.log(squadre);
    delete squadra.punti;
    return squadra;
})

// console.log(squadre);
// console.log(NomiFalli);

for (let squadra of NomiFalli) { 
    for(let key in squadra){ 
        console.log(`${key}: ${squadra[key]}`); 
    }
    console.log('-----------------'); 
}




function getRandomInt() {
    return Math.floor(Math.random() * 100);
  }