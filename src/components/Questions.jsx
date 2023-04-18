import { useState, useEffect } from "react";

const Questions = ({ quizQuestions }) => {
  const [numQuestion, setNumQuestion] = useState(0);
  const [answers, setAnswers] = useState(0);

  const submitAnswer = (index) => {
    setNumQuestion(numQuestion + 1);
    console.log("numQuestion" + numQuestion);
    if (quizQuestions[numQuestion].options[index].isCorrect === true) {
      setAnswers(answers + 1);
      console.log(answers);
    }
  };

  return (
    <div className="w-4/5 h-3/4 md:w-1/2 md:h-1/2 bg-zinc-800 rounded-xl m-auto flex flex-col md:flex-row">
      {/* Desde aca va el conditional rendering */}
      {numQuestion < quizQuestions.length ? (
        <>
          <div className="md:w-1/2 mx-4 text-center mt-6">
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
              className="mx-auto mt-4 w-1/4 md:w-2/3 md:h-1/2"
            />
          </div>
          <div className="w-full md:w-1/2 my-auto">
            <ul className="w-full flex flex-col gap-4 text-center my-auto">
              {quizQuestions[numQuestion].options.map((option, index) => (
                <li className="text-white text-xl" key={index}>
                  <button
                    className="py-2 w-3/4 border-2 rounded-xl hover:bg-gray-600 focus:animate-pulse focus:bg-blue-500"
                    onClick={() => submitAnswer(index)}
                  >
                    {option.answerText}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-white text-4xl md:text-5xl">
            Congrats! you finished the game 🥳
          </h2>
          <p className="text-3xl mt-4 text-blue-400 font-bold">
            Respondiste bien {answers} de {numQuestion} preguntas!
          </p>
        </div>
      )}

      {/* Aca acaba el CR */}
    </div>
  );
};

export default Questions;
