import axios from "axios";

const baseUrl = "http://ec2-15-165-5-112.ap-northeast-2.compute.amazonaws.com";

const login = (id, pw, cb) => {
  axios
    .post(baseUrl + "/auth/login", {
      id: id,
      password: pw,
    })
    .then((res) => cb(res.data.success, res))
    .catch((err) => cb(err.response.data.success, err));
};

const sendHelp = (type, name, email, info, contents, cb) => {
  axios
    .post(baseUrl + "/help", {
      type: type, // 문의구분
      name: name, // 신청자
      email: email, // 이메일
      info: info, // 연락처
      contents: contents, // 문의 내용
    })
    .then((res) => cb(res))
    .catch((err) => console.log(err));
};

const checkId = (id, cb) => {
  axios
    .post(baseUrl + "/auth", {
      type: "id",
      val: id,
    })
    .then((res) => cb(res.data.success, res))
    .catch((err) => cb(err.response.data.success, err));
};

const checkEmail = (email, cb) => {
  axios
    .post(baseUrl + "/auth", {
      type: "email",
      val: email,
    })
    .then((res) => cb(res.data.success, res))
    .catch((err) => cb(err.response.data.success, err));
};

const signUp = (id, pw1, pw2, comName, email, cb) => {
  axios
    .post(baseUrl + "/auth/signout", {
      user_id: id,
      password: pw1,
      passwordCheck: pw2,
      company_name: comName,
      email: email,
      isCheck: true,
    })
    .then((res) => cb(res.data.success, res))
    .catch((err) => cb(err.response.data.success, err));
};

const sendEmail = (email, name, cb) => {
  axios
    .post(baseUrl + "/auth/create-auth", {
      email: email,
      name: name,
    })
    .then((res) => cb(res.data.success, res))
    .catch((err) => cb(err.response.data.success, err));
};
export { login, sendHelp, checkId, checkEmail, signUp, sendEmail };
