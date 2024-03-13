import { useState } from 'react'
import Search from './Components/search/index'
import Previsoes from './Components/prevision';
import { HeaderStyled } from './App';

export default function App() {
  const [previsao, setPrevisao] = useState(<div></div>);

  // Pega os dados do componen Search e envia pro Prevision
  const handleValueChange = (value) => {

    //verifica se existe os dados
    if (value !== undefined) {
      setPrevisao(<Previsoes cidade={value[0]} nome={value[1]}/>);
    }
    return value;
  };

  return (
    <> 
      <HeaderStyled>
        {/* Ao pesquisar envia os dados para componente prevision */}
        <Search onValueChange={handleValueChange}/>
      </HeaderStyled>
      
      {/* Componente prevision so vai ser renderizado quando os dados forem pegos */}
      {previsao}
    </>
  )
}