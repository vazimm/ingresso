function comprar(){
    let pista_qtd = parseInt(document.getElementById("qtd-pista").textContent);
    let cadeira_superior_qtd = parseInt(document.getElementById("qtd-superior").textContent);
    let cadeira_inferior_qtd = parseInt(document.getElementById("qtd-inferior").textContent);

    let tipo_ingresso = document.getElementById("tipo-ingresso").value;
    let quantidade_ingresso = parseInt(document.getElementById("qtd").value);
    
    if(quantidade_ingresso === "" || isNaN(quantidade_ingresso) || quantidade_ingresso <= 0) {
        return alert("Insira quantidade")
    } 

    if (tipo_ingresso === "pista") {
        if (quantidade_ingresso > pista_qtd) {
            return alert("Não há ingressos suficientes disponíveis para Pista.");
        }   
            alert("compra realizada com sucesso!") 
            const valor = pista_qtd - quantidade_ingresso;
            document.getElementById("qtd-pista").textContent = valor;
    } else if (tipo_ingresso === "superior"){
        if (quantidade_ingresso > cadeira_superior_qtd){
            return alert("Não há ingressos suficientes disponíveis para Cadeiras superiores");
        }   
        alert("compra realizada com sucesso!")
        const valor = cadeira_superior_qtd - quantidade_ingresso;
        document.getElementById("qtd-superior").textContent = valor;
    } else if (tipo_ingresso === "inferior"){
        if (quantidade_ingresso > cadeira_inferior_qtd){
            return alert("Não há ingressos suficientes disponíveis para Cadeiras inferiores");
        }
        alert("compra realizada com sucesso!")
        const valor = cadeira_inferior_qtd - quantidade_ingresso;
        document.getElementById("qtd-inferior").textContent = valor;
    } else {
        alert("Insira uma quantidade de ingresso desejada");
    }
    
}

