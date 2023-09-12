function ex3_possuierro(){
   
    let cont = 1
    let cont2
    let cont3
    let cont4
    let cont5
    let cont6
    let idade
    idade = Number(prompt('informe a idade'))
    while (cont <= 8){
        
        if (idade > 0 && idade <= 15){
             cont2 = cont2++
        }
        else if (idade > 15 && idade <=30){
             cont3 = cont3++
        }
        else if (idade > 30 && idade <= 45){
            let cont4 = cont4++
        }
        else if (idade > 45 && idade <= 60){
             cont5 = cont5++
        }
        else if (idade > 60){
             cont6 = cont6++
        }
        else{
            alert('Idade não pode ser valor Negativo')
        }
        cont++
    }
    alert(`Faixa 1 ${cont2} Faixa 2 ${cont3} Faixa 3 ${cont4} Faixa 4 ${cont5} Faixa 5 ${cont6}`)
    alert(`%F1 ${f1/8*100} %F5 ${f5/8*100}` )
}
function ex6_possuierro(){
    let modo
    let valor
    let i
    let con1 = 0
    let con2 = 0   
    let total1 = 0
    let total2 = 0
    for (i = 0 ; i <= 5 ; i++){
        modo = Number(prompt('1 - À Vista 2 - Prazo'))
        valor = Number(prompt('Qual o valor da venda'))
        if (modo == 1 ){
            if(valor > 0){
            con1 = con1++
            total1 = (total1 + valor)
        }            
        }
        else if (modo == 2 ){
            if(valor > 0){
            con2 = con2++
            total2 = (total2 + valor)
        }
        }
        else {
            alert('Opção Invalida')
        }
        
    }
    if (con1 > 0){
    alert(`O número de vendas a vista foi ${con1} e o total de vendas foi ${total1}`)
    }
    else {
        alert('Não foram efetuadas vendas à vista')
    }
    if (con2 > 0){
        alert(`O número de vendas a prazo foi ${con2} e o total ${total2} sendo a primeira parcela no valor ${total2 / 3}`)
    }
    else {
        alert(`Não foram efetuadas vendas a prazo`)
    }

}
function ex7_OK(){
    let idade
    let altura
    let peso
    let con50 = 0
    let con10 = 0
    let alt = 0
    let conp = 0
    for (let i = 1 ; i <= 5 ; i++){
        idade = Number(prompt('Informe sua idade :'))
        altura = Number(prompt('Informe sua altura em centimetros:'))
        peso = Number(prompt('Informe seu peso :'))
        if (idade >= 50){
            con50 = con50 + 1
        }
        if ( idade >= 10 && idade <= 20 ){
            con10 = con10 + 1
            alt = alt + altura 
        }
        if (peso < 40){
            conp = conp + 1
        }
    }
    let media = alt / con10
    let pesob = conp * 20
    if (con50 > 0){
        alert(`${con50} pessoas possuem idade acima de 50 anos`)
    }
    else {
        alert(`Nenhuma pessoa possue mais que 50 anos`)
    }
    if (con10 > 0) {
        alert(`A média de altura entre 10 e 20 anos é ${media} centimetros`)
    }
    else {
        alert(`Não possue pessoas na faixa entre 10 e 20 anos para calcular a média de altura`)
    }
    if (conp > 0){
        alert(`E ${pesob}% possuem peso abaixo de 40 quilos `)
    }
    else {
        alert(`Não possui pessoas abaixo dos 40 quilos`)
    }
}   
function ex9_OK(){
    let idade
    let peso
    let altura
    let conIdade = 0
    let cont1 = 0
    let cont2 = 0
    for(let i = 1 ; i <=10 ; i++){
        idade = Number(prompt('Informe sua idade :'))
        peso = Number(prompt('Informe seu peso :'))
        altura = Number(prompt('Informe sua altura em centimrtros :'))
        if(peso > 90 && altura < 150){
            cont1 = cont1 + 1
        }
        if (idade >= 10 && idade <= 30 && altura > 190){
            cont2= cont2 + 1
        }
        conIdade = (conIdade + idade) / 10
    }
    alert(`A média de idade das 10 pessoas é ${conIdade}`)
    if(cont2 > 0){
        alert(`Existem ${cont1} pessoas que possuem peso acima de 90 quilos e altura menor 150 centimetros`)
    }
    else{
        alert(`O grupo não possue pessoas tem tem mais que 90 quilos e e altura inferior a 150 centimetros`)
    }
    if (cont2 > 0){
        alert(`${(cont2 * 10)}% possuem altura superior a 190 centimetros e estão na faixa de idade entre 10 e 30 anos`)
    }
    else{
        alert(`Não possue pessoas que tenham mais de 190 centrimetros e estão na faixa de idade entre 10 e 30 anos`)
    }
} 
function ex11_possuierro(){
    let preco = (Number(prompt(`Qual o valor do carro : `)))
    let modo = (Number(prompt(`Qual a forma de pagamento :  1 - À vista 2 - A prazo `)))
    if (modo == 2){
        let parcela = (Number(prompt(`Qual o número de parcelas : 6 , 12 , 18 , 24 , 30 , 36 , 42 , 48 , 54 e 60 `)))
    }
    let precoParcelado = 0
    let precoFinal = 0
    switch (modo){
        case 1: 
            precoFinal = preco * 0,8
        break
        case 2:
            switch(parcela){
                case 1:
                    precoParcelado = preco * 1.03
                    break
                case 2:
                    precoParcelado = preco * 1.06
                    break
                case 3:
                    precoParcelado = preco * 1.09   
                    break
                case 4:
                    precoParcelado = preco * 1.12
                    break
                case 5:
                    precoParcelado = preco * 1.15
                    break
                case 6:
                    precoParcelado = preco * 1.18
                    break
                case 7:
                    precoParcelado = preco * 1.21 
                    break
                case 8:
                    precoParcelado = preco * 1.24 
                    break
                case 9:
                    precoParcelado = preco * 1.27
                    break
                case 10:
                    precoParcelado = preco * 1.30
                    break                       
            }
        break    
    }
   if (modo == 1){
    alert(`O valor do carro é ${preco} com o desconto à vista sai ${precoFinal}`)
   } 
   else {
    alert(`O valor do carro é ${preco} em ${parcela} sendo o valor final de ${precoParcelado}`)
   }
}