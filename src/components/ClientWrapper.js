// src/components/ClientWrapper.js
"use client";

import { useEffect, useState } from "react";
import CustomCursor from "./CustomCursor";

export default function ClientWrapper({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && <CustomCursor />} {/* only render on client */}
      {children}
    </>
  );
}
