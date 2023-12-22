import React, { useContext, useState } from "react";
import { QuizContext } from "./Context";
import lamp from "../assets/lamp.png"
import lampDark from "../assets/lampDark.png"
import questions from "./Question";

const Quiz = ({toResultChange}) => {
  const {toQuiz,setToQuiz} = useContext(QuizContext)
  const {score,setScore} = useContext(QuizContext)
  const {toResult,setToResult} = useContext(QuizContext)
  // State to manage current question index
  const [no,setQuestionNo] = useState(0)
  console.log(questions[no].text);
  // State to manage highlighting of options
  const [ishighlight,setIsHighlight] = useState(false)
  const {isDark,setIsDark} = useContext(QuizContext)
   // Function to handle selecting options and navigating through questions
  const handleOptions = (e)=>{
    if(no<questions.length-1){
      setQuestionNo(no+1)
      console.log(e);
    }
    else{
      setToQuiz(false)
      setToResult(true)
      setQuestionNo(0)
    }    
    // Increment score if the selected option is correct
    if(e==true){
      setScore(score+1)
    }
  }

  console.log(questions[no].options);

  return (
    <div className="quiz-container">
        <div className="theme-change" onClick={()=>{
          setIsDark(!isDark) // Toggle between light and dark theme
        }}>
         {isDark?<img src={lamp} alt="" />:<img src={lampDark} alt="" />}
        </div>
        {/* Main quiz content */}
      <div className="quiz-centre-container" style={{color:`${isDark? "black":"#F9F3DE"}`}}>
        <div className="quiz-centre" style={{
          boxShadow:`${isDark?" 3px 4px 4.5px 3px rgba(0, 0, 0, 0.25)":"3px 4px 4.5px 3px #5D6165"}`,
          background:`${isDark?"rgba( 255, 255, 255, 0.45 )":"rgba( 255, 255, 255, 0.05 )"}`
        }}>
           {/* Display current question number out of total */}
          <div className="quiz-question-no">
            <span>{no+1} of {questions.length}</span>
          </div>
           {/* Display the current question */}
          <div className="quiz-question" style={{color:`${ishighlight? "red":""}`,}}>
            {questions[no].text}
          </div>
          {/* Display all options */}
          <div className="all-options">
            <div className="options-option">
              {
                questions[no].options.map((e)=>(
                  <div className="option" onClick={()=>{
                    handleOptions(e.isCorrect)
                  }} style={{
                    boxShadow:`${isDark?" 3px 4px 4.5px 3px rgba(0, 0, 0, 0.25)":"3px 4px 4.5px 3px #5D6165"}`
                  }}>
                  {e.text}
                </div>
                ))
              }
            </div>
          </div>
          {/* Toggle for highlighting options */}
          <div className="quiz-highlight">
            <div className="highlight" style={{
              backgroundColor:`${isDark? "black":"#F9F3DE"}`,
              color:`${isDark? "#F9F3DE":"black"}`,
              boxShadow:`${isDark?" 3px 4px 4.5px 3px rgba(0, 0, 0, 0.25)":"3px 4px 4.5px 3px #5D6165"}`
            }} 
            onClick={()=>{
              setIsHighlight(!ishighlight) // Toggle option highlighting
            }}
            >{ishighlight?"Un-highlight":"Highlight"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
