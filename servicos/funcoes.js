import historicoInflacao from '../dados/historicoInflacao.js';

export function buscaIpcaPorID (id)
{
   let idEncontrado =  historicoInflacao.find(item => item.id === id)
   return idEncontrado;
}
    
export default buscaIpcaPorID;