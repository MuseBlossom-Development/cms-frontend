import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/index";

const LandingPage = () => {
  const [showPW, setshowPW] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  const onEye = (e) => {
    switch (e.type) {
      case "mousedown":
        setshowPW(true);
        break;
      case "mouseup":
        setshowPW(false);
        break;
      case "mouseout":
        setshowPW(false);
        break;
      default:
        break;
    }
  };

  const onClickLoginButton = () => {
    login(id, pw, (data) => {
      alert(data.message);
    });
  };

  return (
    <div className="body">
      <div className="container" style={{ width: "250px" }}>
        <h1 style={{ marginBottom: "0px" }}>CMS</h1>
        <div className="lock-icon">
          <img src="icons/lock.png" alt="LOCK_IMG" />
        </div>
        <input
          className="input-text"
          type="text"
          onChange={(e) => setId(e.target.value)}
        />
        <div className="input-password">
          <img
            src="icons/eye.png"
            alt="LOCK_IMG"
            onMouseDown={onEye}
            onMouseUp={onEye}
            onMouseOut={onEye}
          />
          <input
            type={showPW ? "text" : "password"}
            onChange={(e) => setPw(e.target.value)}
          />
        </div>
        <span className="login-button" onClick={onClickLoginButton}>
          Login
        </span>
        <div className="register-area">
          <span onClick={() => navigate("/help")}>문의하기</span>
          <span onClick={() => navigate("/Register")}>회원가입</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
