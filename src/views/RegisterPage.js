import React, { useRef } from "react";
import { useState } from "react";
import Tos from "../components/Tos";
import Header from "../components/Header";
import { checkId, checkEmail, signUp } from "../api/index";
import { useNavigate } from "react-router-dom";

const RegisterPage = (props) => {
  const [Text, setText] = useState({
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    text5: "",
  });

  const navigate = useNavigate();

  const [isCheckedTos, setIsCheckedTos] = useState(false);

  const isChecked = useRef({
    id: false,
    pw: false,
    email: false,
  });

  const EmailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const [showPw, setShowPw] = useState({ pw1: false, pw2: false });
  const [showModal, setShowModal] = useState(false);

  const nameList = [
    "기업명",
    "아이디",
    "비밀번호",
    "비밀번호 확인",
    "e-mail",
    "약관동의",
  ];

  const onClickBody = () => setShowModal(false);

  const onChangeText = (e) => {
    setText({ ...Text, [e.target.name]: e.target.value });
  };

  const onClickButton = () => {
    for (let i in Text) {
      let idx = Number(i.substr(4, 1));
      if (Text[i] === "") {
        alert(nameList.at(--idx) + "을 입력해 주세요");
        return;
      }
    }

    if (isChecked.current.id === false) {
      alert("Id 중복 확인을 해 주세요");
      return;
    }

    if (isChecked.current.email === false) {
      alert("E-mail을 인증해주세요");
      return;
    }

    if (isCheckedTos === false) {
      alert("약관동의를 체크해 주세요");
      return;
    }

    if (Text.text3.length < 11 || Text.text3.length > 20) {
      alert("비밀번호는 11~20자로 해주세요");
      return;
    }

    if (Text.text3 !== Text.text4) {
      alert("비밀번호를 확인해 주세요");
      return;
    }

    signUp(
      Text.text2,
      Text.text3,
      Text.text4,
      Text.text1,
      Text.text5,
      (scs, res) => {
        if (scs) {
          alert(res.data.message);
          props.setToken({
            accessToken: res.data.user.accessToken,
            refreshToken: res.data.user.refreshToken,
          });
          navigate("/register/end");
        } else alert(res.response.data.error);
      }
    );
  };

  const onClickCheckId = () => {
    checkId(Text.text2, (scs, res) => {
      if (Text.text2.length < 4 || Text.text2.length > 20) {
        alert("아이디는 4~20자로 해주세요");
        return;
      }
      if (scs) {
        isChecked.current.id = true;
        alert(res.data.message);
      } else alert(res.response.data.error);
    });
  };

  const onClickCheckEmail = () => {
    const email = Text.text5;
    if (!email.match(EmailRegExp)) {
      alert("이메일 형식을 확인해주세요");
      return;
    }
    checkEmail(email, (scs, res) => {
      if (scs) {
        isChecked.current.email = true;
        alert(res.data.message);
      } else alert(res.response.data.error);
    });
  };

  const onClickEye = (e) => {
    e.target.name === "3"
      ? setShowPw({ ...showPw, pw1: !showPw.pw1 })
      : setShowPw({ ...showPw, pw2: !showPw.pw2 });
  };

  return (
    <>
      <Header
        showModal={showModal}
        setShowModal={setShowModal}
        showMenu={false}
      />
      <div className="body" onClick={onClickBody}>
        <div className="container">
          <h2 style={{ marginBottom: "50px" }}>회원 가입</h2>
          {nameList.map((ele, idx) => {
            return (
              <div
                className="input-box"
                key={idx}
                style={idx === 5 ? { marginTop: "20px" } : {}}
              >
                <span className="red-star" style={{ flexBasis: "5%" }}>
                  <img
                    className="red-star-icon"
                    src="icons/red_star.png"
                    alt="Star"
                  />
                </span>
                <span className="name-text" style={{ flexBasis: "25%" }}>
                  {ele}
                </span>
                {(() => {
                  if (idx === 1 || idx === 4)
                    return (
                      <>
                        <input
                          type="text"
                          name={"text" + (idx + 1)}
                          className="input-text"
                          style={{ flexBasis: "50%" }}
                          onChange={onChangeText}
                        />
                        <span
                          className="input-button-block"
                          style={{ flexBasis: "20%" }}
                        >
                          <button
                            className="input-button"
                            onClick={
                              idx === 1 ? onClickCheckId : onClickCheckEmail
                            }
                          >
                            중복확인
                          </button>
                        </span>
                      </>
                    );
                  if (idx === 2 || idx === 3)
                    return (
                      <>
                        <div
                          className="password-block"
                          style={{ flexBasis: "50%" }}
                        >
                          <div className="input-password">
                            <img
                              src={
                                idx === 2
                                  ? showPw.pw1
                                    ? "icons/visibility_off.svg"
                                    : "icons/visibility.svg"
                                  : showPw.pw2
                                  ? "icons/visibility_off.svg"
                                  : "icons/visibility.svg"
                              }
                              alt="LOCK_IMG"
                              name={idx + 1}
                              onClick={onClickEye}
                            />
                            <input
                              type={
                                idx === 2
                                  ? showPw.pw1
                                    ? "text"
                                    : "password"
                                  : showPw.pw2
                                  ? "text"
                                  : "password"
                              }
                              name={"text" + (idx + 1)}
                              onChange={onChangeText}
                            />
                          </div>
                        </div>
                        <span style={{ flexBasis: "20%" }}></span>
                      </>
                    );
                  if (idx === 5)
                    return <Tos flexBasis="70" setCheck={setIsCheckedTos} />;
                  return (
                    <>
                      <input
                        type="text"
                        name={"text" + (idx + 1)}
                        className="input-text"
                        style={{ flexBasis: "50%" }}
                        onChange={onChangeText}
                      />
                      <span style={{ flexBasis: "20%" }}></span>
                    </>
                  );
                })()}
              </div>
            );
          })}
          <button className="next-button" onClick={onClickButton}>
            확인
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
