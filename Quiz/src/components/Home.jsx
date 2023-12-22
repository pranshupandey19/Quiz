import React, { useContext } from "react";
import { QuizContext } from "./Context";
import lamp from "../assets/lamp.png";
import lampDark from "../assets/lampDark.png";
const Home = ({ handleStart }) => {
  // Using useContext to access isDark state and setIsDark function from QuizContext
  const { isDark, setIsDark } = useContext(QuizContext); 
  return (
    <div className="home-container">
      {/* Theme change toggle */}
      <div
        className="theme-change"
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
         {/* Displaying different lamp icons based on the current theme */}
        {isDark ? <img src={lamp} alt="" /> : <img src={lampDark} alt="" />}
      </div>

        {/* Home page main container */}
      <div className="home-centre-container" onClick={handleStart}>
        
        <div
          className="home-quiz"
          style={{
            color: `${isDark ? "black" : "#F9F3DE"}`,
          }}
        >
          QuizWhiz
        </div>
        <div
          className="home-play"
          style={{
            color: `${isDark ? "#5D6165" : "#F9F3DE"}`,
          }}
        >
          Click anywhere to start
        </div>
      </div>
    </div>
  );
};

export default Home;
