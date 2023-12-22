import React, { createContext, useState } from 'react'

export const QuizContext = createContext()

const Context = ({children}) => {

  const [toHome,setToHome] = useState(true)
  const [toQuiz,setToQuiz] = useState(false)
  const [toResult,setToResult] = useState(false)
  const [isDark , setIsDark] = useState(true)
  const [score,setScore] = useState(0)

  return (
    <QuizContext.Provider value={{isDark,setIsDark,toHome,setToHome,toQuiz,setToQuiz,toResult,setToResult,score,setScore}}>
      {children}
    </QuizContext.Provider>
  )
}

export default Context