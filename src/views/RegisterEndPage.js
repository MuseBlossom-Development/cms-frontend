import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const RegisterEndPage = () => {
  const [showModal, setShowModal] = useState(false);
  const onClickBody = () => setShowModal(false);
  const navigate = useNavigate();

  return (
    <>
      <Header
        showModal={showModal}
        setShowModal={setShowModal}
        showMenu={true}
      />
      <div className="body" onClick={onClickBody}>
        <div className="container">
          <h2>회원 가입</h2>
          <h3 style={{ marginTop: "100px" }}>가입이 완료되었습니다.</h3>
          <p style={{ marginBottom: "0" }}>
            계약을 진행하시려면 <u>이메일 인증하기</u> 버튼을 눌러
          </p>
          <p>이메일 인증해 주시기 바랍니다.</p>
          <button
            className="next-button"
            style={{ marginTop: "138px", width: "160px" }}
            onClick={() => navigate("/email-check")}
          >
            이메일 인증하기
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterEndPage;
