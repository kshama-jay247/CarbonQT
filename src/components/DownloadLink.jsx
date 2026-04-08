"use client";

import React from "react";
import { useDownloadMenu } from "@/components/DownloadMenuContext";

export default function DownloadLink({ label }) {
  const { setIsDownloadOpen } = useDownloadMenu();

  return (
    <button
      onClick={() => setIsDownloadOpen(true)}
      className="underline text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
    >
      {label}
    </button>
  );
}

