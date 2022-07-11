// import "./util/style.scss";
import LandingPage from "./views/LandingPage";
import HelpPage from "./views/HelpPage";
import RegisterPage from "./views/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./util/style.scss";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/help" element={<HelpPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
