const questions = [
  {
    text: "What is ReactJS?",
    options: [
      { id: 0, text: "Server side framework", isCorrect: false },
      { id: 1, text: "user interface framework", isCorrect: true },
      { id: 2, text: "both a and b", isCorrect: false },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
  },
  {
    text: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      { id: 0, text: "It refers to the current function.", isCorrect: false },
      { id: 1, text: "It refers to the parent function.", isCorrect: false },
      { id: 2, text: "It refers to the object it belongs to when used in a method.", isCorrect: true },
      { id: 3, text: "It refers to the global object.", isCorrect: false },
    ],
  },
  {
    text: "What is a state in React?",
    options: [
      { id: 0, text: "A permanent storage.", isCorrect: false },
      { id: 1, text: "Internal storage of the component.", isCorrect: true },
      { id: 2, text: "External storage of the component.", isCorrect: false },
      { id: 3, text: "None of the above.", isCorrect: false },
    ],
  },
  {
    text: "What is the return value of the useState hook?",
    options: [
      { id: 0, text: " Pair of current state and function updating it", isCorrect: true },
      { id: 1, text: "Current State", isCorrect: false },
      { id: 2, text: "Function updating the current state", isCorrect: false },
      { id: 3, text: "UseState returns nothing", isCorrect: false },
    ],
  },
  {
    text: "What is the virtual DOM in React?",
    options: [
      { id: 0, text: "A lightweight version of the browsers DOM.", isCorrect: false },
      { id: 1, text: "A way to optimize React components by skipping the actual DOM operations.", isCorrect: true },
      { id: 2, text: "A replacement for HTML.", isCorrect: false },
      { id: 3, text: "A module to handle routing in React applications.", isCorrect: false },
    ],
  },
  {
    text: "What are props in React?",
    options: [
      { id: 0, text: "Properties that are immutable.", isCorrect: false },
      { id: 1, text: "Properties that are mutable.", isCorrect: false },
      { id: 2, text: "Properties used for passing data from parent to child components.", isCorrect: true },
      { id: 3, text: "Properties used for passing data from child to parent components.", isCorrect: false },
    ],
  },
  {
    text: "What is JSX in React?",
    options: [
      { id: 0, text: "JavaScript Syntax Extension", isCorrect: true },
      { id: 1, text: "JavaScript XML", isCorrect: false },
      { id: 2, text: "JavaScript Extension Library", isCorrect: false },
      { id: 3, text: "JavaScript XML Syntax", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of React Router?",
    options: [
      { id: 0, text: "To perform data fetching in React applications.", isCorrect: false },
      { id: 1, text: "To manage state in React applications.", isCorrect: false },
      { id: 2, text: "To handle navigation and routing in React applications.", isCorrect: true },
      { id: 3, text: "To manage side effects in React applications.", isCorrect: false },
    ],
  },
  {
    text: "What is the return value of the useState hook?",
    options: [
      { id: 0, text: " Pair of current state and function updating it", isCorrect: true },
      { id: 1, text: "Current State", isCorrect: false },
      { id: 2, text: "Function updating the current state", isCorrect: false },
      { id: 3, text: "UseState returns nothing", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of the useEffect hook in React?",
    options: [
      { id: 0, text: "To perform animations in React components.", isCorrect: false },
      { id: 1, text: "To manage form data in React applications.", isCorrect: false },
      { id: 2, text: "To handle side effects in functional components.", isCorrect: true },
      { id: 3, text: "To manage state in functional components.", isCorrect: false },
    ],
  },
];

export default questions;
