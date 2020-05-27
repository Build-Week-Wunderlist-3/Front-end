import axios from "axios";

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios.create({
    baseURL: "https://bw-wunderlist-3.herokuapp.com",
    headers: {
      Authorization: token,
    },
  });
};
