import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/index";

const LandingPage = (props) => {
  const [showPW, setshowPW] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  const onClickEye = () => {
    setshowPW(!showPW);
  };

  const onClickLoginButton = () => {
    login(id, pw, (scs, res) => {
      if (scs) {
        alert(res.data.message);
        props.setToken({
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        });
        const jwt = require("jsonwebtoken");

        if (jwt.decode(res.data.accessToken.substring(7)).id === id) {
          if (!res.data.isEmail) navigate("/register/end");
          else
            alert(
              "로그인 성공, 이메일 인증 된 아이디 -> 계약페이지로 라우팅 예정"
            );
        } else alert("허용되지 않은 접근입니다.");
      } else alert(res.response.data.error);
    });
  };

  return (
    <div className="body">
      <div className="container" style={{ width: "250px", marginTop: "150px" }}>
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
            src={showPW ? "icons/visibility_off.svg" : "icons/visibility.svg"}
            alt="LOCK_IMG"
            onClick={onClickEye}
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
          <span onClick={() => navigate("/register")}>회원가입</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
