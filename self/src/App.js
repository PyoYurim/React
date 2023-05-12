/* eslint-disalbe */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  let [happy, setHappy] = useState(0);
  return (
    <div className="modal">
      <h4>행복지수를 높여주세요!</h4>
      {/* happy가 하나씩 올라가도록 */}
      <h3><button onClick={() => {setHappy(happy+1)}}>🍀</button> {happy} </h3>
      <p>행복지수를 높여주면 스트레스가 없어진다!!!</p>
    </div>
  )
}

export default App;