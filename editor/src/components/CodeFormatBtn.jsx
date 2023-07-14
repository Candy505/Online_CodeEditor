import React ,{useEffect} from 'react';
import prettier from 'prettier';

const CodeFormatBtn = ({ code, language }) => {
  const formatCode = () => {
   console.log("hey")
  };

  useEffect(() =>{
     formatCode();
  },[]);
  
  return (
    console.log("hey")
  );
};

export default CodeFormatBtn;
