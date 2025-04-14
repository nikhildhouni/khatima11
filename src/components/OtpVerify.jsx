import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp } from "../firebase";  // Firebase OTP verification function

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const mobile = location.state?.mobile;

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await verifyOtp(otp); // Verify OTP using Firebase function
      alert("OTP Verified ✅");
      navigate("/dashboard");  // Navigate to dashboard or home
    } catch (err) {
      alert("Invalid OTP ❌");
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-yellow-600 via-orange-600 to-red-700">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 relative shadow-inner-right">
        <img src="/logo.png" alt="IPL" className="h-20 mb-6" />
        <form onSubmit={handleVerify} className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
          <h2 className="text-center font-semibold mb-4 text-gray-800">Enter OTP</h2>
          <div className="flex items-center border rounded-md overflow-hidden mb-4 px-3 py-2 bg-blue-50">
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
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
        </form>
      </div>
    </div>
  );
};

export default OtpVerify;
