import { cn } from "@/lib/utils";
import clsx from "clsx";

type Props = {
  isCorrect: boolean | null;
  correctAnswer?: string;
};

const ResultCard = ({ isCorrect, correctAnswer }: Props) => {
  if (isCorrect === null || correctAnswer === undefined) {
    return null;
  }

  const showingText = isCorrect
    ? "Correct !"
    : `Incorrect ! The correct answer is: ${correctAnswer}`;
  return (
    <div
      className={cn(
        clsx({
          "border-green-500": isCorrect,
          "border-red-500": !isCorrect,
        }),
        "border-2 rounded-lg p-4 text-center text-lg my-4 bg-secondary font-medium"
      )}
    >
      {showingText}
    </div>
  );
};

export default ResultCard;
