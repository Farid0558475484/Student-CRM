import { BrowserRouter } from "react-router-dom";
import Router from "./navigation/Router";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
