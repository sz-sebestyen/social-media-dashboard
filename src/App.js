import "./App.css";

import Dashboard from "./components/Dashboard";
import data from "./sample-data";

function App() {
  console.log(data);
  return <Dashboard data={data} />;
}

export default App;
