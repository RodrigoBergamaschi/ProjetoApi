import express from 'express';
import historicoInflacao from './dados/historicoInflacao.js'
const app = express();

app.get('/historicoInflacao', (req, res) => {
    res.json(historicoInflacao)
  });



app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
  });