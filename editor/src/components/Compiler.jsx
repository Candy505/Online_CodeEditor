import React, { Component } from "react";
import "./Compiler.css";

export default class Compiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: localStorage.getItem('input')||``,
      output: ``,
      language_id:localStorage.getItem('language_Id')|| 2,
      user_input: ``,
    };
  }
  input = (event) => { 
    event.preventDefault();
    this.setState({ input: event.target.value });
    localStorage.setItem('input', event.target.value) 
  };
  
  userInput = (event) => {
    event.preventDefault();
    this.setState({ user_input: event.target.value });
  };
  
  language = (event) => {  
    event.preventDefault();
    this.setState({ language_id: event.target.value });
    localStorage.setItem('language_Id',event.target.value)
   
  };
  
  submit = async (e) => {
    e.preventDefault();
    let outputText = document.getElementById("output");
    outputText.innerHTML = "";
    outputText.innerHTML += "Creating Submission ...\n";
    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions",
      {
        method: "POST",
        headers: {
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key": "", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          source_code: this.state.input,
          stdin: this.state.user_input,
          language_id: this.state.language_id,
        }),
      }
    );
    
    outputText.innerHTML += "Submission Created ...\n";
    const jsonResponse = await response.json();
    let jsonGetSolution = {
      status: { description: "Queue" },
      stderr: null,
      compile_output: null,
    };
    while (
      jsonGetSolution.status.description !== "Accepted" &&
      jsonGetSolution.stderr == null &&
      jsonGetSolution.compile_output == null
    ) {
      outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
      if (jsonResponse.token) {
        let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
        const getSolution = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": "", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
            "content-type": "application/json",
          },
        });
        jsonGetSolution = await getSolution.json();
      }
    }
    
    if (jsonGetSolution.stdout) {
      const output = atob(jsonGetSolution.stdout);
      outputText.innerHTML = "";
      outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
    } else if (jsonGetSolution.stderr) {
      const error = atob(jsonGetSolution.stderr);
      outputText.innerHTML = "";
      outputText.innerHTML += `\n Error :${error}`;
    } else {
      const compilation_error = atob(jsonGetSolution.compile_output);
      outputText.innerHTML = "";
      outputText.innerHTML += `\n Error :${compilation_error}`;
    }
  };
  
  render() { 
    return (
      <>
        <div>
        <button
              type="submit"
               className="run clr position"
              onClick={this.submit} >
               Run
            </button>

            <label htmlFor="tags">

              <b className="heading">Language:</b>
            </label>

            <select
            className="position clr"
              value={this.state.language_id}
              onChange={this.language}
              id="tags"
        
            >
              <option value="54">C++</option>
              <option value="50">C</option>
              <option value="62">Java</option>
              <option value="71">Python</option>
            </select>
            <button className="btn clr position">Format code</button>
            <button className="btn clr position">Syntax Highlight</button>
      <div className="vertical">
          <div >
            <label htmlFor="solution "></label>

            <textarea
              required
              name="solution"
              id="source"
              onChange={this.input}
              className=" source"
              value={this.state.input} >
            </textarea>

          </div>

         

            <div>
              <textarea placeholder="  Output will show here.." id="output"></textarea>
            </div>

        </div>
        </div>
       
      </>
    );
  }
}


/* <div>
          <span >
            <i ></i> User Input
          </span>
          <br />

          <textarea id="input" onChange={this.userInput}></textarea>

        </div>*/