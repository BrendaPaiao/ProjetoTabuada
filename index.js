import express from "express";

const host = "0.0.0.0";
const porta = 3000;

const app = express();

function paginaInicial(requisicao, resposta){
    resposta.send("<h1>Tabuada</h1>");
}

app.get("/", paginaInicial);

app.listen(porta, host, () => {
    console.log("Servidor em execução http://" + host + ":" + porta);
});