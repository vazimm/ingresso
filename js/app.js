function comprar(){
    let pista_qtd = parseInt(document.getElementById("qtd-pista").innerHTML);
    let cadeira_superior_qtd = parseInt(document.getElementById("qtd-superior").innerHTML);
    let cadeira_inferior_qtd = parseInt(document.getElementById("qtd-inferior").innerHTML);

    let tipo_ingresso = document.getElementById("tipo-ingresso").value;
    let quantidade_ingresso = parseInt(document.getElementById("qtd").value);

    if (tipo_ingresso === "pista") {
        if (quantidade_ingresso > pista_qtd) {
            return alert("Não há ingressos suficientes disponíveis para Pista.");
        }   
            alert("compra realizada com sucesso!") 
            const valor = pista_qtd - quantidade_ingresso;
            document.getElementById("qtd-pista").innerHTML = valor;
    } else if (tipo_ingresso === "superior"){
        if (quantidade_ingresso > cadeira_superior_qtd){
            return alert("Não há ingressos suficientes disponíveis para Cadeiras superiores");
        }   
        alert("compra realizada com sucesso!")
        const valor = cadeira_superior_qtd - quantidade_ingresso;
        document.getElementById("qtd-superior").innerHTML = valor;
    } else if (tipo_ingresso === "inferior"){
        if (quantidade_ingresso > cadeira_inferior_qtd){
            return alert("Não há ingressos suficientes disponíveis para Cadeiras inferiores");
        }
        alert("compra realizada com sucesso!")
        const valor = cadeira_inferior_qtd - quantidade_ingresso;
        document.getElementById("qtd-inferior").innerHTML = valor;
    } else {
        alert("Insira uma quantidade de ingresso desejada");
    }
    
}

