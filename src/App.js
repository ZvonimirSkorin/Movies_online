import { HeaderTop } from "./Index/Header/Headertop";
import { SideMenu } from "./Index/SideMenu/SideMenu";
import { HeaderBottom } from "./Index/Header/HeaderBottom";
import { MainContent } from "./Index/MainContent/MainContent";
import { MainParent, Header, Body } from "./AppStyledComponents";

function App() {
  return (
    <MainParent>
      <Header>
        <HeaderTop />
        <HeaderBottom />
      </Header>
      <Body>
        <SideMenu />
        <MainContent />
      </Body>
    </MainParent>
  );
}

export default App;
