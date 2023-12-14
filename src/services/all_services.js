import baseURL from "../constants/baseURL";
import axiosInstance from "./axios";

const signUpUser = async (data) => {
  return axiosInstance.post(baseURL + "/authentication/signup", data);
};

const loginUser = async (data) => {
  console.log(data);
  return axiosInstance.post(baseURL + "/authentication/signin", data);
};
const addtTxn = async (data) => {
  console.log(data);
  return axiosInstance.post(baseURL + "/payment/process-payment", data);
};
const addUPI = async (data) => {
  console.log(data);
  return axiosInstance.post(baseURL + "/fraudulent/add-fraudulent-upi", data);
};

const commonService = {
  signUpUser,
  addtTxn,
  loginUser,
  addUPI,
};

export default commonService;
