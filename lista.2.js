function ex10(){
    let preco = document.getElementById("preco").value
    let margem
    let imposto
    if (preco > 0 && preco < 12000){
        margem = preco * 0.05
        imposto = 0
    }
    else if (preco >= 12000 && preco < 25000){
        margem = preco * 0.1
        imposto = preco * 0.15
    }
    else (margem == preco * 0.15 && imposto == preco * 0.2)
                
    let precoTotal = preco + margem + imposto
    document.getElementById("resultado").innerHTML = `O preço do carro aos comprador é ${precoTotal}`
}
function ex11(){
    let salario = document.getElementById("salario").value
    let aumento
    if (salario > 0 && salario < 300){
        aumento = salario * 0.15
    }
    else if (salario >= 300 && salario < 600){
        aumento = salario * 0.1
    }
    else if (salario >= 600 && salario < 900){
        aumento = salario * 0.1
    }
    else( aumento == 0 )
        
        let salarioNovo = salario + aumento
    if(salarioNovo > salario){
        document.getElementById("resultado").innerHTML = `O novo salário sera ${salarioNovo}`
    }
    else{
        document.getElementById("resultado").innerHTML = `Esse salário não possui aumento`
    }
}
function ex12(){
    let salario = document.getElementById("salario").value
    let grat
    
    if (salario > 0 && salario < 350){
        grat = 100
    }
    else if (salario >= 350 && salario < 600){
        grat = 75
    }
    else if (salario >= 600 && salario < 900){
        grat = 50
    }
    else ( grat == 25 )
      
    
    let salarioNovo = (salario + grat) * 0.93
    document.getElementById("resultado").innerHTML = `O salário sera ${salarioNovo} comprosto pelo salario base de ${salario}
    uma gratificação de ${grat} e um desconto de 7% referente a imposto`
   
}
function ex13(){

   let preco = document.getElementById("preco").value
   let aumento = 0
    if(preco > 0 && preco < 50){
                aumento = preco * 0.05
            }
    else if(preco >= 50 && preco < 100){
                aumento = preco * 0.1
            }
    else if (preco >= 100){
        aumento = preco * 0.15
    }
                         
    let precoNovo = preco + aumento
    let classi
    if (precoNovo < 80){
        classi = "Barato "
    }
    else if (precoNovo >= 80 && precoNovo <= 120){
        classi = "Normal"
    }
    else if (precoNovo > 120 && precoNovo <= 200){
        classi = "Caro"
    }
    else (classi = "Muito Caro")
    document.getElementById("resultado").innerHTML = `O preço ${preco} o aumento ${aumento} o novo preço ${precoNovo} a classificação ${classi}`
  
}
function ex14(){
  let salario = getElementById("salario").value
  let aumento 
  if (salario > 0 && salario < 300){
    aumento = salario * 0.5
  } 
  else if (salario >= 300 && salario < 500){
    aumento = salario * 0.4
  }
  else if (salario >= 500 && salario < 700){
    aumento = 0.3
  }
  else if (salario >= 700 && salario < 800){
    aumento = 0.2
  }
  else if (salario >= 800 && salario < 1000){
    aumento = 0.5
  }
  else (aumento == 0.5)
  let salarioNovo = salario + aumento
  document.getElementById("resultado").innerHTML = `O novo salário é ${salarioNovo} que é composto pelo salário base de ${salario}
  e um aumento de ${aumento}`
}
function ex16(){
    let preco = document.getElementById("preco").value
    let desconto
    if (preco > 0 && preco < 30) {
        desconto = 0
    }
    else if (preco >= 30 && preco < 100){
        desconto = preco * 0.1
    }
    else {
        desconto = preco * 0.15
    }
    let precoFinal = (preco - desconto)
    if (preco < 30){
        document.getElementById("resultado").innerHTML = `Não existe desconto para essa categoria sendo o preço final ${precoFinal}`
    }
    else{
        document.getElementById("resultado").innerHTML = `O preço do produto é ${preco} o desconto é ${desconto} e o preço final ${precoFinal}`
    }
}
function ex17(){
    let codigo = document.getElementById("codigo").value
    senha = 4531
    if (codigo == senha){
        document.getElementById("resultado").innerHTML = `Acesso permito `
    }
    else {
        document.getElementById("resultado").innerHTML = `Senha inválida acesso não permitido`
    }
}
function ex18(){
    let idade = document.getElementById("idade").value
    if(idade > 0 && idade < 18){
       document.getElementById("resultado").innerHTML = `Menor de idade` 
    } 
    else {
        document.getElementById("resultado").innerHTML = `Maior de idade`
    }
}
function ex19(){
    let altura = document.getElementById("altura").value
    let sexo = document.getElementById("sexo").value
    switch(sexo){
        case 1: resultado = (72.7 * altura) - 58
        break
        case 2: resultado = (62.1 * altura) - 44.7
        break
    }
    document.getElementById("resultado").innerHTML = `Seu peso ideal é ${resultado}`
}
function ex20(){
  let classi
  let idade = document.getElementById("idade").value
  if (idade > 0 && idade < 5){
    document.getElementById("resultado").innerHTML = `Não possuimos categoria para essa idade`
  }
    else {
        if (idade >= 5 && idade <= 7 ){
        classi = "Infatil"    
    }
    else if (idade > 7 && idade <= 10){
        classi = "Juvenil"
    }
    else if (idade > 10 && idade <= 15){
        classi = "Adolecente"
    }
    else if (idade > 15 && idade <= 30){
        classi = "Adulto"
    }
    else(classi == "Senior")
  }
  document.getElementById.innerHTML = `Pela idade informada sua categoria é ${classi}`
}
