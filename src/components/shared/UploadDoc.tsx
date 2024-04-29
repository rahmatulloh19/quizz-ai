"use client";

import { useState } from "react";
import { Button } from "../ui/button";

const UploadDoc = () => {
  const [document, setDocument] = useState<Blob | undefined | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsLoading(true);
    console.log(document);
  };

  return (
    <div className="w-full">
      <form
        className="w-full"
        onSubmit={handleSubmit}
      >
        <label
          className="bg-secondary w-full flex h-20 rounded-md border-4 border-dashed border-blue-900 relative"
          htmlFor="document"
        >
          <div className="absolute inset-0 m-auto flex justify-center items-center">
            {document && document?.name ? document.name : "Drag a file"}
          </div>
          <input
            className="relative block w-full h-full z-50 opacity-0"
            type="file"
            id="document"
            onChange={(evt) => setDocument(evt.target.files?.[0])}
          />
        </label>
        <Button
          className="mt-2"
          size="lg"
          type="submit"
        >
          Generate Quiz ✨
        </Button>
      </form>
    </div>
  );
};

export default UploadDoc;
