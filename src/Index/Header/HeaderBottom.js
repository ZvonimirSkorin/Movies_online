import { useState } from "react";
import { Wrapper, Title, LinksBox, Item, Logo } from "./HeaderBottomStyledComponent";

export function HeaderBottom() {
  return (
    <Wrapper>
      <Logo>
        <span style={{ fontSize: "2.1rem", fontWeight: "700", display: "block" }}>Movies</span>
        <Title>Online</Title>
      </Logo>
      <Links />
    </Wrapper>
  );
}

const items = ["HOME", "MOVIES", "TV SHOWS", "NEWS", "CONTACTS"];

const Links = () => {
  const [currentLink, setCurrentLink] = useState("HOME");
  return (
    <LinksBox>
      {items.map((item, index) => {
        return (
          <Item
            isHero={currentLink === item}
            onClick={() => {
              setCurrentLink(item);
            }}
            key={index}
          >
            {item}
          </Item>
        );
      })}
    </LinksBox>
  );
};
