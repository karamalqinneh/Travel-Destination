import Home from "./components/home/Home";
import data from "./components/data/db.json";

function App() {
  return <Home data={data}></Home>;
}

export default App;
