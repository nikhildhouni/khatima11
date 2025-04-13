import React, { useState } from "react";
import { Phone } from "lucide-react"; // for mobile icon
import Footer from "../components/Footer";

const Login = () => {
  const [mobile, setMobile] = useState("");

  const handleContinue = (e) => {
    e.preventDefault();
    console.log("Mobile submitted:", mobile);
    // redirect to OTP or next step
  };

  return (
<div className="flex h-screen bg-gradient-to-r from-yellow-600 via-orange-600 to-red-700">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 relative shadow-inner-right">
        <img src="/logo.png" alt="IPL" className="h-25 mb-6" />

        <form
          onSubmit={handleContinue}
          className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm"
        >
          <h2 className="text-center font-semibold mb-4 text-gray-800">
            Login / Register
          </h2>

          {/* Input field */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold"
          >
            Continue
          </button>

          {/* Terms */}
          <p className="text-xs text-center text-gray-500 mt-3">
            By continuing, you accept our{" "}
            <span className="underline cursor-pointer">terms of service</span> and{" "}
            <span className="underline cursor-pointer">privacy policy</span>.
          </p>
        </form>
      </div>

      {/* Right Section - Banner */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-70 items-center justify-center relative">
        <div className="text-white text-center px-6">
          <img src="/ipl2025.webp" alt="TATA IPL" className="h-25 mx-auto mb-6" />
          <h1 className="text-3xl font-semibold">WELCOME TO THE OFFICIAL</h1>
          <h2 className="text-2xl font-bold mt-2">TATA IPL</h2>
          <h3 className="text-2xl font-bold mt-1">2025 FANTASY GAME</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
