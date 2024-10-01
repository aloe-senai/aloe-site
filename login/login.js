
 function login (event) {
event.preventDefault()
    
    let email = document.getElementById("campo-email").value;
    let senha = document.getElementById("campo-senha").value;

    
    if (email === "admin" && senha === "senha123") {
        document.getElementById("mensagem").textContent = "Login bem sucedido";
        document.getElementById("mensagem").style.color = "green"; 
        alert ("Login bem sucedido")
    } else {
        document.getElementById("mensagem").textContent = "Usuário ou senha incorretos";
        document.getElementById("mensagem").style.color = "red"; 
        document.getElementById("mensagem").style.fontFamily = "Garet";
        alert ("Login mal sucedido")
    }
};
