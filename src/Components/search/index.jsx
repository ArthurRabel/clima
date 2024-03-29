import { useRef } from 'react';
import { WrapperSearch } from './style.js';
import { getCity } from '../../request/getCity.js';

export default function Search({ onValueChange  }) {

  // Pega o valor da tag search
  const pesquisaValor = useRef(null);

  // Pesquisa a cidade e a previsão pela API CPTEC/INPE
  const handleSearch = () => {

    // Função pra pesquisar a cidade
    getCity(pesquisaValor.current.value)
      .then(result => {

        // Retorna para elemento pai os dados da cidade e previsao
        onValueChange(result);
      })
      .catch(error => {
        console.error('Erro ao obter a cidade:', error);
      });
  };
  
  return (
    <WrapperSearch> 
      <input type='search' placeholder="Digite sua busca..." ref={pesquisaValor}/>
      <button onClick={handleSearch}>Pesquisar</button>
    </WrapperSearch>
)}