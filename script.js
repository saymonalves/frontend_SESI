function executarSistema() {
    const nome = document.getElementById("inputNome").value;
    const idade = parseInt(document.getElementById("inputIdade").value);
    const valor = parseFloat(document.getElementById("inputValor").value);
    const cupom = document.getElementById("inputCupom").value === "true";

    //dados de saida
    const msg = document.getElementById("mensagem-autorizacao");
    const lista = document.getElementById("lista-estoque");
    const relatorio = document.getElementById("relatorio-final");

    // validação para campos vazios

    if(!nome || isNaN(idade) || isNaN(valor)){
        alert("O seu inergumeno, preenche os dados!");
        return;
    }
    
    // regra de negócio
    if (idade >= 16){
        msg.innerText = `Venda autorizada: ${nome}`;
        msg.style.color = "#1aff00";

        //desconto
        let valorFinal = (valor > 500 || cupom) ? valor * 0.85 : valor;

        //estoque
        let estoque = ["placa de video", "processador", "memoria RAM"];
        lista.innerHTML = ""; // limpa a lista anterior
    }
}