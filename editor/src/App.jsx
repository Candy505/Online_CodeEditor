import React, {useState} from "react";
import { Editor } from "./components/Editor";
import { Dropdown } from "./components/Dropdown";
import { Highlighter } from "./components/Highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";

import './App.css';

const defaultLanguage = <code>${"javascript" || Object.keys(languages).sort()[0]}</code>;
const defaultTheme = <code>${"atomOneDark" || Object.keys(themes).sort()[0]}</code>;
function App() {

  const [input, setInput] = useState("");
  const[theme,setTheme]  = useState(defaultTheme);
  const[language,setLanguage] = useState(defaultLanguage);

  return (
    <>
     <div className='App'>
      <div className='ControlsBox'> 
      <Dropdown
          defaultLanguage={defaultLanguage}
          onChange={(e) => setLanguage(e.target.value)}
          data={languages}
        />
        <Dropdown
          defaultTheme={defaultTheme}
          onChange={(e) => setTheme(e.target.value)}
          data={themes}
        />    
       </div>
      <div className='PanelsBox'>
      <Editor
          placeHolder="Type your code here..."
          onChange={(e) => setInput(e.target.value)}
        />
        <Highlighter language={language} theme={themes[theme]}>
          {input}
        </Highlighter>
      </div>
     </div>
    </>
  )
}

export default App
