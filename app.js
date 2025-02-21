
// Se ha implentado fuera del la carpeta assets para probarlo con el node app.js
// se hizo un DOM del código en HTML también

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.net']

const findEveryElementOfArray = () => {
    pronoun.forEach((p) => {
        adj.forEach((a) => {
            noun.forEach((n) => {
                domain.forEach((d) => {
                    console.log(`${p}${a}${n}${d}`)
                    // Hago todos los loops que sean necesarios para recorrer las variables
                    // luego las indico en el orden que quiero que aparezcan en la consola
                });
            });
        });
    });
}

findEveryElementOfArray()
