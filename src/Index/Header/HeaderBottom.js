import { useState } from "react";
import { useStyles, Wrapper, Title, LinksBox, Item } from "./HeaderBottomStyledComponent";

export function HeaderBottom() {
  const classes = useStyles();

  return (
    <Wrapper className={classes.wrapper}>
      <div>
        <span style={{ fontSize: "2.1rem", fontWeight: "700" }}>Movies</span>
        <Title>Online</Title>
      </div>
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
            colorChange={currentLink === item}
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
