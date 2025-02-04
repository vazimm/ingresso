function comprar() {
    // Obter as quantidades disponíveis
    const quantidades = {
        pista: parseInt(document.getElementById("qtd-pista").innerHTML),
        superior: parseInt(document.getElementById("qtd-superior").innerHTML),
        inferior: parseInt(document.getElementById("qtd-inferior").innerHTML)
    };

    // Obter o tipo de ingresso e a quantidade desejada
    const tipo_ingresso = document.getElementById("tipo-ingresso").value;
    const quantidade_ingresso = parseInt(document.getElementById("qtd").value);

    // Função auxiliar para processar a compra
    function processarCompra(tipo) {
        if (quantidade_ingresso > quantidades[tipo]) {
            return alert(`Não há ingressos suficientes disponíveis para ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}.`);
        }
        quantidades[tipo] -= quantidade_ingresso; // Atualiza a quantidade
        document.getElementById(`qtd-${tipo}`).innerHTML = quantidades[tipo]; // Atualiza o HTML
        alert("Compra realizada com sucesso!");
    }

    // Verifica o tipo de ingresso e chama a função de processamento
    if (quantidades[tipo_ingresso] !== undefined) {
        processarCompra(tipo_ingresso);
    } else {
        alert("Insira uma quantidade de ingresso desejada");
    }
}