import { useState } from "react";
import { AboutSection, Button, NavButton, Wrapper, SideBarItem } from "./SideMenuStyledComponents";

const items = [
  "COMEDY",
  "DRAMA",
  "ACTION",
  "FANTASTIC",
  "ROMATIC",
  "ANIME",
  "ADVENTURE",
  "THRILLER",
  "MYSTIC",
  "SCIENCE",
  "MILITARY",
  "HISTORICAL",
  "WESTERN",
  "MUSICAL",
  "FAMILY",
  "SPORT",
];

export const SideMenu = () => {
  const [expand, setExpand] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("COMEDY");
  return (
    <>
      <NavButton
        onClick={() => {
          setExpand(!expand);
        }}
        z
      >
        Kategorije
      </NavButton>
      <Wrapper expand={expand}>
        {items.map((item, index) => {
          return (
            <SideBarItem
              colorChange={selectedGenre === item}
              key={index}
              onClick={() => {
                setSelectedGenre(item);
              }}
            >
              {item}
            </SideBarItem>
          );
        })}
        <AboutSection>
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada in risus non lacinia. Proin euismod, nisi sit amet ullamcorper
            luctus, augue elit porta sapien, vitae bibendum orci sapien a elit. Cras rhoncus erat eget turpis semper elementum. Etiam efficitur nunc
            ut laoreet finibus. Integer luctus dui id libero consectetur, imperdiet dignissim leo pulvinar. Duis euismod orci sit amet tortor lobortis
            euismod. Proin laoreet neque ut justo vulputate efficitur. Nulla blandit sem et iaculis faucibus.
          </p>
          <Button>See all movies</Button>
        </AboutSection>
      </Wrapper>
    </>
  );
};
