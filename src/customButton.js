import React from 'react';

function CustomButton(props) {
  return (
    <button onClick={props.onClick}>
      <span class='cross'>+</span>
      <span class='inner-button'>
        {props.str.toUpperCase()}
      </span>
    </button>
  )
}

export default CustomButton;
