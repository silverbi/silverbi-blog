import { useCallback, useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", updateMousePosition);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, [updateMousePosition]);

  return mousePosition;
};

export default useMousePosition;
