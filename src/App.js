import { useEffect, useState } from 'react';
import './App.css';
import GameBoard from './GameBoard';
import SetWord from './SetWord';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [maxError, setMaxError] = useState(0);
  const [answerLength, setAnswerLength] = useState(0);
  const [secretWord, setSecretWord] = useState('');

  useEffect(()=>{
    let word = window.localStorage.getItem('scretWord');    
    if(word && word.length > 0 ){
      setSecretWord(word);
      setAnswerLength(word.length);
      setMaxError(word.length + 2)
    }else{
      setAnswerLength(0);
      setMaxError(1)
    }
  },[]);

  return (
    <div className="App">
      <h1>Hangman</h1>
      <p>Do you want to play game</p>

      <Routes>
        <Route path="/" element={<GameBoard secretWord={secretWord} maxError={maxError} answerLength={answerLength}/>} />
        <Route path="/admin" element={<SetWord />} />
      </Routes> 
      
    </div>
  );
}

export default App;
