import styled from 'styled-components';

// Define um novo componente estilizado
export const WrapperSearch = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 95%;
  margin: auto;
  & > input {
    color: black;
    border: none;
    margin-right: 10px;
    font-size: 1rem;
    height: 40px;
    padding: 0 15px;
    border-radius: 4px;
    @media (max-width: 450px) {
      width: 180px;
    }
  }
  & > button {
      height: 40px;
      border-radius: 4px;
      border: none;
      padding: 10px 20px;
      font-size: 1rem;
      font-weight: 500;
      font-family: inherit;
      color: white;
      background-color: #1a1a1a;
      cursor: pointer;
  }
`;