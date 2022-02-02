import { useState } from "react";
import { createUseStyles } from "react-jss";
import { useLinksStyles, useStyles, Wrapper, StyledItem, Title, LinksBox, Item } from "./HeaderBottomStyledComponent";
import { SearchBar } from "./SearchBar";

export const HeaderBottom = () => {
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
};

const items = ["HOME", "MOVIES", "TV SHOWS", "NEWS", "CONTACTS"];

const Links = () => {
  const [currentLink, setCurrentLink] = useState("HOME");
  const classes = useLinksStyles(false);
  return (
    <LinksBox>
      {items.map((item, index) => {
        return (
          <Item
            color={currentLink === item}
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
