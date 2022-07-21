import LandingPage from "./views/LandingPage";
import HelpPage from "./views/HelpPage";
import RegisterPage from "./views/RegisterPage";
import RegisterEndPage from "./views/RegisterEndPage";
import EmailCheckPage from "./views/EmailCheckPage";
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
        <Route path="/register/end" element={<RegisterEndPage />}></Route>
        <Route path="/email-check" element={<EmailCheckPage />}></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
