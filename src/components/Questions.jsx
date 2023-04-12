import { useState } from "react";

const Questions = ({ quizQuestions }) => {
  const [numQuestion, setNumQuestion] = useState(1);

  const submitAnswer = () => {};

  return (
    <div className="w-4/5 h-3/4 md:w-1/2 md:h-1/2 bg-zinc-800 rounded-xl m-auto flex flex-col md:flex-row">
      <div className="md:w-1/2 mx-4 text-center mt-6">
        <h2 className="text-white text-4xl md:text-5xl">
          Question {numQuestion}/<span className="text-2xl md:text-3xl">4</span>
        </h2>
        <p className=" text-xl mt-4 text-blue-400 font-bold">
          {quizQuestions[0].questionText}
        </p>
        <img
          src={quizQuestions[0].img}
          alt="tesla"
          className="mx-auto mt-4 w-1/4 md:w-1/3"
        />
      </div>
      <div className="w-full md:w-1/2 my-auto">
        <ul className="w-full flex flex-col gap-4 text-center my-auto">
          <li className="text-white text-xl">
            <button className="py-2 w-3/4 border-2 rounded-xl hover:bg-gray-600 focus:animate-pulse focus:bg-blue-500">
              {quizQuestions[0].options[0].answerText}
            </button>
          </li>
          <li className="text-white text-xl">
            <button className="py-2 w-3/4 border-2 rounded-xl hover:bg-gray-600 focus:animate-pulse focus:bg-blue-500">
              {quizQuestions[0].options[1].answerText}
            </button>
          </li>
          <li className="text-white text-xl">
            <button className="py-2 w-3/4 border-2 rounded-xl hover:bg-gray-600 focus:animate-pulse focus:bg-blue-500">
              {quizQuestions[0].options[2].answerText}
            </button>
          </li>
          <li className="text-white text-xl">
            <button className="py-2 w-3/4 border-2 rounded-xl hover:bg-gray-600 focus:animate-pulse focus:bg-blue-500">
              {quizQuestions[0].options[3].answerText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Questions;
