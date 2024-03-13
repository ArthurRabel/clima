import { StyledDivPrevision, StyledPrevisionWrapper } from './style';

export default function Previsao(props) {

  // API retorna em kelvin, essa função converte para celsius 
  function toC(kelvin) {
    return Math.floor(kelvin - 273.15);
  }

  return (
    <StyledDivPrevision>
      <h3>Atualmente em {props.nome}</h3>
      <StyledPrevisionWrapper>
        <img src={`https://openweathermap.org/img/wn/` + props.cidade.weather[0].icon + `@2x.png`} alt="icon do clima" width='100'/>
        <div>
          <p>Tempo: {toC(props.cidade.main.temp)}</p>
          <p>Temperatura Máxima: {toC(props.cidade.main.temp_max)}°C</p>
          <p>Temperatura Mínima: {toC(props.cidade.main.temp_min)}°C</p>
          <p>Humidade: {props.cidade.main.humidity}%</p>
        </div>
      </StyledPrevisionWrapper>
    </StyledDivPrevision>
  );
}