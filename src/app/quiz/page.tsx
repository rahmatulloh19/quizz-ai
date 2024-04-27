"use client";

import { ProgressBar, QuizSubmission, ResultCard } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { ChevronLeft, X } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    questionText: "What is  React ?",
    answers: [
      {
        id: 1,
        answerText: "A front-end framework",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: "A back-end framework",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: "A database",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: "A programming language",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "What is JSX ?",
    answers: [
      {
        id: 1,
        answerText: "A front-end framework",
        isCorrect: false,
      },
      {
        id: 2,
        answerText: "A back-end framework",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: "A database",
        isCorrect: true,
      },
      {
        id: 4,
        answerText: "A programming language",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Something",
    answers: [
      {
        id: 1,
        answerText: "A front-end framework",
        isCorrect: false,
      },
      {
        id: 2,
        answerText: "A back-end framework",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: "A database",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: "A programming language",
        isCorrect: true,
      },
    ],
  },
];

type TypeHandleAnswer = {
  id: number;
  isCorrect: boolean;
};

export default function Home() {
  const [started, setStarted] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleNext = () => {
    if (!started) {
      setStarted(true);
      return;
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setSubmitted(true);
    }

    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleAnswer = (answer: TypeHandleAnswer) => {
    setSelectedAnswer(answer.id);
    const isCurrentCorrect = answer.isCorrect;
    if (currentQuestionIndex >= score && isCurrentCorrect) {
      setScore(score + 1);
    }
    setIsCorrect(isCurrentCorrect);
  };

  const scorePercentage: number = Math.round(score / questions.length) * 100;

  if (submitted) {
    return (
      <QuizSubmission
        score={score}
        scorePercentage={scorePercentage}
        totalQuestions={questions.length}
      />
    );
  }

  return (
    <div className="flex flex-col flex-1 max-w-96 w-full m-auto h-screen gap-6">
      <header className="sticky top-0 z-10 shadow-md w-full py-4 grid grid-cols-[auto,1fr,auto] grid-flow-col items-center justify-between gap-2">
        <Button
          size="icon"
          variant="outline"
        >
          <ChevronLeft />
        </Button>
        <ProgressBar value={(currentQuestionIndex / questions.length) * 100} />
        <Button
          size="icon"
          variant="outline"
        >
          <X />
        </Button>
      </header>
      <main className="flex justify-center flex-1">
        {!started ? (
          <h1 className="text-3xl font-bold">Hello World👋</h1>
        ) : (
          <div>
            <h2 className="text-3xl font-bold">{questions[currentQuestionIndex].questionText}</h2>
            <ul className="grid grid-cols-1 gap-6 mt-6">
              {questions[currentQuestionIndex].answers.map((answer) => {
                const variant =
                  selectedAnswer === answer.id
                    ? answer.isCorrect
                      ? "neoSuccess"
                      : "neoDanger"
                    : "neoOutline";

                return (
                  <li key={answer.id}>
                    <Button
                      variant={variant}
                      size={"xl"}
                      onClick={() => handleAnswer(answer)}
                    >
                      {answer.answerText}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </main>
      <footer className="footer pb-9 px-6 relative mb-0">
        <ResultCard
          correctAnswer={
            questions[currentQuestionIndex].answers.find((answer) => answer.isCorrect === true)
              ?.answerText
          }
          isCorrect={isCorrect}
        />
        <Button
          variant="neo"
          size="lg"
          onClick={handleNext}
        >
          {!started ? "Start" : currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
        </Button>
      </footer>
    </div>
  );
}
