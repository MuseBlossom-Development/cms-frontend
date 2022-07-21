import NotFound from "./views/NotFound";
import LandingPage from "./views/LandingPage";
import HelpPage from "./views/HelpPage";
import RegisterPage from "./views/RegisterPage";
import RegisterEndPage from "./views/RegisterEndPage";
import EmailCheckPage from "./views/EmailCheckPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./util/style.scss";
import { useEffect, useState } from "react";

function App() {
  const [Token, setToken] = useState({ accessToken: "", refreshToken: "" });

  // useEffect(() => {
  //   console.log(Token);
  // }, [Token]);

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LandingPage setToken={setToken} />}></Route>
        <Route path="/help" element={<HelpPage />}></Route>
        <Route
          path="/register"
          element={<RegisterPage setToken={setToken} />}
        ></Route>
        <Route path="/register/end" element={<RegisterEndPage />}></Route>
        <Route
          path="/email-check"
          element={<EmailCheckPage userToken={Token} />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
