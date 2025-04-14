import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp } from "../api";  // Assuming verifyOtp is in api.js

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const mobile = location.state?.mobile;

  // Function to handle OTP verification
  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await verifyOtp(mobile, otp);
      alert("OTP Verified ✅");
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid OTP ❌");
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-yellow-600 via-orange-600 to-red-700">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 relative shadow-inner-right">
        <img src="/logo.png" alt="IPL" className="h-20 mb-6" />
        <form
          onSubmit={handleVerify}
          className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm"
        >
          <h2 className="text-center font-semibold mb-4 text-gray-800">Enter OTP</h2>
          <div className="flex items-center border rounded-md overflow-hidden mb-4 px-3 py-2 bg-blue-50">
            <input
              type="text"
              placeholder="Enter 4-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold"
          >
            Verify OTP
          </button>
          <p className="text-xs text-center text-gray-500 mt-3">
            OTP sent to <span className="font-medium">{mobile}</span>
          </p>
        </form>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-700 items-center justify-center relative">
        <div className="text-white text-center px-6">
          <img src="/ipl2025.webp" alt="TATA IPL" className="h-20 mx-auto mb-6" />
          <h1 className="text-3xl font-semibold">WELCOME TO THE OFFICIAL</h1>
          <h2 className="text-2xl font-bold mt-2">TATA IPL</h2>
          <h3 className="text-2xl font-bold mt-1">2025 FANTASY GAME</h3>
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;
