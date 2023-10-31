function sortear(matriz) {
    for (let i = 0; i < 6; i++) {
        matriz[i] = []
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = parseInt((Math.random() * 100) + 1) 
        }
    }
}
function Maior(matriz) {
    let maior
    let indiceI = 0
    let indiceJ = 0
    maior = matriz[0][0]
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            if (maior < matriz[i][j]) {
                maior = matriz[i][j]
                indiceI = i
                indiceJ = j
            }
        }
    }
    console.log(`O maior é ${maior}`)
    console.log(`Linha ${indiceI} Coluna ${indiceJ}`);
}
function Menor(matriz) {
    let menor
    let indiceI = 0
    let indiceJ = 0
    menor = matriz[0][0]
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            if (menor > matriz[i][j]) {
                menor = matriz[i][j]
                indiceI = i
                indiceJ = j
            }
        }
    }
    console.log(`O menor é ${menor}`)
    console.log(`Linha ${indiceI} Coluna ${indiceJ}`);
}
let principal = () => {
    let matriz = []
    sortear(matriz)
    console.log(matriz)
    Maior(matriz)
    Menor(matriz)
}
principal()