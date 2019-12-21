import React from 'react';
import './static/textInput.scss'

function TextInput(props) {

  function makeLabel(string) {
    var label = '';

    for (var i = 0; i < string.length; i++) {
      if (i === 0) {
        label += string[i].toUpperCase();
      } else if (string[i] === string[i].toUpperCase()) {
        label += ' ' + string[i];
      } else {
        label += string[i];
      }
    }

    return label;
  }


  return (
    <div class='text-input'>
      <label for={props.attribute}>
        {makeLabel(props.attribute)}
      </label>
      <input
        type='text'
        className='data-field'
        id={props.attribute}
        data-attribute={props.attribute}
      />
    </div>
  )
}

export default TextInput;
