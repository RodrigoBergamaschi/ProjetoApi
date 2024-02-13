import express from 'express';
import historicoInflacao from './dados/historicoInflacao.js'
import buscaIpcaPorID from './servicos/funcoes.js'
const app = express();

app.get('/historicoInflacao', (req, res) => {
    res.json(historicoInflacao)
  });

  app.get('/historicoInflacao/:id', (req, res) =>{
   let idParametro = parseInt(req.params.id);
   
    let id = buscaIpcaPorID(idParametro)
    res.json(id)
  }
  )


app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
  });