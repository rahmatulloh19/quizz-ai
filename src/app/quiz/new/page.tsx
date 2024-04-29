import { UploadDoc } from "@/components/shared";

const QuizNewPage = () => {
  return (
    <div className="flex flex-1 flex-col">
      <main className="py-11 flex flex-col max-w-96 mx-auto text-center gap-4 items-center flex-1 mt-24">
        <h2 className="text-3xl font-bold mb-4">What do you want to be quizzed about today ?</h2>
        <UploadDoc />
      </main>
    </div>
  );
};

export default QuizNewPage;
