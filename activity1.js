pontos = 0;
 function atualizar() {
    pontos= pontos + 1
    document.getElementById("score").innerHTML = "pontuação: 0" + pontos
 }
  function salvar() {
    localStorage.setItem("score", pontos)
  }
  function proxima() {
    window.location = "activity_2.html"
  }