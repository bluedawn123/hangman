import React from 'react';
import Button from './Button';

const ButtonGrid = ({onclick})=>{
  let letters = [
    'A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X',
    'Y','Z'
  ];

  let buttons = letters.map((letter,idx)=>(
    <Button value={letter} onclick={onclick} key={idx}/>
  ));
  
  return (
    <div className="buttons">
      {buttons}
    </div>
  );
}

export default ButtonGrid;