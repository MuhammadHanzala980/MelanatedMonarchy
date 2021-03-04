import axios from "axios";
const request = async ({ route, method, payload, params }) => {
  const myToken = JSON.parse(localStorage.getItem("__user_token__"));

  const token = `Bearer ${myToken}`;
  method = method;
  const headers = {
    Accept: "application/json",
    Authorization: token,
  };
  return axios({
    data: payload,
    url: `https://melanatedmonarchy.com/${route}`,
    method,
    headers,
    params,
  });
};

export default request;
