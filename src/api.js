// api.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/otp";

// Function to send OTP (calls backend API)
export const sendOtp = (mobile) => {
  return axios.post(`${BASE_URL}/send`, { mobile });
};

// Function to verify OTP (calls backend API)
export const verifyOtp = (mobile, otp) => {
  return axios.post(`${BASE_URL}/verify`, { mobile, otp });
};
