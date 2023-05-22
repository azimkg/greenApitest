import "./App.css";
import PartsContextProvider from "./context/constext";
import Routing from "./routes/Routing";

function App() {
  return (
    <PartsContextProvider>
      <Routing />
    </PartsContextProvider>
  );
}

export default App;
