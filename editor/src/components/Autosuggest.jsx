import React, { useState } from 'react';

const languageKeywords = {
  python: ['if', 'else', 'for', 'while', 'print', 'import'],
  javascript: ['if', 'else', 'for', 'while', 'console.log', 'import'],
  java: ['if', 'else', 'for', 'while', 'System.out.println', 'import'],
  // Add more languages and their respective keywords as needed
};

function Autosuggest() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const language = 'python'; // Replace with the selected programming language
    const keywords = languageKeywords[language] || [];
    const matchedKeywords = keywords.filter((keyword) =>
      keyword.startsWith(value)
    );

    setSuggestions(matchedKeywords);
  };

  return (
    <div>
      <input
        value={inputValue}
        className="editor"
        placeholder="Enter code"
        onChange={handleInputChange}
      />

      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default Autosuggest;
