import React, { useState } from "react";

const Tos = (props) => {
  const styles = [
    {
      name: "tos-area",
      display: "flex",
      height: "40px",
      width: "100%",
      justifyContent: "space-between",
    },
    {
      name: "red-star",
      flexBasis: "5%",
    },
    {
      name: "red-star-icon",
      width: "15px",
      height: "15px",
    },
    {
      name: "text-box",
      flexBasis: "35%",
      textAlign: "left",
    },
    {
      name: "check-box",
      flexBasis: "60%",
      display: "flex",
      flexDirection: "column",
      marginTop: "2px",
    },
    {
      name: "check-block",
      display: "flex",
      justifyContent: "space-between",
    },
    {
      name: "check-icon",
      width: "20px",
      height: "20px",
      cursor: "pointer",
    },
    {
      name: "text",
      width: "88%",
      textAlign: "left",
      fontSize: "14.5px",
    },
  ];
  const [isCheck, setisCheck] = useState({
    check1: false,
    check2: false,
    hover1: false,
    hover2: false,
  });

  const checkOnSrc = "icons/check_on.png";
  const checkOffSrc = "icons/check_off.png";
  const checkHoverSrc = "icons/check_hover.png";

  function checkCb1(callback) {
    setisCheck({ ...isCheck, check1: !isCheck.check1 });
    callback();
  }

  function checkCb2(callback) {
    setisCheck({ ...isCheck, check2: !isCheck.check2 });
    callback();
  }

  const checkAgree = () => {
    if (isCheck.check1 && isCheck.check2) {
      props.check(true);
      alert("check!");
    } else props.check(false);
  };

  const findStyle = (name) => styles.find((ele) => ele.name === name);

  return (
    <div style={findStyle("tos-area")}>
      <div style={findStyle("red-star")}>
        <img
          src="icons/red_star.png"
          alt="Star"
          style={findStyle("red-star-icon")}
        />
      </div>
      <span style={findStyle("text-box")}>약관동의</span>
      <span style={findStyle("check-box")}>
        <div style={findStyle("check-block")}>
          <img
            src={
              isCheck.check1
                ? checkOnSrc
                : isCheck.hover1
                ? checkHoverSrc
                : checkOffSrc
            }
            alt="check"
            style={findStyle("check-icon")}
            onClick={() => {
              setisCheck({ ...isCheck, check1: !isCheck.check1 });
              checkAgree();
            }}
            onMouseEnter={() => setisCheck({ ...isCheck, hover1: true })}
            onMouseLeave={() => setisCheck({ ...isCheck, hover1: false })}
          />
          <span style={findStyle("text")}>이용 약관에 동의합니다</span>
        </div>
        <div style={findStyle("check-block")}>
          <img
            src={
              isCheck.check2
                ? checkOnSrc
                : isCheck.hover2
                ? checkHoverSrc
                : checkOffSrc
            }
            alt="check"
            style={findStyle("check-icon")}
            onClick={() => {
              setisCheck({ ...isCheck, check2: !isCheck.check2 });
              checkAgree();
            }}
            onMouseEnter={() => setisCheck({ ...isCheck, hover2: true })}
            onMouseLeave={() => setisCheck({ ...isCheck, hover2: false })}
          />
          <span style={findStyle("text")}>개인정보취급방침에 동의합니다</span>
        </div>
      </span>
    </div>
  );
};

export default Tos;
