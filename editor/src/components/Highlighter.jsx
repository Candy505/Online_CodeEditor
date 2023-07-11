import SyntaxHighlighter from "react-syntax-highlighter";
import "./Highlighter.css";

export const Highlighter = ({lineno, language, theme, children }) => {
  const indentedCode = indentCode(children);

  return (
    <SyntaxHighlighter
    showLineNumbers="true"
      language={language}
      style={theme}
      className="highlighter"
    >
      
      {indentedCode}
    </SyntaxHighlighter>
  );
};

function indentCode(code) {
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
}
