const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// Rota para receber novos comentários
app.post('http://localhost:3000/comentarios', (req, res) => {
    const novoComentario = req.body;

    // Aqui você salvaria o novoComentario no arquivo db.json ou no banco de dados
    // Exemplo básico: adicionando ao final do arquivo db.json
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao salvar o comentário.');
            return;
        }

        let comentarios = JSON.parse(data);
        comentarios.push(novoComentario);

        fs.writeFile('db.json', JSON.stringify(comentarios), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Erro ao salvar o comentário.');
                return;
            }

            res.json(novoComentario);
        });
    });
});

// Rota para enviar os comentários existentes
app.get('http://localhost:3000/comentarios', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao obter os comentários.');
            return;
        }

        const comentarios = JSON.parse(data);
        res.json(comentarios);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});