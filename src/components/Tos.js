import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

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
  const [isCheck, setIsCheck] = useState({
    check1: false,
    check2: false,
  });

  const checkOnSrc = "icons/check_on.png";
  const checkOffSrc = "icons/check_off.png";
  const checkHoverSrc = "icons/check_hover.png";

  useEffect(() => {
    checkAgree();
  }, [isCheck]);

  const check1 = useRef();
  const check2 = useRef();

  const checkAgree = () => {
    if (isCheck.check1 && isCheck.check2) {
      props.check(true);
    } else props.check(false);
  };

  const findStyle = (name) => styles.find((ele) => ele.name === name);

  const onMouseEnterCheck = (num) => {
    if (isCheck.check1 === false && num === 1)
      check1.current.src = checkHoverSrc;
    if (isCheck.check2 === false && num === 2)
      check2.current.src = checkHoverSrc;
  };

  const onMouseLeaveCheck = (num) => {
    if (isCheck.check1 === false && num === 1) check1.current.src = checkOffSrc;
    if (isCheck.check2 === false && num === 2) check2.current.src = checkOffSrc;
  };

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
            src={isCheck.check1 ? checkOnSrc : checkOffSrc}
            ref={check1}
            alt="check"
            style={findStyle("check-icon")}
            onClick={() => {
              setIsCheck({ ...isCheck, check1: !isCheck.check1 });
              checkAgree();
            }}
            onMouseEnter={() => onMouseEnterCheck(1)}
            onMouseLeave={() => onMouseLeaveCheck(1)}
          />
          <span style={findStyle("text")}>이용 약관에 동의합니다</span>
        </div>
        <div style={findStyle("check-block")}>
          <img
            src={isCheck.check2 ? checkOnSrc : checkOffSrc}
            ref={check2}
            alt="check"
            style={findStyle("check-icon")}
            onClick={() => {
              setIsCheck({ ...isCheck, check2: !isCheck.check2 });
              checkAgree();
            }}
            onMouseEnter={() => onMouseEnterCheck(2)}
            onMouseLeave={() => onMouseLeaveCheck(2)}
          />
          <span style={findStyle("text")}>개인정보취급방침에 동의합니다</span>
        </div>
      </span>
    </div>
  );
};

export default Tos;
