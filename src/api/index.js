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

export { login };
