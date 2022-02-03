import styled from "styled-components";
import { FeaturedMovies } from "./FeaturedMovies";
import { News } from "./News";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-sizing: border-box;
  padding: 1rem;
`;

export function MainContent() {
  return (
    <Wrapper>
      <News />
      <FeaturedMovies />
    </Wrapper>
  );
}
