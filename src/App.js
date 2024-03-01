import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: #242424;
  padding: 40px;
  border-radius: 10px;
  margin: 350px auto;
  width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px){
    box-sizing: border-box;
    width: 100%;
    min-width: 350px;
  }
`;
