import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1.2rem 0.8rem;
  box-sizing: border-box;
  background-color: #272727;
  position: relative;
  width: 300px;
  box-shadow: 0px 0px 1px 0px white;
  display: flex;
`;
const Image = styled.img`
  position: absolute;
  right: 0.3rem;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
`;
const Input = styled.input`
  bottom: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 87%;
  margin-right: 30px;
  outline: none;
  border-style: none;
  background-color: transparent;
  color: white;
`;

export function SearchBar() {
  return (
    <Wrapper>
      <Image alt="" src="/Povecalo.svg" />
      <Input type="text" />
    </Wrapper>
  );
}
