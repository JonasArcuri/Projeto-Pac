const express = require('express')
const app = express();
const Banco = require('../Model/Db')
const porta = 8000;

Banco.Db.connect((err) => {
    if (err) {
        console.log("Erro ao conectar ao Banco de Dados!: ", err);
        return
    }

    console.log("Conexão com o Banco de Dados Estabelecida com Sucesso!")
})

app.use(express.static('public'))

//Rota Padrão
app.get('/', (req, res) =>{
    res.status(200).json({Mensagem: 'API Online'})
})

//Rota Public
app.get('/public', (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
})

//Porta Hospedada

app.listen(porta, () => {
    console.log(`Servidor Iniciado na Porta: ${porta}`)
})

//REQ = Requisição
//RES = Resposta

// GET = Pega a requisição
// POST = Enviar dados para o servidor
// PUT = Atualizar alguma informação de dados no Servidor
// DELETE = Remover alguma informação no servidor