"use client";

import React, { createContext, useContext, useState } from "react";

const DownloadMenuContext = createContext();

export function DownloadMenuProvider({ children }) {
  const [downloadOpen, setDownloadOpen] = useState(false);
  return (
    <DownloadMenuContext.Provider value={{ downloadOpen, setDownloadOpen }}>
      {children}
    </DownloadMenuContext.Provider>
  );
}

export function useDownloadMenu() {
  return useContext(DownloadMenuContext);
}
