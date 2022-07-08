import "./App.css";
import LandingPage from "./views/LandingPage/LandingPage";
import HelpPage from "./views/HelpPage/HelpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/help" element={<HelpPage />}></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
