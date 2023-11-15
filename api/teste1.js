async function teste() {
    
    let cep = Number(document.getElementById("cep").value)
   
    let resposta = await 
        fetch(`https://jsonplaceholder.typicode.com/comments?postemail=${cep}`)
    
   
    let dados = await 
        resposta.json()
   
    document.getElementById("logradouro").value = dados.id  
    
    document.getElementById("bairro").value = dados.name
   
    document.getElementById("localidade").value = dados.completed
    
    document.getElementById("ibge").value = dados.ibge
}