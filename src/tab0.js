import React from 'react';
import TextInput from './textInput.js';
import CustomButton from './customButton.js';
import './static/tab0.scss';

function Tab0(props) {

  function onSubmit() {
    // make data object and send it up to top level component

    // get the inputs
    const inputs = document.getElementsByClassName('data-field');

    // create and fill in data object
    var data = {};
    var input;
    for (input of inputs) {
      var attr = input.getAttribute('data-attribute');
      data[attr] = input.value
    }

    // send it up
    props.onSubmit(data);
  }

  function makeInputs() {
    var inputs = []
    var key;
    for (key of Object.keys(props.data)) {
      var input = (
        <TextInput
          attribute={key}
          key={key}
        />
      )
      inputs.push(input);
    }
    return inputs;
  }
  return (
    <div id='tab0'>
      {makeInputs()}
      <CustomButton
        str='submit'
        onClick={onSubmit}
      />
    </div>
  )
}

export default Tab0;
