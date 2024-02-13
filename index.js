import express from 'express';
import historicoInflacao from './dados/historicoInflacao.js'
import buscaIpcaPorID, { filtraPorAno } from './servicos/funcoes.js'
const app = express();


app.get('/historicoIPCA', (req, res) =>{
  let Ano = parseInt(req.query.ano)
  let resultado = Ano ? filtraPorAno(Ano) : historicoInflacao;
  if(resultado.length > 0)
  {
    res.json(resultado)
  }
  else{
    res.status(404).send({"Erro":"Nenhum resultado válido."})
  }

 
})

app.get('/historicoIPCA/:id', (req, res) =>{
    let idParametro = parseInt(req.params.id);
   
    let id = buscaIpcaPorID(idParametro)
    res.json(id)
  }
  )


app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
  });