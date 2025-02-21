//Correcciones : 
//  Cambiar let por const, ya que, no cambian las variables.
//  eliminar comentarios debido a la simplicidad del codigo.

const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const domain = ['.com', '.net']

const findEveryElementOfArray = () => {
    pronoun.forEach((p) => {
        adj.forEach((a) => {
            noun.forEach((n) => {
                domain.forEach((d) => {
                    console.log(`${p}${a}${n}${d}`)
                });
            });
        });
    });
}

findEveryElementOfArray()
