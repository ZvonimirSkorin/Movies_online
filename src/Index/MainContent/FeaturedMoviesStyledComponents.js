import styled from "styled-components";

export const MovieList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Movie = styled.div`
  height: 300px;
  width: 100%;
`;
export const Button = styled.button`
  background-color: yellow;
  color: black;
  outline: none;
  border-style: none;
  font-weight: 700;
  padding: 0.5rem;
  margin: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Title = styled.div`
  background-color: rgb(35, 35, 35);
  margin: 1rem 0rem;
  color: white;
  box-sizing: border-box;
  padding: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;
export const Description = styled.div`
  color: white;
  text-align: center;
`;
