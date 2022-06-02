import "./App.css";
import { Navbar } from "./components/Navbar";
import { RouterComponent } from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterComponent />
    </div>
  );
}

export default App;
