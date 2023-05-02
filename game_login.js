function usuario() { 
    player1name= document.getElementById("nome1").value;
    player2name= document.getElementById("nome2").value;
    localStorage.setItem("player1name", player1name)
    localStorage.setItem("player2name", player2name)
    window.location= "game_page.html";
    
}


