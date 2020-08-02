import styled from "styled-components";

export const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  font-weight: 400;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1.5rem;
  h2 {
    font-size: 2.8rem;
  }
`;

export const AppMain = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
`;

export const AppFooter = styled.footer`
  background-color: black;
  color: white;
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
`;
