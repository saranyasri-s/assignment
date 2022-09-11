import classes from "./App.module.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Tasks from "./components/Tasks/Tasks";
import Chats from "./components/Chats/Chats";
function App() {
  return (
    <div className={classes.App}>
      <NavBar></NavBar>
      <Header></Header>
      <main>
        <Tasks></Tasks>
        <Chats></Chats>
      </main>
    </div>
  );
}

export default App;
