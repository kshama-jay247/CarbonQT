"use client";

import React from "react";
import { Copy } from "lucide-react";

export default function CopyCodeBlock({ code }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative mt-4">
      <pre className="bg-green-100 dark:bg-green-800 p-4 rounded-md text-green-900 dark:text-green-100">
        {code}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute inset-y-0 right-2 flex items-center justify-center p-2 rounded hover:bg-green-600/20"
        aria-label="Copy code"
      >
        <Copy className="h-6 w-6 text-green-600 dark:text-green-300" />
      </button>
    </div>
  );
}
