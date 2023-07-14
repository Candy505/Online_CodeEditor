import prettier from 'prettier'
import SyntaxHighlighter from "react-syntax-highlighter";
import "./Highlighter.css";
import CodeFormatBtn from "./CodeFormatBtn";
import { format } from 'prettier';
export const Highlighter = ({ language, theme, children }) => {
  

  let indentedCode = null;
  function indentCode() {
     console.log("hey")
  }

  return (
    <div>

    
    <SyntaxHighlighter
    showLineNumbers="true"
      language={language}
      style={theme}
      className="highlighter"
    >
     {indentedCode||children}
    </SyntaxHighlighter>
    </div>
  );
};


  
  /*
  const lines = code.split('\n');
  let indentedCode = '';

  let indentLevel = 0;
  const indentSize = 2; // Number of spaces per indentation level

  for (let line of lines) {
    line = line.trim(); // Remove leading and trailing whitespace

    if (line.endsWith('}')) {
      indentLevel--;
    }

    indentedCode += ' '.repeat(indentLevel * indentSize) + line + '\n';

    if (line.endsWith('{')) {
      
      indentLevel++;
    }
  }

  //console.log(indentedCode)
  return indentedCode.trim();

  // Add indentation logic for other languages if needed
  */

  