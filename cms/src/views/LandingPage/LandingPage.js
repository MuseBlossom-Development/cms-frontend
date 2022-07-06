import React, { useState } from "react";
import "./style.scss";

const LandingPage = () => {
  const [showPW, setshowPW] = useState(false);

  const onEye = (e) => {
    switch (e.type) {
      case "mousedown":
        setshowPW(true);
        break;
      case "mouseup":
        setshowPW(false);
        break;
      default:
        break;
    }
  };
  return (
    <div className="body">
      <div className="login-container">
        <h1>CMS</h1>
        <div className="lock-icon">
          <img src="icons/lock.png" alt="LOCK_IMG" />
        </div>
        <input type="text" />
        <div className="password-box">
          {showPW ? <input type="text" /> : <input type="password" />}
          <img
            src="icons/eye.png"
            alt="LOCK_IMG"
            onMouseDown={onEye}
            onMouseUp={onEye}
          />
        </div>
        <span>Login</span>
        <div className="register-area">
          <span>문의하기</span>
          <span>회원가입</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
