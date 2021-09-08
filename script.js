function rollDice(min = 1, max = 6) { //1 Dado
    const corpo = document.getElementById('um')
    const barra = document.createElement('div')
    let rollResult = Math.floor(Math.random() * (max - min + 1)) + min;
    barra.innerText = "Dado: " + rollResult
    corpo.appendChild(barra)

}

function rollTwoDice(min = 1, max = 6) { // 2 Dados
    const corpo = document.getElementById('dois')

    let count = []
    for (let i = 0; i < 2; i++) {
        const barra = document.createElement('div')
        let rollResult = Math.floor(Math.random() * (max - min + 1)) + min;
        barra.innerText = "Dado " + [i + 1] + ": " + rollResult
        count.push(rollResult)
        corpo.appendChild(barra)

    }

}

function rollThousand(min = 1, max = 6) { //Roda 1000
    const corpo = document.getElementById('mil')
    const grafico = document.getElementById("grafico")



    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 1000; i++) {

        let rollResult = 0
        for (let j = 0; j < 2; j++) {
            rollResult += Math.floor(Math.random() * (max - min + 1)) + min;

        }
        count[rollResult - 2]++;

    }
    for (let i = 0; i <= count.length - 1; i++) {
        const barra = document.createElement('div')
        const barras = document.createElement('p')
        barra.innerText = [i + 2] + ": " + count[i]
        corpo.appendChild(barra)
        barras.style.width = count[i] + "px";
        barras.style.height = 20 + "px";
        barras.style.backgroundColor = "lightblue";
        barras.innerText = [i + 2] + ": " + count[i]
        grafico.appendChild(barras);

    }
    return count

}
rollDice()
rollTwoDice()
rollThousand()