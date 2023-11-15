async function api1() {
    let titulo = document.getElementById("titulo").value
    let resposta = await fetch(`https://www.omdbapi.com/?t=${titulo}&apikey=c949f23b`)
    let dados = await
        resposta.json()
    document.getElementById("diretor").value = dados.Director
    document.getElementById("poster").src = dados.Poster
    document.getElementById("lancamento").value = dados.Year
    document.getElementById("avaliação").value = dados.Released
    document.getElementById("duracao").value = dados.Runtime
    document.getElementById("genero").value = dados.Writer
}

