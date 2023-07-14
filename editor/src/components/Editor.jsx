import "./Editor.css";
import React,{useState} from "react";

const languageKeywords = {
  python: [ 'False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class',
  'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global',
  'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return',
  'try', 'while', 'with', 'yield'
   ],

  javascript: [ 'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default',
  'delete', 'do', 'else', 'export', 'extends', 'finally', 'for', 'function',
  'if', 'import', 'in', 'instanceof', 'let', 'new', 'return', 'super', 'switch',
  'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield'
  ],
 cpp: ["alignas", "alignof", "and", "and_eq", "asm", "auto", "bitand", "bitor", "bool", "break",
 "case", "catch", "char", "char8_t", "char16_t", "char32_t", "class", "compl", "concept",
 "const", "consteval", "constexpr", "const_cast", "continue", "co_await", "co_return",
 "co_yield", "decltype", "default", "delete", "do", "double", "dynamic_cast", "else", "enum",
 "explicit", "export", "extern", "false", "float", "for", "friend", "goto", "if", "inline",
 "int", "long", "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr",
 "operator", "or", "or_eq", "private", "protected", "public", "reflexpr", "register",
 "reinterpret_cast", "requires", "return", "short", "signed", "sizeof", "static",
 "static_assert", "static_cast", "struct", "switch", "synchronized", "template", "this",
 "thread_local", "throw", "true", "try", "typedef", "typeid", "typename", "union",
 "unsigned", "using", "virtual", "void", "volatile", "wchar_t", "while", "xor", "xor_eq"
 ],

  // Add more languages and their respective keywords as needed
};


export const Editor = ({ language, placeHolder, onChange, onKeyDown }) => {
  const lang = language;
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {

    const value = event.target.value;
    setInputValue(value);

    const language = lang;
   // Replace with the selected programming language
    const keywords = languageKeywords[language] || [];
    const words = value.split(/\s+/);
    const matchedKeywords = keywords.filter((keyword) =>
  words.some((word) => keyword.startsWith(word))
);

    setSuggestions(matchedKeywords);
  };

function handleOption(e)
{
   onChange(e);
   handleInputChange(e);
}

  return (
    <section id = "suggest">
    <textarea
      value={inputValue}
      className="editor"
      placeholder={placeHolder}
      onChange={handleOption}    
   />  
  
    
    <ul className="list">
        {suggestions.map((suggestion) => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    
     </section>
  );
};

