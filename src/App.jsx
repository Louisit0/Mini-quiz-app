import { useState } from "react";
import Questions from "./components/Questions";
import "./App.css";

function App() {
  const quizQuestions = [
    {
      id: 1,
      questionText: "Who is the CEO of Tesla?",
      options: [
        {
          answerText: "Jeff Bezos",
          isCorrect: false,
        },
        {
          answerText: "Mark Zuckerberk",
          isCorrect: false,
        },
        {
          answerText: "Elon Musk",
          isCorrect: true,
        },
        {
          answerText: "Leo Messi",
          isCorrect: false,
        },
      ],
      img: "https://logodownload.org/wp-content/uploads/2020/07/tesla-logo.png",
    },
    {
      id: 2,
      questionText: "What is the capital of Australia?",
      options: [
        {
          answerText: "Sydney",
          isCorrect: false,
        },
        {
          answerText: "Melbourne",
          isCorrect: false,
        },
        {
          answerText: "Canberra",
          isCorrect: true,
        },
        {
          answerText: "Brisbane",
          isCorrect: false,
        },
      ],
      img: "https://logodownload.org/wp-content/uploads/2020/07/tesla-logo.png",
    },
    {
      id: 3,
      questionText: "Who is the author of 'The Catcher in the Rye'?",
      options: [
        {
          answerText: "J.K. Rowling",
          isCorrect: false,
        },
        {
          answerText: "J.D. Salinger",
          isCorrect: true,
        },
        {
          answerText: "Ernest Hemingway",
          isCorrect: false,
        },
        {
          answerText: "F. Scott Fitzgerald",
          isCorrect: false,
        },
      ],
      img: "https://logodownload.org/wp-content/uploads/2020/07/tesla-logo.png",
    },
    {
      id: 4,
      questionText: "What is the tallest mountain in the world?",
      options: [
        {
          answerText: "K2",
          isCorrect: false,
        },
        {
          answerText: "Mount Everest",
          isCorrect: true,
        },
        {
          answerText: "Kilimanjaro",
          isCorrect: false,
        },
        {
          answerText: "Denali",
          isCorrect: false,
        },
      ],
      img: "https://logodownload.org/wp-content/uploads/2020/07/tesla-logo.png",
    },
  ];

  return (
    <main className="h-screen w-full bg-blue-200 flex flex-col">
      <Questions quizQuestions={quizQuestions} />
    </main>
  );
}

export default App;
