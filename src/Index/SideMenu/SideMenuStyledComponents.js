import styled, { css } from "styled-components";

export const StyledItem = styled.div``;

export const AboutSection = styled.div`
  color: white;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: yellow;
  color: black;
  outline: none;
  border-style: none;
  font-weight: 700;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition-duration: 0.3s;
  &:hover{
    transform: scale(1.1);
    background-color:white;
    color:black;
  },
  `;

export const SideBarItem = styled.div`
  text-align: left;
  color: white;
  padding: 0.4rem 0.2rem;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #232323;
  ${(props) =>
    props.colorChange &&
    css`
      background-color: yellow;
      color: black;
    `};
  @media screen and (max-width: 600px) {
    text-align: center;
    padding: 0.8rem 0.2rem;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 300px;
  max-width: 25%;
  margin: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    width: 100%;
    ${(props) =>
      css`
        transform: scaleY(${props.expand ? 1 : 0});
        height: 0;
        max-width: 100%;

        z-index: 13;
        width: 100%;
        transition-duration: 0.5s;
      `}
  }
`;

export const NavButton = styled.div`
  display: none;
  background-color: yellow;
  color: black;
  outline: none;
  border-style: none;
  font-weight: 700;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition-duration: 0.3s;
  &:hover {
    transform: scale(1.1);
    background-color: white;
    color: black;
  }

  @media screen and (max-width: 600px) {
    display: block;
  }
`;
