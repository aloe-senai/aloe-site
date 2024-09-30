let solicitacoes = [];

function solicitarOrcamento(event) {
    event.preventDefault(); 

    let valorNome = document.getElementById("campo-nome").value;
    let valorEmail = document.getElementById("campo-email").value;
    let valorDescricao = document.getElementById("campo-descricao").value;
    let valorAjuda = document.getElementById("campo-ajudar").value;  

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        ajuda: valorAjuda,
        descricao: valorDescricao
    };

    console.log(dadosForm);

    
    solicitacoes.push(dadosForm);

    
    fetch("http://localhost:3000/solicitacoes", {  
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        if (resposta.ok) {
            console.log(resposta);
            document.querySelector(".form").reset();
            alert("Solicitação enviada com sucesso!!! 👌");
        } else {
            alert("Erro na requisição 😓");
        }
    })
    .catch(erro => {
        console.error(erro); 
        alert("Erro na requisição 😓");
    });
}
