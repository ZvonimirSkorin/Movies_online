import "./App.css";
import { createUseStyles } from "react-jss";
import { HeaderTop } from "./Index/Header/headertop";
import { SideMenu } from "./Index/SideMenu/SideMenu";
import { HeaderBottom } from "./Index/Header/HeaderBottom";
import { MainContent } from "./Index/MainContent/MainContent";

const useStyles = createUseStyles({
  myButton: {
    minHeight: "100vh",
    padding: "2rem",
    background: "rgb(2,2,2)",
    background: "linear-gradient(180deg, rgba(2,2,2,1) 0%, rgba(2,2,2,0.8270658605238971) 35%, rgba(2,2,2,0.7402311266303396) 100%); ",
  },
  header: {
    backgroundColor: "#181818",
    height: "auto",
    maxWidth: 1200,
    margin: "0 auto",
  },
  body: {
    backgroundColor: "#181818",
    width: "100%",
    display: "flex",
    gridTemplateColumns: "repeat(2,1fr)",
    maxWidth: 1200,
    margin: "0 auto",
  },
  "@media screen and (max-width: 600px)": {
    body: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
});
function App() {
  const classes = useStyles();

  return (
    <div className={classes.myButton}>
      <header className={classes.header}>
        <HeaderTop />
        <HeaderBottom />
      </header>
      <div className={classes.body}>
        <SideMenu />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
