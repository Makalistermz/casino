function girar() {
    let casanik = document.getElementsByClassName('casanik');
    let um = document.getElementById('um');
    let dois = document.getElementById('dois');
    let tres = document.getElementById('tres');
    let res = document.getElementById('res')

    const casino = ['🍒', '🍋', '🔔', '⭐', '💎'];

    let n1 = Math.floor(Math.random() * casino.length);
    let n2 = Math.floor(Math.random() * casino.length);
    let n3 = Math.floor(Math.random() * casino.length);
    
    um.innerHTML = casino[n1];
    dois.innerHTML = casino[n2];
    tres.innerHTML = casino[n3];

    if (n1 == n2 && n2 == n3) {
        res.innerHTML = 'Você ganhou!! 🎉🎉🎉'
    } else {
        res.innerHTML = 'Não ganhou!! Tente novamente 🤣🤣'
    }

}