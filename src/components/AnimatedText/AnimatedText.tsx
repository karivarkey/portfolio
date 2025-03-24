import { useState, useEffect } from "react";
import { title } from "./../../../data.json";

const TYPING_SPEED = 200; // Time per letter (in ms)
const DELETING_SPEED = 100; // Backspace speed per letter (in ms)
const HOLD_DURATION = 1000; // Hold time before deleting (in ms)

const AnimatedText = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = title[index];

    if (!isDeleting && charIndex < currentWord.length) {
      // Typing effect
      const typingTimeout = setTimeout(() => {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(typingTimeout);
    } else if (!isDeleting && charIndex === currentWord.length) {
      // Hold before deleting
      setTimeout(() => setIsDeleting(true), HOLD_DURATION);
    } else if (isDeleting && charIndex > 0) {
      // Backspacing effect
      const deletingTimeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, DELETING_SPEED);
      return () => clearTimeout(deletingTimeout);
    } else if (isDeleting && charIndex === 0) {
      // Move to the next word
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % title.length);
    }
  }, [charIndex, isDeleting, index]);

  return (
    <div className="text-md font-regular text-[#797979]">
      {text}
      <span className="animate-blink text-[#797979]">|</span>
    </div>
  );
};

export default AnimatedText;
