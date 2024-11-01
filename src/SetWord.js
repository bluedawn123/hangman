import React from 'react';

let SetWord = ()=>{
  return(
    <form onSubmit={(e)=>{
      e.preventDefault();
      window.localStorage.setItem('scretWord', e.target.word.value);
    }}>
      <input type="text" name="word"/>
      <button type="submit">입력</button>
    </form>
  )
}

export default SetWord;