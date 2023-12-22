import React, { useContext } from 'react'
import lamp from "../assets/lamp.png"
import lampDark from "../assets/lampDark.png"
import { QuizContext } from './Context'
import questions from './Question'


const Result = ({toResultChange}) => {
  const {isDark,setIsDark} = useContext(QuizContext)
  const {score,setScore} = useContext(QuizContext)

    // Calculating percentage score and setting remark based on the percentage
  let percentage = (score/questions.length)*100
  let remark;
  if(percentage>=80){
    remark = "Well Done!"
  }
  else if(percentage>=40&&percentage<80){
    remark = "Can Do Better!"
  }
  else{
    remark = "You need more practice!"
    
  }
  return (
    <div className='result-container'>

        <div className="theme-change" onClick={()=>{
          setIsDark(!isDark) // Toggling between light and dark theme
        }}>
         {isDark?<img src={lamp} alt="" />:<img src={lampDark} alt="" />}
        </div>
        {/* Result section */}
        <div className="result-parent">
          <div className="result" style={{color:`${isDark? "black":"seagreen"}`}}>
            Result
          </div>
        </div>
        {/* Report section displaying score details */}
        <div className="report-container">
          <div className="all-reports" style={{color:`${isDark? "#5D6165":"#F9F3DE"}`, boxShadow:`${isDark?" 3px 4px 4.5px 3px rgba(0, 0, 0, 0.25)":"3px 4px 4.5px 3px #5D6165"}`}}>
            <div className="remark">
              {remark}
            </div>
            <div className="percentage" style={{color:`${isDark? "black":"crimson"}`}}>
              Your Score is {percentage}%
            </div>
            <div className="all-remarks">
              <div className="report">
                <div className="report-text">
                  Total no of questions
                </div>
                <div className="report-no">
                  {questions.length}
                </div>
              </div>

              <div className="report">
                <div className="report-text">
                Number of attempted questions
                </div>
                <div className="report-no">
                  {questions.length}
                </div>
              </div>

              <div className="report">
                <div className="report-text">
                Number of correct answers
                </div>
                <div className="report-no">
                  {score}
                </div>
              </div>

              <div className="report">
                <div className="report-text">
                Number of wrong answers
                </div>
                <div className="report-no">
                  {questions.length - score}
                </div>
              </div>
            </div>
            <div className="all-buttons">
     
                <div className="play-again" style={{
                                backgroundColor:`${isDark? "black":"#F9F3DE"}`,
                                color:`${isDark? "#F9F3DE":"black"}`
                }} onClick={toResultChange}>
                  Restart
                </div>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Result