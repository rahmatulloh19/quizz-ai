"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);

  const handleNext = () => {
    setStarted(true);
  };

  return (
    <div className="flex flex-col flex-1 max-w-96 w-full m-auto h-screen gap-6">
      <main className="flex justify-center flex-1">
        {!started ? (
          <h1 className="text-3xl font-bold">Hello World👋</h1>
        ) : (
          <div>
            <h2 className="text-3xl font-bold">What is your level of understanding of React ?</h2>
            <div className="grid grid-cols-1 gap-6 mt-6">
              <Button>Beginner</Button>
              <Button>Intermediate</Button>
              <Button>Advanced</Button>
              <Button>Expert</Button>
            </div>
          </div>
        )}
      </main>
      <footer className="footer pb-9 px-6 relative mb-0">
        <Button onClick={handleNext}>{!started ? "Start" : "Next"}</Button>
      </footer>
    </div>
  );
}
