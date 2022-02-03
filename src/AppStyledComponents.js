import styled from "styled-components";

export const MainParent = styled.div`
  min-height: 100vh;
  padding: 2rem;
  overflow-x: hidden;
  background: rgb(2, 2, 2);
  background: linear-gradient(180deg, rgba(2, 2, 2, 1) 0%, rgba(2, 2, 2, 0.8270658605238971) 35%, rgba(2, 2, 2, 0.7402311266303396) 100%);
`;

export const Header = styled.header`
  background-color: #181818;
  heigth: auto;
  max-width: 1200px;
  margin: 0 auto;
`;
export const Body = styled.div`
  background-color: #181818;
  width: 100%;
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
