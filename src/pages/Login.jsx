import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";
import { setupRecaptcha } from "../firebase"; // Firebase OTP setup function

const Login = () => {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  // Function to handle OTP Send (Continue)
  const handleContinue = async (e) => {
    e.preventDefault();
    try {
      if (mobile.length === 10) {
        await setupRecaptcha(mobile); // Call Firebase OTP function
        alert("OTP sent successfully");
        navigate("/verify", { state: { mobile } }); // Navigate to OTP verification page
      } else {
        alert("Please enter a valid 10-digit mobile number.");
      }
    } catch (err) {
      console.error("OTP Send Error:", err);
      alert("Failed to send OTP");
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-yellow-600 via-orange-600 to-red-700">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 relative shadow-inner-right">
        <img src="/logo.png" alt="IPL" className="h-20 mb-6" />
        <form onSubmit={handleContinue} className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
          <h2 className="text-center font-semibold mb-4 text-gray-800">Login / Register</h2>
          <div className="flex items-center border rounded-md overflow-hidden mb-4 px-3 py-2 bg-blue-50">
            <Phone className="w-4 h-4 text-gray-500" />
            <input
              type="tel"
              placeholder="+91 Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="ml-2 w-full bg-transparent outline-none text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold"
          >
            Continue
          </button>
        </form>
      </div>

      {/* Invisible reCAPTCHA Container */}
      <div id="recaptcha-container"></div> {/* Invisible reCAPTCHA */}
    </div>
  );
};

export default Login;
