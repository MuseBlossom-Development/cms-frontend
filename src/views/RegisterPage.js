import React, { useRef } from "react";
import { useState } from "react";
import Tos from "../components/Tos";
import Header from "../components/Header";
import { checkId, checkEmail, signUp } from "../api/index";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
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

    if (Text.text3.length < 4 || Text.text3.length > 20) {
      alert("비밀번호는 4~20자로 해주세요");
      return;
    }

    if (Text.text3 !== Text.text4) {
      alert("비밀번호를 확인해 주세요");
      return;
    }

    // signUp(
    //   Text.text2,
    //   Text.text3,
    //   Text.text4,
    //   Text.text1,
    //   Text.text5,
    //   (res) => {
    //     console.log(res);
    //     alert("회원가입이 완료되었습니다.");
    //     navigate("/");
    //   }
    // );
    alert("회원가입 되었습니다!");
    navigate("/register/end");
  };

  const onClickCheckId = () => {
    checkId(Text.text2, (res) => {
      if (Text.text2.length < 4 || Text.text2.length > 20) {
        alert("아이디는 4~20자로 해주세요");
        return;
      }
      alert(res.data.message);
      if (res.data.success === true) isChecked.current.id = true;
    });
  };

  const onClickCheckEmail = () => {
    checkEmail(Text.text5, (res) => {
      alert(res.data.message);
      if (res.data.success === true) isChecked.current.email = true; // api res보고 추가바람
      isChecked.current.email = true;
    });
  };

  const onEye = (e) => {
    switch (e.type) {
      case "mousedown":
        e.target.name === "3"
          ? setShowPw({ ...showPw, pw1: true })
          : setShowPw({ ...showPw, pw2: true });
        break;
      case "mouseup":
        e.target.name === "3"
          ? setShowPw({ ...showPw, pw1: false })
          : setShowPw({ ...showPw, pw2: false });
        break;
      case "mouseout":
        e.target.name === "3"
          ? setShowPw({ ...showPw, pw1: false })
          : setShowPw({ ...showPw, pw2: false });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header showModal={showModal} setShowModal={setShowModal} />
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
                              src="icons/eye.png"
                              alt="LOCK_IMG"
                              name={idx + 1}
                              onMouseDown={onEye}
                              onMouseUp={onEye}
                              onMouseOut={onEye}
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
