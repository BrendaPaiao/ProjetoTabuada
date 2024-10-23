import express from "express";

const host = "0.0.0.0";
const porta = 3000;

const app = express();

function Tabuada(requisicao, resposta){
    const valor = parseInt(requisicao.query.valor);
    let resultHTML = '';

    if(!isNaN(valor)){
        resultHTML += '<html><head><title>Tabuada</title></head><body>';
        resultHTML += '<h1>Tabuada</h1>';
        resultHTML += `<h2>Tabuda completa do ${valor}</h2>`;

        for(let i= 0; i <= 10;i++){
            resultHTML += `<p>${valor} x ${i} = ${valor * i}</p>`;
        }

        resultHTML += '</body></html>';

        resposta.send(resultHTML); 
    }
    else{
        resposta.write("<html>");
        resposta.write("<head>");
        resposta.write("<meta charset='UTF-8'>");
        resposta.write("</head>");
        resposta.write("<body>");
        resposta.write("É necessário informar o número que deseja");
        resposta.write("Exemplo: http://localhost:3000/tabuada?valor=3");
        resposta.write("</body>");
        resposta.write("</html>");
        resposta.end();
    }
}

app.get("/tabuada", Tabuada);

app.listen(porta, host, () => {
    console.log("Servidor em execução http://" + host + ":" + porta);
});