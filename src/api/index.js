import axios from "axios";

const baseUrl =
  "http://ec2-15-165-5-112.ap-northeast-2.compute.amazonaws.com:3000";

const login = (id, pw, cb) => {
  axios
    .post(baseUrl + "/auth/login", {
      id: id,
      password: pw,
    })
    .then((res) => cb(res.data))
    .catch((err) => console.log(err));
};

const checkId = (id, cb) => {
  axios
    .post(baseUrl + "/auth", {
      type: "id",
      val: id,
    })
    .then((res) => cb(res))
    .catch((err) => console.log(err));
};

const checkEmail = (email, cb) => {
  axios
    .post(baseUrl + "/auth", {
      type: "email",
      val: email,
    })
    .then((res) => cb(res))
    .catch((err) => console.log(err));
};

const signUp = (id, pw1, pw2, comName, email, cb) => {
  axios
    .post(baseUrl + "/auth/signup", {
      user_id: id,
      password: pw1,
      passwordCheck: pw2,
      company_name: comName,
      email: email,
      isCheck: true,
    })
    .then((res) => cb(res))
    .catch((err) => console.log(err));
};
export { login, checkId, checkEmail, signUp };
