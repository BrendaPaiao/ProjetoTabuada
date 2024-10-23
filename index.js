import express from "express";

const host = "0.0.0.0";
const porta = 3000;

const app = express();

function Tabuada(requisicao, resposta) {
    const valor = parseInt(requisicao.query.tabuada);
    const multiplica = parseInt(requisicao.query.multiplica) || 10; // Valor padrão para multiplica

    let resultHTML = '';

    if (!isNaN(valor)) {
        resultHTML += '<html><head><title>Tabuada</title></head><body>';
        resultHTML += '<h1>Tabuada</h1>';
        resultHTML += `<h2>Tabuada completa do ${valor}</h2>`;

        for (let i = 0; i <= multiplica; i++) {
            resultHTML += `<p>${valor} x ${i} = ${valor * i}</p>`;
        }

        resultHTML += '</body></html>';

        resposta.send(resultHTML);
    } else {
        resposta.send(`
        <html>
            <head><title>Erro</title></head>
            <body>
                <h1>Erro: Valor inválido</h1>
                <p>Por favor, informe um número válido na URL.</p>
                <p>Exemplo: http://localhost:3000/tabuada?tabuada=3&multiplica=20</p>
            </body>
        </html>
        `);
    }
}

app.get("/tabuada", Tabuada);

app.listen(porta, host, () => {
    console.log("Servidor em execução em http://" + host + ":" + porta);
});