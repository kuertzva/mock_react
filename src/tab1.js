import React from 'react';
import CustomButton from './customButton.js';
import Card from './card.js'
import './static/tab1-2.scss'

function Tab1(props) {
  return (
    <div id='tab1'>
      <Card
        id='draft-card'
        data={props.data}
      />
      <CustomButton
        onClick={props.onClick}
        str={'looks good'}
      />
    </div>
  )
}

export default Tab1;
