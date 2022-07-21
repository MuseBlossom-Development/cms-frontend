import React from "react";
import { useState } from "react";
import Tos from "../components/Tos";
import Header from "../components/Header";
import { sendHelp } from "../api/index";
import { useNavigate } from "react-router-dom";

const HelpPage = () => {
  const [Text, setText] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const nameList = [
    "문의구분",
    "신청인",
    "e-mail",
    "연락처",
    "내용",
    "약관동의",
  ];

  const onChangeSelect = (e) => {
    setText({ ...Text, 1: e.target.value });
  };

  const onChangeText = (e) => {
    setText({ ...Text, [e.target.name]: e.target.value });
  };

  const onClickBody = () => setShowModal(false);

  const onClickButton = () => {
    for (let i in Text) {
      if (Text[i] === "") {
        alert(nameList[i - 1] + "을 입력해 주세요");
        return;
      }
    }
    if (check === false) {
      alert("약관동의를 체크해 주세요");
      return;
    }

    sendHelp(Text[1], Text[2], Text[3], Text[4], Text[5], (res) => {
      alert(res.data.message);
      navigate("/");
    });
  };

  return (
    <>
      <Header
        showModal={showModal}
        setShowModal={setShowModal}
        showMenu={false}
      />
      <div className="body" onClick={onClickBody}>
        <div className="container" style={{ width: "400px" }}>
          <h2>문의하기</h2>
          <img
            src="icons/question.png"
            alt="question"
            className="question-icon"
          />
          {nameList.map((ele, idx) => {
            if (idx === 0)
              return (
                <div key={idx + 1} className="input-box">
                  <div className="red-star" style={{ flexBasis: "5%" }}>
                    <img
                      className="red-star-icon"
                      src="icons/red_star.png"
                      alt="Star"
                    />
                  </div>
                  <span className="name-text" style={{ flexBasis: "35%" }}>
                    {ele}
                  </span>
                  <select
                    className="input-select"
                    style={{ flexBasis: "60%" }}
                    name={idx + 1}
                    onChange={onChangeSelect}
                  >
                    <option value="nothing">
                      -----------------Select------------------
                    </option>
                    <option value="register">회원가입</option>
                    <option value="service">서비스</option>
                    <option value="etc">기타</option>
                  </select>
                </div>
              );
            if (idx === 4)
              return (
                <div
                  key={idx + 1}
                  className="input-box"
                  style={{ height: "60px", marginBottom: "20px" }}
                >
                  <div className="red-star" style={{ flexBasis: "5%" }}>
                    <img
                      className="red-star-icon"
                      src="icons/red_star.png"
                      alt="Star"
                    />
                  </div>
                  <span className="name-text" style={{ flexBasis: "35%" }}>
                    {ele}
                  </span>
                  <textarea
                    className="input-textarea"
                    style={{ flexBasis: "60%" }}
                    name={idx + 1}
                    rows="3"
                    resize="none"
                    onChange={onChangeText}
                  />
                </div>
              );
            if (idx === 5)
              return (
                <div key={idx + 1} className="input-box">
                  <div className="red-star" style={{ flexBasis: "5%" }}>
                    <img
                      className="red-star-icon"
                      src="icons/red_star.png"
                      alt="Star"
                    />
                  </div>
                  <span className="name-text" style={{ flexBasis: "35%" }}>
                    {ele}
                  </span>
                  <Tos key={idx + 1} setCheck={setCheck} />
                </div>
              );
            return (
              <div key={idx + 1} className="input-box">
                <div className="red-star" style={{ flexBasis: "5%" }}>
                  <img
                    className="red-star-icon"
                    src="icons/red_star.png"
                    alt="Star"
                  />
                </div>
                <span className="name-text" style={{ flexBasis: "35%" }}>
                  {ele}
                </span>
                <input
                  className="input-text"
                  style={{ flexBasis: "60%" }}
                  type="text"
                  name={idx + 1}
                  onChange={onChangeText}
                />
              </div>
            );
          })}
          <button className="next-button" onClick={onClickButton}>
            문의하기
          </button>
        </div>
      </div>
    </>
  );
};

export default HelpPage;
