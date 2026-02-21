function girar() {
    let casanik = document.getElementsByClassName('casanik');
    let um = document.getElementById('um');
    let dois = document.getElementById('dois');
    let tres = document.getElementById('tres');
    let res = document.getElementById('res');
    let saldo = document.querySelector('#saldo');

    const casino = ['🍒', '🍋', '🔔', '⭐', '💎'];


    let n1 = Math.floor(Math.random() * casino.length);
    let n2 = Math.floor(Math.random() * casino.length);
    let n3 = Math.floor(Math.random() * casino.length);
    
    um.innerHTML = casino[n1];
    dois.innerHTML = casino[n2];
    tres.innerHTML = casino[n3];

    if (n1 == n2 && n2 == n3) {
        let saldoAtual = Number(saldo.textContent);

        if (casino[n1] === casino[0]) saldoAtual += 10;
        if (casino[n1] === casino[1]) saldoAtual += 15;
        if (casino[n1] === casino[2]) saldoAtual += 25;
        if (casino[n1] === casino[3]) saldoAtual += 40;
        if (casino[n1] === casino[4]) saldoAtual += 100;

        saldo.textContent = saldoAtual

        res.innerHTML = 'Você ganhou!! 🎉🎉🎉'
    } else {
        res.innerHTML = 'Não ganhou!! Tente novamente 🤣🤣'
    }

}