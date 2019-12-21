import React from 'react';
import CustomButton from './customButton.js';
import screenshot from './static/screenshot.png';
import './static/description.scss';

function Description(props) {
  return (
    <div id='description'>
      <div id='desc-text'>
        <h1>
          Grow your business with flashy cards
        </h1>
        <p>
          {"Get in front of customers when they're looking at your card. Let them see that you mean business and that they can trust your skills"}
        </p>
        <CustomButton
          str={'start here'}
          onClick={props.onClick}
        />
      </div>
      <img src={screenshot}/>
    </div>
  )
}

export default Description;
