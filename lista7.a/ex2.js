function calcula1220(matriz){
    let qtde = 0
    for(let i=0;i<2;i++){
        matriz[i] = []
         qtde = 0
         for(let j=0;j<4;j++){
                matriz[i][j] = parseInt((Math.random()*20)+1)
             if (matriz[i][j] >= 12 && matriz[i][j] <= 20){
                 qtde++
             } 
         }
         console.log(`A quantidade entre 12 e 20 na linha ${i} é ${qtde}`)
    }
   
 }
 let principal = () => {
    let matriz = []
   
    calcula1220(matriz)
    console.log(matriz)
}
principal()