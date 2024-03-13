import styled from 'styled-components';

export const StyledPrevisionWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
    @media (max-width: 450px) {
      display: flex;
      flex-direction: column;
      & img {
        margin: auto;
      }
    }

`;

// Define um novo componente estilizado
export const StyledDivPrevision = styled.div`
  background-color: #333333;  
  padding: 10px;
  border-radius: 5px;
  width: 90%;
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 4px solid #52dcff;
  & > h3 {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;