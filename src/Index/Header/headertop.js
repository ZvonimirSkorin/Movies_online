import styled from "styled-components";
import { SearchBar } from "./SearchBar";

const Wrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  box-sizing: border-box;
`;

export const HeaderTop = () => {
  return (
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
};
