import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      {/* Top Links */}
      <div className="text-sm text-gray-700 text-center py-3 border-b border-gray-300">
        <span className="mx-2 cursor-pointer hover:underline">Privacy Policy</span> |
        <span className="mx-2 cursor-pointer hover:underline">Refund Policy</span> |
        <span className="mx-2 cursor-pointer hover:underline">Terms & Conditions</span> |
        <span className="mx-2 cursor-pointer hover:underline">About</span> |
        <span className="mx-2 cursor-pointer hover:underline">Careers</span> |
        <span className="mx-2 cursor-pointer hover:underline">Contact Us</span>
        <p className="mt-1">Copyright © 2025 Khatima 11 Inc. All Rights Reserved.</p>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#0b0c36] text-white px-6 sm:px-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo + Description */}
        <div>
          <img src="/logo.png" alt="Khatima 11" className="h-10 mb-4" />
          <p className="text-sm leading-relaxed text-gray-300">
            Welcome to world’s no.1 most realistic fantasy sports platform. Fantasy is a game of skill and Khatima 11 is the only platform where you can play Online Draft / Auction, Salary Cap Fantasy, Head-2-Head Leagues, Customized leagues and Prediction Leagues. <br /><br />
            We offer fantasy leagues in IPL, EPL, ISL, BBL, Pro Kabaddi and more. You can also watch live scores, create private leagues, and challenge your friends.
          </p>
        </div>

        {/* Social + App Icons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <img src="/app1.jpg" alt="Android" className="h-6" />
          <img src="/app2.jpg" alt="iOS" className="h-6" />
          <img src="/app3.jpg" alt="YouTube" className="h-6" />
          <img src="/app4.jpg" alt="Facebook" className="h-6" />
          <img src="/app5.jpg" alt="Twitter" className="h-6" />
          <img src="/app6.jpg" alt="Cricket" className="h-6" />
          <img src="/app7.jpg" alt="Soccer" className="h-6" />
          <img src="/visa.png" alt="Visa" className="h-6" />
          <img src="/mastercard.png" alt="MasterCard" className="h-6" />
        </div>

        {/* FSTA Badge */}
        <div className="flex justify-center md:justify-end">
          <img src="/fsta.png" alt="FSTA Badge" className="h-20" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
