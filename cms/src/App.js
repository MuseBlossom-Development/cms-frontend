import "./App.css";
import LandingPage from "./views/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
