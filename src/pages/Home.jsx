import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundColor: "black" }}
    >
      <Navbar />
      {/* Rest of landing content here */}
      <div className="pt-28 text-center text-white">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Dream Kab Tak Dream Rahenga?{" "}
          <span className="text-yellow-400">Let's Create Memories!!!</span>
        </h1>

        <div className="mt-8">
          <button className="bg-black text-white border-2 border-white px-6 py-3 rounded shadow hover:bg-white hover:text-black font-semibold">
            SEASON LONG & DAILY MATCHES
          </button>
        </div>

        <div className="mt-12 text-lg font-semibold">
          <p>Choose Sports</p>
          <div className="flex justify-center space-x-10 mt-4">
            <div className="flex flex-col items-center">
              <img
                src="/cricket_icon.png"
                alt="Cricket"
                className="w-14 h-14 border-2 border-red-500 rounded-full p-2"
              />
              <span className="mt-2 text-white">Cricket</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/football_icon1.png"
                alt="Football"
                className="w-14 h-14 border-2 border-red-500 rounded-full p-2"
              />
              <span className="mt-2 text-white">Football</span>
            </div>
          </div>
        </div>
      </div>
      {/* Fantasy Game Modes Section */}
      <div className="mt-20 px-4 sm:px-20">
        <h2 className="text-center text-yellow-400 font-semibold mb-4">
          OFFERING FANTASY SPORTS SINCE 2011
        </h2>
        <div className="flex justify-center flex-wrap gap-8 mt-4">
          {/* Card 1 - Draft / Auction */}
          <div className="bg-gradient-to-b from-cyan-900 to-black text-white p-6 rounded-xl w-72 text-center shadow-lg">
            <img src="/draft.png" alt="Draft" className="h-10 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-1">Draft / Auction</h3>
            <p className="text-sm mb-4">Unique Players Per Team. NFL style.</p>
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded font-semibold">
              Play Now
            </button>
          </div>

          {/* Card 2 - Salary Cap */}
          <div className="bg-gradient-to-b from-cyan-900 to-black text-white p-6 rounded-xl w-72 text-center shadow-lg">
            <img
              src="/sal.png"
              alt="Salary Cap"
              className="h-10 mx-auto mb-3"
            />
            <h3 className="text-xl font-bold mb-1">Salary Cap</h3>
            <p className="text-sm mb-4">Select Team Within Budget.</p>
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded font-semibold">
              Play Now
            </button>
          </div>

          {/* Card 3 - Prediction */}
          <div className="bg-gradient-to-b from-cyan-900 to-black text-white p-6 rounded-xl w-72 text-center shadow-lg">
            <img
              src="/pred.png"
              alt="Prediction"
              className="h-10 mx-auto mb-3"
            />
            <h3 className="text-xl font-bold mb-1">Prediction</h3>
            <p className="text-sm mb-4">
              Predict Winning Team, Margin & player’s performance.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded font-semibold">
              Play Now
            </button>
          </div>
        </div>
      </div>

      {/* Fantasy Offers Section */}
      <div className="bg-white py-16 px-6 sm:px-20">
        <h2 className="text-center text-gray-800 text-xl font-semibold mb-10">
          Explore plethora of our exciting products and features
        </h2>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Fantasy Offers
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Offer Card 1 */}
            <div className="border rounded-lg p-5 bg-white shadow-sm">
              <img
                src="/offer1.png"
                alt="Multiple Formats"
                className="h-10 mb-4"
              />
              <h4 className="font-bold text-md mb-1 text-gray-800">
                Multiple Formats
              </h4>
              <p className="text-sm text-gray-600">
                Salary Cap, Draft, Auction & Prediction
              </p>
            </div>

            {/* Offer Card 2 */}
            <div className="border rounded-lg p-5 bg-white shadow-sm">
              <img
                src="/offer2.png"
                alt="League Duration"
                className="h-10 mb-4"
              />
              <h4 className="font-bold text-md mb-1 text-gray-800">
                League Duration
              </h4>
              <p className="text-sm text-gray-600">
                Tournament long, Daily & Weekly leagues
              </p>
            </div>

            {/* Offer Card 3 */}
            <div className="border rounded-lg p-5 bg-white shadow-sm">
              <img
                src="/offer3.png"
                alt="100+ Customizations"
                className="h-10 mb-4"
              />
              <h4 className="font-bold text-md mb-1 text-gray-800">
                100+ Customizations
              </h4>
              <p className="text-sm text-gray-600">
                Modify all the rules to form a unique league
              </p>
            </div>

            {/* Offer Card 4 */}
            <div className="border rounded-lg p-5 bg-white shadow-sm">
              <img
                src="/offer4.png"
                alt="Private Clubs"
                className="h-10 mb-4"
              />
              <h4 className="font-bold text-md mb-1 text-gray-800">
                Private Clubs
              </h4>
              <p className="text-sm text-gray-600">
                Play with your closed circle of friends
              </p>
            </div>

            {/* Offer Card 5 */}
            <div className="border rounded-lg p-5 bg-white shadow-sm">
              <img src="/offer5.png" alt="Your Own App" className="h-10 mb-4" />
              <h4 className="font-bold text-md mb-1 text-gray-800">
                Your Own App
              </h4>
              <p className="text-sm text-gray-600">
                Your branded custom app for your club or community
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Private League Customization Features */}
      <div className="bg-white py-16 px-6 sm:px-20">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Popular Features to Customize in your Private leagues
          </h2>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold px-4 py-2 rounded">
            Need Help ?
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature Card 1 */}
          <div className="border rounded-lg p-5 bg-white shadow-sm relative">
            <img src="/feature1.png" alt="Team Lock" className="h-8 mb-4" />
            <h4 className="font-bold mb-2 text-gray-800">Team Lock time</h4>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Choose From 0 to 90 mins</li>
              <li>Match/Day/ Round lock formats</li>
            </ul>
            <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
              New
            </span>
          </div>

          {/* Feature Card 2 */}
          <div className="border rounded-lg p-5 bg-white shadow-sm">
            <img src="/feature2.png" alt="No. Of Trades" className="h-8 mb-4" />
            <h4 className="font-bold mb-2 text-gray-800">No. Of Trades</h4>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Choose trade count, free trades etc</li>
              <li>Separate trades in playoff stage</li>
            </ul>
          </div>

          {/* Feature Card 3 */}
          <div className="border rounded-lg p-5 bg-white shadow-sm">
            <img src="/feature3.png" alt="Scoring rules" className="h-8 mb-4" />
            <h4 className="font-bold mb-2 text-gray-800">Scoring rules</h4>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Runs, Wickets, Catches, Dots etc</li>
              <li>Strike rate, economy, milestones etc</li>
            </ul>
          </div>

          {/* Feature Card 4 */}
          <div className="border rounded-lg p-5 bg-white shadow-sm">
            <img src="/feature4.png" alt="Knockout" className="h-8 mb-4" />
            <h4 className="font-bold mb-2 text-gray-800">Knockout Format</h4>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Semi Final & Final in WC</li>
              <li>IPL & NFL style playoffs</li>
            </ul>
          </div>

          {/* Feature Card 5 */}
          <div className="border rounded-lg p-5 bg-white shadow-sm relative">
            <img
              src="/feature5.png"
              alt="Custom Leaderboards"
              className="h-8 mb-4"
            />
            <h4 className="font-bold mb-2 text-gray-800">
              Custom Leaderboards
            </h4>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Orange & Purple cap, Group & Phase</li>
              <li>Trophy center and certificates</li>
            </ul>
            <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
              New
            </span>
          </div>

          {/* Feature Card 6 */}
          <div className="border rounded-lg p-5 bg-white shadow-sm">
            <img
              src="/feature6.png"
              alt="League Manager Tools"
              className="h-8 mb-4"
            />
            <h4 className="font-bold mb-2 text-gray-800">
              League Manager Tools
            </h4>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Assign fantasy points, extra trades</li>
              <li>Change teams for league members</li>
            </ul>
          </div>

          {/* Feature Card 7 */}
          <div className="border rounded-lg p-5 bg-white shadow-sm">
            <img
              src="/feature7.png"
              alt="Advance Team submission"
              className="h-8 mb-4"
            />
            <h4 className="font-bold mb-2 text-gray-800">
              Advance Team submission
            </h4>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Edit your teams for multiple matches</li>
              <li>No need to change teams daily</li>
            </ul>
          </div>

          {/* Feature Card 8 */}
          <div className="border rounded-lg p-5 bg-white shadow-sm">
            <img src="/feature8.png" alt="Salary Role" className="h-8 mb-4" />
            <h4 className="font-bold mb-2 text-gray-800">
              Player's Salary, Role and Budget
            </h4>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Set player’s salary & role</li>
              <li>Set budget or choose unlimited.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Corporate Fantasy Experience Section (with Image) */}
      <div className="bg-gradient-to-br from-[#000] to-[#1e293b] text-white px-6 sm:px-20 py-16 rounded-t-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="text-yellow-400 font-semibold mb-2">
              FOR IPL & WORLD CUP
            </p>
            <h2 className="text-3xl font-bold mb-4">
              Corporate Fantasy Experience
            </h2>
            <p className="text-md text-gray-300 mb-6 leading-relaxed">
              Aimed for Corporate, Event Management Firms, Institutions,
              Organizations etc, to experience a completely customizable fantasy
              sports product, furthermore, celebrity engagements, team building
              events, zoom sessions, quizzes and many other interactive
              contests.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded">
              Know More
            </button>
          </div>

          {/* Right Image Block */}
          <div className="flex justify-center">
            <img
              src="/partners.jpg"
              alt="Corporate Fantasy"
              className="rounded-xl w-full max-w-md shadow-lg"
            />
          </div>
        </div>

        {/* Customers Logos */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Serving 200+ Customers
          </h3>
          <div className="flex flex-wrap gap-4">
            <img
              src="/partner1.png"
              alt="YPO"
              className="h-12 bg-white rounded-md p-2"
            />
            <img
              src="/partner2.png"
              alt="V2 Solutions"
              className="h-12 bg-white rounded-md p-2"
            />
            <img
              src="/partner3.png"
              alt="Applied Materials"
              className="h-12 bg-white rounded-md p-2"
            />
            <img
              src="/partner4.png"
              alt="Moengage"
              className="h-12 bg-white rounded-md p-2"
            />
            <img
              src="/partner5.png"
              alt="Microsoft"
              className="h-12 bg-white rounded-md p-2"
            />
            <img
              src="/partner6.png"
              alt="Siemens"
              className="h-12 bg-white rounded-md p-2"
            />
          </div>
        </div>
      </div>

      {/* Local Cricket Tournament Experience Section */}
      <div className="bg-gradient-to-br from-[#000] to-[#1e293b] text-white px-6 sm:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Fantasy Experience For Local Cricket Tournaments
            </h2>
            <p className="text-md text-grey-300 mb-6 leading-relaxed">
              Aimed for clubs, communities, etc, to experience a completely
              customizable fantasy sports product and auction event.
            </p>
            <ul className="list-disc pl-5 text-sm text-grey-300 space-y-2 mb-6">
              <li>Live physical auction with a seasoned auctioneer</li>
              <li>Customize 200+ rules in fantasy league</li>
              <li>Your custom made website, android & iOS app</li>
              <li>Live player ranking, Analyse stats and award trophies</li>
            </ul>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded">
              Get Quote
            </button>
          </div>

          {/* Right Side Image Block */}
          <div>
            <div className="bg-cyan-700 rounded-lg p-2 shadow-lg">
              <img
                src="/bni.jpg"
                alt="Live Auction"
                className="rounded-md w-full"
              />
              <div className="flex justify-center mt-3 gap-3">
                <img
                  src="/bni2.jpg"
                  alt="Thumb 2"
                  className="h-14 rounded-md"
                />
                <img
                  src="/bni3.jpg"
                  alt="Thumb 3"
                  className="h-14 rounded-md"
                />
                <img
                  src="/bni4.jpg"
                  alt="Thumb 4"
                  className="h-14 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Customers Logos */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Serving 200+ Customers
          </h3>
          <div className="flex flex-wrap gap-4">
            <img
              src="/tour1.png"
              alt="UCC"
              className="h-12 bg-white rounded-md p-2"
            />
            <img
              src="/tour2.png"
              alt="BNI"
              className="h-12 bg-white rounded-md p-2"
            />
            <img
              src="/tour3.png"
              alt="Jain League"
              className="h-12 bg-white rounded-md p-2"
            />
            <img
              src="/tour4.png"
              alt="UCC Super Series"
              className="h-12 bg-white rounded-md p-2"
            />
            <img
              src="/tour5.png"
              alt="Mumbai Games"
              className="h-12 bg-white rounded-md p-2"
            />
            <img
              src="/tour6.png"
              alt="GTCC"
              className="h-12 bg-white rounded-md p-2"
            />
          </div>
        </div>
      </div>

      {/* Celebrity Challenge Section */}
      <div className="bg-white px-6 sm:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
          {/* Celebrities List */}
          <div className="lg:col-span-4 flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-r from-white to-gray-50 rounded-lg p-4 shadow-md text-center w-48 transition-transform transform hover:-translate-y-1 hover:shadow-xl duration-300">

              <img
                src="/photo1.jpg"
                alt="Pragyan Ojha"
                className="w-20 h-20 rounded-full border-4 border-red-500 mx-auto mb-3 object-cover"
              />
              <h3 className="font-bold text-purple-800">Pragyan Ojha</h3>
              <p className="text-sm text-gray-600">International Cricketer</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-r from-white to-gray-50 rounded-lg p-4 shadow-md text-center w-48 transition-transform transform hover:-translate-y-1 hover:shadow-xl duration-300">

              <img
                src="/photo2.jpg"
                alt="Sushma Verma"
                className="w-20 h-20 rounded-full border-4 border-red-500 mx-auto mb-3 object-cover"
              />
              <h3 className="font-bold text-purple-800">Sushma Verma</h3>
              <p className="text-sm text-gray-600">Indian wicket-keeper</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-r from-white to-gray-50 rounded-lg p-4 shadow-md text-center w-48 transition-transform transform hover:-translate-y-1 hover:shadow-xl duration-300">

              <img
                src="/photo3.jpg"
                alt="Atul Wassan"
                className="w-20 h-20 rounded-full border-4 border-red-500 mx-auto mb-3 object-cover"
              />
              <h3 className="font-bold text-purple-800">Atul Wassan</h3>
              <p className="text-sm text-gray-600">Cricket Commentator</p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-r from-white to-gray-50 rounded-lg p-4 shadow-md text-center w-48 transition-transform transform hover:-translate-y-1 hover:shadow-xl duration-300">

              <img
                src="/photo4.jpg"
                alt="Hardy Sandhu"
                className="w-20 h-20 rounded-full border-4 border-blue-500 mx-auto mb-3 object-cover"
              />
              <h3 className="font-bold text-purple-800">Hardy Sandhu</h3>
              <p className="text-sm text-gray-600">Indian singer and actor</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center lg:text-left mt-10 lg:mt-0">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Come and Beat Celebrity's Team
            </h2>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-semibold rounded shadow">
              Play Challenge
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Home;
