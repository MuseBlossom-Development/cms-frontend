import React from "react";
import "./style.scss";

const LandingPage = () => {
  return (
    <div className="body">
      <div className="login-container">
        <h1>CMS</h1>
        <div className="lock-icon">
          <img src="icons/lock.png" alt="LOCK_IMG" />
        </div>
        <input type="text" />
        <input type="password" />
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
