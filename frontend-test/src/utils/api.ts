import axios from "axios";

const BASE_URL = "http://4.224.186.213/evaluation-service";

export const registerUser = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/register`, data);
  return res.data;
};

export const authenticate = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/auth`, data);
  return res.data;
};
