
let letters = window.document.getElementById('letters')


const printLetters = () => {
    let tab = ["J","'","e","t","'","a","i","m","e"];
    let letters = window.document.getElementById('letters')
    for( i = 0; i < tab.length; i++ ){
        letters.innerHTML = tab[i];
    }
    return letters
}

