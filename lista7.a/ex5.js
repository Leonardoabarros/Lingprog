function venda(matrizVendas,matrizMes){
    for (let i=0;i<12;i++){
        matrizMes[i] = i+1 +" °Mês "
        matrizVendas[i] = []
        for ( let j=0;j<4;j++){
            matrizVendas[i][j] = parseFloat((Math.random() * 10) + 1)
        }
    }
}
function calcular(matrizVendas,matrizMes){
    let somaAno = 0
    for (let i=0;i<12;i++){
        let somaMes = 0
        
        for ( let j=0;j<4;j++){
            console.log(`A vendas da ${j+1} ° seman foi ${matrizVendas[i][j]}`) 
            somaMes = somaMes + matrizVendas[i][j] 
            somaAno = somaAno + matrizVendas[i][j] 
        }
         
        console.log(`As vendas do ${matrizMes[i]} foi ${somaMes}`)
    }
    console.log(`As vendas total do ano foi ${somaAno}`)
}
let principal = () =>{
    matrizVendas = []
    matrizMes = []
    venda(matrizVendas,matrizMes )
    calcular(matrizVendas,matrizMes)
}
principal()