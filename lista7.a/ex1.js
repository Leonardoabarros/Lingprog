function lerMatriz(matriz) {
    for (let i = 0; i < 3; i++) {
        matriz[i] = []
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = parseInt((Math.random() * 20) + 1)
        }
    }
}
function calcula1520(matriz) {
    let qtde = 0
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (matriz[i][j] >= 15 && matriz[i][j] <= 20) {
                qtde++
            }
        }
    }
    console.log(`A quantidade de número entre 15 e 20 e ${qtde}`)
}
let principal = () => {
    let matriz = []
    lerMatriz(matriz)
    calcula1520(matriz)
    console.log(matriz)
}
principal()