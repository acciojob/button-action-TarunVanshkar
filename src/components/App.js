import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  const [classname, setClassname] = useState('hide');
  const message = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  return (
    <div className="App" id="main">
      {/* // Do not alter the main div */}
      {
        classname === 'show' ? <p id="para" className={classname}>{message}</p> : ''
      }
      <button id="click" onClick={() => classname==='hide' ? setClassname('show') : setClassname('hide')}>Click</button>
    </div>
  );
}

export default App
