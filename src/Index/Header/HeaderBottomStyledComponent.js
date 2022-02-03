import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgb(43, 43, 32);
  background: linear-gradient(180deg, rgba(43, 43, 32, 1) 0%, rgba(40, 40, 32, 1) 35%, rgba(35, 35, 35, 1) 68%, rgba(24, 24, 24, 1) 100%);
  width: 100%;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  box-sizing: border-box;
  display: flex;
  color: white;
  gap: 0.5rem;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const Logo = styled.div`
  display: flex;
`;

export const Title = styled.span`
  background-color: yellow;
  color: black;
  display: block;
  padding: 0.2rem;
  box-sizing: border-box;
  height: 1.7rem;
  margin-left: 4px;
  font-weight: 700;
  border-radius: 2px;
`;

export const LinksBox = styled.div`
  display: flex;
  margin-left: auto;
  gap: 0.3rem;
  @media screen and (max-width: 700px) {
    margin: 0 auto;
  }
`;

export const Item = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px 0px black;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.6rem;
    padding: 0.5rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.5rem;
    padding: 0.5rem;
  }
  color: ${({ isHero }) => (isHero ? "yellow" : "white")};
`;
