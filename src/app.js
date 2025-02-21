const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const domain = ['.com', '.net'];

let isPresed = true


const findEveryElementOfArray = () => {
    if (isPresed) {
        let phraseContain = document.getElementById("excuse");
        pronoun.forEach((p) => {
            adj.forEach((a) => {
                noun.forEach((n) => {
                    domain.forEach((d) => {
                        let phrase = `${p}${a}${n}${d}`;
                        let li = document.createElement('li');
                        li.textContent = phrase;
                        phraseContain.appendChild(li);
                    });
                });
            });
        });
    }
    isPresed = false;
}

window.onload = () => {
    document.getElementById("btn").addEventListener("click", () => {
        findEveryElementOfArray();
    });
}