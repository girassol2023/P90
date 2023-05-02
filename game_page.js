turnopergunta = "jogador1"
turnoresposta = "jogador2"

player1name = localStorage.getItem("player1name")
player2name = localStorage.getItem("player2name")

player1score = 0;
player2score = 0;
document.getElementById("player1name").innerHTML = player1name + ":"
document.getElementById("player2name").innerHTML = player2name + ":"

document.getElementById("player1score").innerHTML = player1score + ":"
document.getElementById("player2score").innerHTML = player2score + ":"

document.getElementById("playerquestion").innerHTML = "turno de perguntas:" + player1name
document.getElementById("playeranswer").innerHTML = "turno de respostas:" + player2name

function send() {
    palavra = document.getElementById("palavra").value;
    palavra2 = palavra.toLowerCase();
    letra1 = palavra2.charAt(1);
    divide = Math.floor(palavra2.lenght / 2)
    letra2 = palavra2.charAt(divide)
    tamanho1 = palavra2.lenght - 1
    letra3 = palavra2.charAt(tamanho1)
    remove1 = palavra2.replace(letra, "_")
    remove2 = remove1.replace(letra2, "_")
    remove3 = remove2.replace(letra3, "_")

}
function check() {
    pegaresposta = document.getElementById("word").value;
    resposta = pegaresposta.toLowerCase();
    console.log("resposta em caixa baixa" + resposta)
    if (resposta == palavra) {



    if (turnopergunta == "jogador1") {
        player1score = player1score + 1;
        document.getElementById("player1score").innerHTML = player1score

    }
    else{
        player2score = player2score + 1;
        document.getElementById("player2score").innerHTML = player2score
   
    }
}
 if (turnopergunta == "jogador1") {
    turnopergunta = "jogador2"
    document.getElementById("playerquestion").innerHTML = "turnodepergunta" + player2name
 }
 else {
    turnopergunta = "jogador1"
    document.getElementById("playerquestion").innerHTML = "turnodepergunta" + player1name
 }

 if (turnoresposta == "jogador1") {
    turnoresposta = "jogador2"
    document.getElementById("playeranswer").innerHTML = "turnoderesposta" + player2name
 }
 else {
    turnoresposta = "jogador1"
    document.getElementById("playeranswer").innerHTML = "turnoderesposta" + player1name
 }

 document.getElementById("saida").innerHTML = ""
}


