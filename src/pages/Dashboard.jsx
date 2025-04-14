import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="bg-white shadow-xl rounded-xl p-10 text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Welcome!</h1>
        <p className="text-gray-700 text-lg">OTP Verified Successfully</p>
        <p className="text-sm text-gray-500 mt-2">You are now in the Dashboard page.</p>
      </div>
    </div>
  );
};

export default Dashboard;
