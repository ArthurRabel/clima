import React, { useState } from 'react'
import Search from './Components/search/index'
import Previsoes from './Components/prevision';
import { StyledDiv } from './App';

function App() {
  const [previsao, setPrevisao] = useState(<div></div>);

  // Pega os dados do componen Search e envia pro Prevision
  const handleValueChange = (value) => {

    //verifica se existe os dados
    if (value !== undefined) {
      setPrevisao(<Previsoes cidade={value[0]} nome={value[1]}/>);
    }

  };

  return (
    <> 
      <StyledDiv>
        {/* Ao pesquisar envia os dados para componente prevision */}
        <Search onValueChange={handleValueChange}/>
        {/* Componente prevision so vai ser renderizado quando os dados forem pegos */}
        {previsao}
      </StyledDiv>
    </>
  )
}

export default App

