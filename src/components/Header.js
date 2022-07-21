import React from "react";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/");
  };

  const onClickHeart = () => {
    props.showModal === true
      ? props.setShowModal(false)
      : props.setShowModal(true);
  };
  const onClickSpeaker = () => {};
  return (
    <div className="header">
      <div className="header-container">
        <div className="home-area">
          <img src="../icons/home.png" alt="home" onClick={onClickHome} />
        </div>
        <div
          className="modal-area"
          style={{ display: props.showMenu ? "" : "none" }}
        >
          <img src="../icons/heart.png" alt="heart" onClick={onClickHeart} />
          <div
            className="modal"
            style={{ display: [props.showModal === true ? "" : "none"] }}
          >
            <div className="top-content">내 계정</div>
            <div className="bottom-content">로그아웃</div>
          </div>
          <img
            src="../icons/speaker.png"
            alt="speaker"
            onClick={onClickSpeaker}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
