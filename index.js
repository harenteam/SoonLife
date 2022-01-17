
let letters = window.document.getElementById('letters')


const printLetters = () => {
    let tab = [];
    let letters = window.document.getElementById('letters')
    for( i = 0; i < tab.length; i++ ){
        letters.innerHTML = tab[i];
    }
    return letters
}

