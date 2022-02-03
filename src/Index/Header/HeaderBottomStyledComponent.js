import { createUseStyles } from "react-jss";
import styled, { css } from "styled-components";

export const useStyles = createUseStyles({
  wrapper: {
    width: "100%",
    padding: "0.5rem 1rem",
    marginTop: "1rem",
    display: "flex",
    boxSizing: "border-box",
    color: "white",
    gap: "0.5rem",
    backgroundColor: "rgba(0, 0, 0, 0.212)",
  },
  "@media screen and (max-width: 700px)": {
    wrapper: {
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
    },
  },
});

export const Wrapper = styled.div`
  background: rgb(43, 43, 32);
  background: linear-gradient(180deg, rgba(43, 43, 32, 1) 0%, rgba(40, 40, 32, 1) 35%, rgba(35, 35, 35, 1) 68%, rgba(24, 24, 24, 1) 100%);
  width: 100%;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  display: flex;
  color: white;
  gap: 0.5rem;
`;

export const Title = styled.span`
  background-color: yellow;
  color: black;
  padding: 0.2rem;
  box-sizing: border-box;
  height: 1.7rem;
  margin-left: 4;
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
  color: white;
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
  ${(props) =>
    props.colorChange &&
    css`
      color: yellow;
    `}
`;
export const useLinksStyles = createUseStyles({
  Temp: {
    color: "yellow",
  },
  "@media screen and (max-width: 700px)": {
    LinksBox: {
      margin: "0 auto",
    },
  },
  "@media screen and (max-width: 540px)": {
    Item: {
      fontSize: "0.8rem",
      padding: "0.5rem",
    },
  },
});
