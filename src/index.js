import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function Room(){
  const [isLit, setLit] =useState(true); 
  const  lightedness = isLit ? "lit": "dark";

  return (
    <div className = {`room ${lightedness}`}> 
      The room is { lightedness} 
    <br/>
    <button onClick={()=> setLit(!isLit)}>
      Turn On
    </button>
    </div>
  );
}

ReactDOM.render(<Room />, document.querySelector('#root'));

