import { useState, useEffect } from "react";

const Questions = ({ quizQuestions }) => {
  const [numQuestion, setNumQuestion] = useState(0);
  const [answers, setAnswers] = useState(0);

  const submitAnswer = (index) => {
    if (quizQuestions[numQuestion].options[index].isCorrect === true) {
      setAnswers(answers + 1);
    }
    setNumQuestion(numQuestion + 1);
  };

  return (
    <div className="w-4/5 h-full my-28 mx-auto md:m-auto md:w-1/2 md:h-1/2 bg-zinc-800 rounded-xl flex flex-col md:flex-row">
      {/* Desde aca va el conditional rendering */}
      {numQuestion < quizQuestions.length ? (
        <>
          <div className="w-full md:w-1/2 text-center mt-6">
            <h2 className="text-white text-4xl md:text-5xl">
              Question {numQuestion + 1}/
              <span className="text-2xl md:text-3xl">4</span>
            </h2>
            <p className=" text-xl mt-4 text-blue-400 font-bold">
              {quizQuestions[numQuestion].questionText}
            </p>
            <img
              src={quizQuestions[numQuestion].img}
              alt="question"
              className="mx-auto mt-4 w-3/4 md:w-2/3 md:h-1/2 rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 my-auto">
            <ul className="w-full flex flex-col gap-4 text-center my-auto">
              {quizQuestions[numQuestion].options.map((option, index) => (
                <li className="text-white text-xl" key={index}>
                  <button
                    className="py-2 w-3/4 border-2 rounded-md hover:bg-gray-600 focus:animate-pulse focus:bg-blue-500"
                    onClick={() => submitAnswer(index)}
                  >
                    {option.answerText}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : answers === 4 ? (
        <div className="flex items-center justify-center flex-grow flex-col">
          <div className="w-4/5">
            <h2 className="text-white text-center text-3xl md:text-5xl">
              ¡Awesome job! You nailed it! 🎉
            </h2>
          </div>
          <div>
            <p className="text-2xl mt-4 text-center text-blue-400 font-bold">
              You answered <span className="text-white">{answers}</span> out of{" "}
              <span className="text-white">{quizQuestions.length}</span>{" "}
              questions correctly! ⭐
            </p>
          </div>
        </div>
      ) : answers === 0 ? (
        <div className="flex items-center justify-center flex-grow flex-col">
          <div className="w-4/5">
            <h2 className="text-white text-center text-3xl md:text-4xl">
              It seems like your answers are from an alternate universe. Keep
              trying, you'll get it in the next attempt! 😅
            </h2>
          </div>
          <div>
            <p className="text-2xl mt-4 text-center text-blue-400 font-bold">
              You answered <span className="text-white">{answers}</span> out of{" "}
              <span className="text-white">{quizQuestions.length}</span>{" "}
              questions correctly! ⭐
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-grow flex-col">
          <div className="w-4/5">
            <h2 className="text-white text-center text-3xl md:text-4xl">
              Congrats! you finished the game 🥳
            </h2>
          </div>
          <div>
            <p className="text-2xl mt-4 text-center text-blue-400 font-bold">
              You answered <span className="text-white">{answers}</span> out of{" "}
              <span className="text-white">{quizQuestions.length}</span>{" "}
              questions correctly! ⭐
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;
