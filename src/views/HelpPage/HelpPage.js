import React from "react";
import { useState } from "react";
import "./style.scss";
import Tos from "../../components/Tos";

const HelpPage = () => {
  const [Text, setText] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const [check, setcheck] = useState(false);

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
  };

  return (
    <div className="body">
      <div className="container">
        <h1>문의하기</h1>
        <img
          src="icons/question.png"
          alt="question"
          className="question-icon"
        />
        {nameList.map((ele, idx) => {
          if (idx === 0)
            return (
              <div key={idx + 1} className="input-box">
                <div>
                  <img src="icons/red_star.png" alt="Star" />
                </div>
                <span>{ele}</span>
                <select name={idx + 1} onChange={onChangeSelect}>
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
                style={{ height: "60px" }}
              >
                <div>
                  <img src="icons/red_star.png" alt="Star" />
                </div>
                <span>{ele}</span>
                <textarea
                  name={idx + 1}
                  rows="3"
                  resize="none"
                  onChange={onChangeText}
                />
              </div>
            );
          if (idx === 5) return <Tos key={idx + 1} check={setcheck} />;
          return (
            <div key={idx + 1} className="input-box">
              <div>
                <img src="icons/red_star.png" alt="Star" />
              </div>
              <span>{ele}</span>
              <input type="text" name={idx + 1} onChange={onChangeText} />
            </div>
          );
        })}
        <button onClick={onClickButton}>문의하기</button>
      </div>
    </div>
  );
};

export default HelpPage;
