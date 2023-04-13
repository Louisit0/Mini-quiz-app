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
      img: "https://electrek.co/wp-content/uploads/sites/3/2021/05/Tesla-Logo-Hero.jpg?quality=82&strip=all&w=1024",
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
      img: "https://a.cdn-hotels.com/gdcs/production0/d1645/0c67ff64-cf54-4886-91dd-89aa601463af.jpg",
    },
    {
      id: 3,
      questionText: "Who is the author of 'Harry Potter'?",
      options: [
        {
          answerText: "F. Scott Fitzgerald",
          isCorrect: false,
        },
        {
          answerText: "J.D. Salinger",
          isCorrect: false,
        },
        {
          answerText: "Ernest Hemingway",
          isCorrect: false,
        },
        {
          answerText: "J.K. Rowling",
          isCorrect: true,
        },
      ],
      img: "https://www.tribunadesanluis.com.mx/gossip/toyc1z-harry-potter/ALTERNATES/LANDSCAPE_1140/harry%20potter",
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
      img: "https://media.architecturaldigest.com/photos/5af30475c29da93330bbfe90/16:9/w_2560%2Cc_limit/GettyImages-478627080.jpg",
    },
  ];

  return (
    <main className="h-screen w-full bg-blue-200 flex flex-col">
      <Questions quizQuestions={quizQuestions} />
    </main>
  );
}

export default App;
