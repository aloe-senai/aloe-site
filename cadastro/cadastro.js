document.getElementById("show-login").addEventListener("click", function() {
    document.getElementById("cadastre-se").style.display = "none";
    document.getElementById("login").style.display = "block";
});

document.getElementById("show-cadastro").addEventListener("click", function() {
    document.getElementById("cadastre-se").style.display = "block";
    document.getElementById("login").style.display = "none";
});

// Cadastro
document.getElementById("cadastro-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    let nome = document.getElementById("campo-nome").value;
    let sobrenome = document.getElementById("campo-sobrenome").value;
    let email = document.getElementById("campo-email").value;
    let confirmaEmail = document.getElementById("campo-confirmação-email").value;
    let senha = document.getElementById("campo-senha").value;
    let confirmaSenha = document.getElementById("campo-confirmação-senha").value;

    
    if (email === confirmaEmail && senha === confirmaSenha) {
    
        localStorage.setItem("username", email);
        localStorage.setItem("senha", senha);
        document.getElementById("mensagem-cadastro").textContent = "Cadastro realizado com sucesso!";
        document.getElementById("mensagem-cadastro").style.color = "green";
        this.reset(); 
    } else {
        document.getElementById("mensagem-cadastro").textContent = "Os emails ou senhas não coincidem.";
        document.getElementById("mensagem-cadastro").style.color = "red";
    }
});