"use client";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

export default function GlobalSnow() {
  const [flakeCount, setFlakeCount] = useState(80);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setFlakeCount(10);  
      } else if (width < 768) {
        setFlakeCount(20);  
      } else {
        setFlakeCount(30);  
      }
    };

    handleResize();  
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Snowfall
      snowflakeCount={flakeCount}
      speed={[0.3, 1.5]}
      radius={[1, 3.5]}
      wind={[-0.5, 1.5]}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1000,
      }}
    />
  );
}
