function subtração(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let sub = n1 - n2
    document.getElementById("sub").innerHTML = 
    `A Subtração dos números é ${sub}`
}
function mult(){
    let nr1 = document.getElementById("n1").value
    let nr2 = document.getElementById("n2").value
    let nr3 = document.getElementById("n3").value
    let multi = nr1 * nr2 * nr3
    document.getElementById("multi").innerHTML = 
    `A Multiplicação dos elemento é ${multi}`
}
function divisao(){
    let nr1 = document.getElementById("n1").value
    let nr2 = document.getElementById("n2").value
    let divi = nr1 / nr2 
    document.getElementById("divi").innerHTML = 
    `A divisão dos números é ${divi}`
}
function nota(){
    let nr1 = document.getElementById("n1").value
    let nr2 = document.getElementById("n2").value
    let p1 = nr1 * 2
    let p2 = nr2 * 3
    med = (p1 + p2) / 5
    document.getElementById("med").innerHTML = 
    `A média das notas é ${med}`
}
function desconto(){
    let nr1 = document.getElementById("n1").value
    let nr2 = nr1 / 100
    let desc = nr2 * 90
    document.getElementById("desc").innerHTML = 
    `O preço final é ${desc}`
}
function salario(){
    let nr1 = document.getElementById("n1").value
    let nr2 = document.getElementById("n2").value
    let v1 = (nr2 / 100) * 4
    let sala = nr1 + v1
    //conctenando em vez de somar não tinha o arquivo do prompt
    //para vez como faz
    document.getElementById("sala").innerHTML = 
    `O salário + comissão é ${sala}`
}
function peso(){
    let nr1 = document.getElementById("n1").value
    let nr2 = (nr1 / 100) * 15
    let pesoa = nr2 + nr1
    //conctenando em vez de somar não tinha o arquivo do prompt
    //para vez como faz
    let pesob = (nr1 / 100) * 80
    document.getElementById("pesoa").innerHTML = 
    `Se engordar 15% seu peso será ${pesoa}`
    document.getElementById("pesob").innerHTML = 
    `Se emagrecer 20% seu peso será ${pesob}`
} 
function peso2(){
    let nr1 = document.getElementById("n1").value
    let gramas = nr1 * 1000
    document.getElementById("gramas").innerHTML = 
    `Seu peso em gramas é ${gramas}`
} 
function area1(){
    let nr1 = document.getElementById("n1").value
    let nr2 = document.getElementById("n2").value
    let area = nr1 * nr2 
    document.getElementById("area").innerHTML = 
    `A Área é ${area}`
}