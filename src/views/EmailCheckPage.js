import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { sendEmail } from "../api/index";

const EmailCheckPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(180);

  const codeDom = useRef({});

  const onClickBody = () => setShowModal(false);

  const interval = useRef(null);
  let min = useRef(0);
  let sec = useRef(0);

  const getNumLength = (num) => num.toString().length;

  min = Math.floor(timer / 60);
  sec = timer - Math.floor(timer / 60) * 60;

  useEffect(() => {
    if (timer !== 0) {
      interval.current = setInterval(() => {
        if (timer > 0) setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval.current);
    } else {
      console.log("clear");
    }
  }, [timer]);

  useEffect(() => {
    codeDom.current[0].focus();
  }, []);

  const onChangeCodeInput = (e) => {
    let { name, value } = e.target;
    if (value.length !== 1) value = value.slice(-1);
    e.target.value = value;
    if (name < 4) codeDom.current[Number(name) + 1].focus();
  };

  const onFocusCodeInput = (e) => {
    codeDom.current[e.target.name].value = "";
  };

  const onClickButton = () => {
    let code = "";
    for (let i = 0; i < 5; ++i) {
      if (codeDom.current[i].value !== "") code += codeDom.current[i].value;
      else code += "|";
    }
    if (code.indexOf("|") !== -1) alert("입력코드를 확인해주세요");
    else {
      sendEmail();
    }
  };

  const onClickReset = () => {
    setTimer(180);
    for (let i = 0; i < 5; ++i) codeDom.current[i].value = "";
    codeDom.current[0].focus();
  };

  const onKeyDownCodeInput = (e) => {
    if (e.key === "Backspace") {
      e.target.value = "";
      if (e.target.name > 0) codeDom.current[e.target.name - 1].focus();
    }
  };

  const codeInput = [];

  for (let i = 0; i < 5; ++i)
    codeInput.push(
      <input
        key={i}
        name={i}
        ref={(ele) => (codeDom.current[i] = ele)}
        type="text"
        onChange={onChangeCodeInput}
        onFocus={onFocusCodeInput}
        onKeyDown={onKeyDownCodeInput}
      />
    );

  return (
    <>
      <Header
        showModal={showModal}
        setShowModal={setShowModal}
        showMenu={true}
      />
      <div className="body" onClick={onClickBody}>
        <div className="container">
          <h2>E-Mail 인증</h2>
          <h1 style={{ color: "purple", marginBottom: "0" }}>
            {"0" + min} : {getNumLength(sec) === 1 ? "0" + sec : sec}
          </h1>
          <div className="reset-box">
            <div className="reset-button" onClick={onClickReset}>
              코드 재전송
            </div>
          </div>
          <h3 style={{ marginTop: "60px" }}>
            계정 이메일로 인증코드가 발송되었습니다.
          </h3>
          <p>제한시간 내에 인증코드를 입력해주세요</p>
          <div className="code-box">{codeInput}</div>
          <button
            className="next-button"
            style={{ marginTop: "40px" }}
            onClick={onClickButton}
          >
            인증하기
          </button>
        </div>
      </div>
    </>
  );
};

export default EmailCheckPage;
