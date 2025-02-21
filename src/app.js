let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.net']

let isPresed = true


const findEveryElementOfArray = () => {
    if (isPresed) {

        // Condicional  con valor boolean para determinar si se ha presionado el botón, de lo contrario
        // cada vez que se presiona agregaría/sumaría el listado. 

        let phraseContain = document.getElementById("excuse")

        // Aqui se indica que el valor de la variable es el dom que quiero que regrese en forma de contenido
        // en mi HTML.

        pronoun.forEach((p) => {
            adj.forEach((a) => {
                noun.forEach((n) => {
                    domain.forEach((d) => {
                        let phrase = `${p}${a}${n}${d}`

                        // Hago todos los loops que sean necesarios para recorrer las variables
                        // luego las indico en el orden que quiero que aparezcan en una variable
                        // para poder mostrarla de vuelta. 

                        let li = document.createElement('li')

                        // Me permite crear etiquetas li en mi html.

                        li.textContent = phrase

                        // Esto indica lo que contiene los li.

                        phraseContain.appendChild(li)

                        // Este método permite generar hijos de las listas anteriormente creadas
                        // e indicar donde queremos que se generen; siendo este la  variable que
                        // contiene el ID que se usa para realacionar el comtenido.

                    });
                });
            });
        });
    }
    isPresed = false
}

window.onload = () => {
    document.getElementById("btn").addEventListener("click", () => {
        findEveryElementOfArray();
    });
}

//Se realaciona id btn para devolver la función que dentro de ella tiene la variable phrase contain
// que se encarga de hacer el enlace entre documentos.