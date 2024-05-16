'use strict';
const arrayBici = [
    {
        nome : 'BMC Teammachine SLR Six',
        peso : '8.80 kg',
    },
    {
        nome : 'Orbea Orca M30iTeam',
        peso : '8.40 kg',
    },
    {
        nome : 'Cannondale Synapse Carbon 2',
        peso : '9.00 kg',
    }
]
let piuLeggera = arrayBici[0];
for (const bici of arrayBici) {
    if(piuLeggera.peso > bici.peso) piuLeggera = bici;
}
// console.log(`la bici con il peso minore è la ${piuLeggera.nome}`);

const h2 = document.createElement('h2');
h2.innerHTML = `La bici con il peso minore è la <u>${piuLeggera.nome}</u> con il peso di <u>${piuLeggera.peso}</u>`;
document.body.appendChild(h2);
