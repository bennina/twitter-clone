import SideMenu from "./components/sideMenu";
import Content from "./components/content";
import SideTrends from "./components/sideTrends";
import "./App.css";
import TopMenu from "./components/topMenu/TopMenu";

function App() {
  return (
    <div className="App">
      <TopMenu />
      <SideMenu />
      <Content />
      <SideTrends />
    </div>
  );
}

export default App;
