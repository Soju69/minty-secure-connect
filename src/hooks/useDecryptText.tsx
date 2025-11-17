import { useEffect, useRef, useState } from "react";

const useDecryptText = (originalText: string, trigger: boolean = true) => {
  const [displayText, setDisplayText] = useState(originalText);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const hasDecrypted = useRef(false);

  useEffect(() => {
    if (!trigger || hasDecrypted.current) return;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let iterations = 0;
    const maxIterations = originalText.length;

    setIsDecrypting(true);

    const interval = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iterations) {
              return originalText[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      iterations += 1 / 3;

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(originalText);
        setIsDecrypting(false);
        hasDecrypted.current = true;
      }
    }, 30);

    return () => clearInterval(interval);
  }, [originalText, trigger]);

  return { displayText, isDecrypting };
};

export default useDecryptText;