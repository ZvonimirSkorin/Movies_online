import styled, { css } from "styled-components";

export const StyledNews = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    "a a"
    "a a"
    "b c"
    "d e";
  width: 100%;
  grid-template-rows: repeat(4, 150px);
  @media screen and (max-width: 900px) {
    grid-template-rows: repeat(6, 150px);
    grid-template-areas:
      "a a"
      "a a"
      "b b"
      "c c"
      "d d"
      "e e";
  }

  article {
    strong {
      font-size: 1.5rem;
    }
    .Subtitle {
      font-size: 1rem;
      color: yellow;
      z-index: 10;
      @media screen and (max-width: 700px) {
        font-size: 1.3rem;
      }
    }
  }
  article:nth-child(1) {
    grid-area: a;
    strong {
      font-size: 3rem;
    }
    .Subtitle {
      font-size: 1.5rem;
    }
  }
  article:nth-child(2) {
    grid-area: b;
  }
  article:nth-child(3) {
    grid-area: c;
  }
  article:nth-child(4) {
    grid-area: d;
  }
  article:nth-child(5) {
    grid-area: e;
  }
`;

export const Article = styled.article`
  background-color: white;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;
`;
export const Description = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 12;
  color: white;

  text-align: center;
  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const Background = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.60101547454919464) 0%, rgba(0, 0, 0, 0) 100%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
`;
