import { useState } from "react";
import { AboutSection, Button, NavButton, Aside, SideBarItem } from "./SideMenuStyledComponents";

const genres = [
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

export function SideMenu() {
  const [expand, setExpand] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("COMEDY");
  return (
    <>
      <NavButton
        onClick={() => {
          setExpand(!expand);
        }}
      >
        Kategorije
      </NavButton>
      <Aside expand={expand}>
        {genres.map((genre, index) => {
          return (
            <SideBarItem
              colorChange={selectedGenre === genre}
              key={index}
              onClick={() => {
                setSelectedGenre(genre);
              }}
            >
              {genre}
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
      </Aside>
    </>
  );
}
