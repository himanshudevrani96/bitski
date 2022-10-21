import styled from "styled-components";

export const AppContainer = styled.div`
  /* height: 100vh; */
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  padding: 12px;
  background: black;
  color: white;
  transition: 0.3s ease;
  cursor: pointer;
  border-radius: 10px;
  :hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px 10px;
  }
`;
