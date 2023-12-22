import { useContext } from 'react'
import './App.css'
import Home from './components/Home'
import { QuizContext } from './components/Context'
import Quiz from './components/Quiz'
import Result from './components/Result'


function App() {

    // Accessing various states and functions from QuizContext
  const {isDark,setIsdark} = useContext(QuizContext)
  const {toHome,setToHome} = useContext(QuizContext)
  const {toQuiz,setToQuiz} = useContext(QuizContext)
  const {toResult,setToResult} = useContext(QuizContext)
  const {score,setScore} = useContext(QuizContext)

  // Function to handle starting the quiz
  const handleStart = ()=>{
    setToHome(false)
    setToQuiz(true)
  }

    // Function to handle transitioning back to the home screen from the result and resetting score
  const toResultChange = ()=>{
    setToHome(true)
    setToResult(false)
    setScore(0)
  }
  return (
    <div style={{background:`${isDark?"linear-gradient(180deg, #FAF3DD 0%, #E7E7E7 100%)":"linear-gradient(180deg, #0a0a0a 0%, #1E1D1C 100%)"}`}}>

    {/* Conditionally rendering components based on state */}
    {toHome && <Home handleStart={handleStart} />}
    {toQuiz && <Quiz />}
    {toResult && <Result toResultChange={toResultChange}/>}
   
    </div>
  )
}

export default App
