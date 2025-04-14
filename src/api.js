import axios from "axios";

const BASE_URL = "http://localhost:8080/api/otp";

export const sendOtp = (mobile) => {
  return axios.post(`${BASE_URL}/send`, { mobile });
};

export const verifyOtp = (mobile, otp) => {
  return axios.post(`${BASE_URL}/verify`, { mobile, otp });
};
// Resend OTP
export const resendOtp = (mobile) => {
  return axios.post('http://localhost:8080/api/otp/resend', { mobile });
};