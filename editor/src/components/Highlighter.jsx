import prettier from 'prettier'
import SyntaxHighlighter from "react-syntax-highlighter";
import "./Highlighter.css";
import CodeFormatBtn from "./CodeFormatBtn";
import { format } from 'prettier';
export const Highlighter = ({ language, theme, children }) => {
  
  const indentedCode = indentCode(children);

  function indentCode(code) {
    // Add closing braces and indentation
    const lines = code.split("\n");
    let indentationLevel = 0;
    const indentedLines = lines.map((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine.endsWith("{")) {
        const indentedLine = "  ".repeat(indentationLevel) + trimmedLine;
        indentationLevel++;
        return indentedLine;
      } else if (trimmedLine.endsWith("}")) {
        indentationLevel--;
        const indentedLine = "  ".repeat(indentationLevel) + trimmedLine;
        return indentedLine;
      } else {
        return "  ".repeat(indentationLevel) + line;
      }
    });
    const indentedCode = indentedLines.join("\n");
  
    // Log the modified code for demonstration purposes
    return indentedCode;
  }
  /*const indentedCode = indentCode(); let indentCode =null;
  function indentCode() {
    const codeWithClosingBraces = children.replace(/{/g, "{\n  \n}");

    // Log the modified code for demonstration purposes
    console.log(codeWithClosingBraces)
  }
*/
  return (
    <div>

    
    <SyntaxHighlighter
    showLineNumbers="true"
      language={language}
      style={theme}
      className="highlighter"
    >
     {indentedCode}
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

  