import React, { useState, useEffect } from "react";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

const AnimatedText = ({ text, speed,infinite}) => {

    const styles = {
        color: "green",
        fontSize: "76px",
        margin:"30px",
      };

      
  const [printedText, setPrintedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setPrintedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);
    }

    else if (infinite) { // ADD THIS CHECK
        setCurrentIndex(0);
        setPrintedText('');
    }
    return () => clearTimeout(timeout);
}, [currentIndex, speed,infinite, text]);

const getDisplayedText = () => {
  if (currentIndex < text.length) {
    return printedText + "_";
  } else {
    return printedText;
  }
};

return <h1 style={styles}>{getDisplayedText()}</h1>;
};

export default AnimatedText;
