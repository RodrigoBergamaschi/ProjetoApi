import historicoInflacao from '../dados/historicoInflacao.js';

export function buscaIpcaPorID (id)
{
   let idEncontrado =  historicoInflacao.find(item => item.id === id)
   return idEncontrado;
}

export function filtraPorAno(ano)
{
   let Ano = historicoInflacao.filter(item => item.ano === ano)
   return Ano;
}
    
export default buscaIpcaPorID;