function lerMatriz(matriz) {
    for (let i = 0; i < 2; i++) {
        matriz[i] = []
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = parseInt((Math.random() * 20) + 1)
        }
    }
}
function calcula1520(matriz) {
    let media = 0
    let cont = 0
    for (let i = 0; i < 2; i++) {
        let qtde = 0
            for (let j = 0; j < 4; j++) {
            if (matriz[i][j] >= 15 && matriz[i][j] <= 20) {
                qtde++
            }
            if (matriz[i][j] % 2 == 0) {
                media = media + matriz[i][j]
                cont++
            }
        }
        console.log(`A quantidade de numeros pares na linha ${i+1} e ${qtde}`)
    }
    console.log(`A quantidade de elementos pares e ${cont}`)
    console.log(`A soma dos elementos pares e ${media}`)
    console.log(`A media dos números pares é ${media / cont}`)
}
let principal = () => {
    let matriz = []
    lerMatriz(matriz)
    calcula1520(matriz)
    console.log(matriz)
}
principal()