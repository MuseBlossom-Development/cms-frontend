import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Tos = (props) => {
  const styles = [
    {
      name: "check-box",
      display: "flex",
      flexDirection: "column",
      flexBasis: props.flexBasis + "%",
    },
    {
      name: "check-block",
      display: "flex",
    },
    {
      name: "check-icon",
      width: "20px",
      height: "20px",
      cursor: "pointer",
    },
    {
      name: "text",
      textAlign: "left",
      fontSize: "12px",
      fontWeight: "600",
      padding: "2px 3px",
      color: "#555555",
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
    if (isCheck.check1 && isCheck.check2) {
      props.setCheck(true);
    } else props.setCheck(false);
  }, [isCheck, props]);

  const check1 = useRef();
  const check2 = useRef();

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
    <>
      <span style={findStyle("check-box")}>
        <div style={findStyle("check-block")}>
          <img
            src={isCheck.check1 ? checkOnSrc : checkOffSrc}
            ref={check1}
            alt="check"
            style={findStyle("check-icon")}
            onClick={() => setIsCheck({ ...isCheck, check1: !isCheck.check1 })}
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
            onClick={() => setIsCheck({ ...isCheck, check2: !isCheck.check2 })}
            onMouseEnter={() => onMouseEnterCheck(2)}
            onMouseLeave={() => onMouseLeaveCheck(2)}
          />
          <span style={findStyle("text")}>개인정보취급방침에 동의합니다</span>
        </div>
      </span>
    </>
  );
};

export default Tos;
