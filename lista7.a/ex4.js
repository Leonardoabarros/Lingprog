
function lerDados(matrizNotas, matrizNome) {
    for (let i = 0; i < 15; i++) {
        matrizNome[i] = "Aluno " + (i + 1)
        matrizNotas[i] = []
        for (let j = 0; j < 5; j++) {
            matrizNotas[i][j] = parseFloat((Math.random() * 10) + 1)
        }
    }
}
function media(matrizNotas, matrizNome) {
    let media = 0
    for (let i = 0; i < 15; i++) {
        let soma = 0
        for (let j = 0; j < 5; j++) {
            soma = soma + matrizNotas[i][j]
            media = media + matrizNotas[i][j]
        }
        console.log(`Soma das notas foi ${soma} do ${matrizNome[i]}`)
        if (soma / 5 >= 6) {
            console.log(`Aprovado. O ${matrizNome[i]} teve ${soma.toFixed(2) / 5} de média`)
        }
        else if (soma / 5 >= 3 && soma / 5 < 6) {
            console.log(`Exame. O ${matrizNome[i]}  teve ${soma.toFixed(2) / 5} de média`)
        }
        else {
            console.log(`Reprovado. O ${matrizNome[i]} teve ${soma.toFixed(2) / 5} de média `)
        }
    }
    console.log(`A Soma das notas da classe foi ${media}`)
    console.log(`A média da classe foi ${media.toFixed(2) / 75}`)
}
let principal = () => {
    let matrizNotas = []
    let matrizNome = []
    lerDados(matrizNome, matrizNotas)
    media(matrizNome, matrizNotas)
}
principal()