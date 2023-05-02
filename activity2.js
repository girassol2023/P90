function voltar() {
window.location= "activity_1.html"
}
function obterpontos() {
    pontos= localStorage.getItem("score")
    document.getElementById("atualizar").innerHTML= "<h1> pontuação:" + pontos +"</h1>"
}