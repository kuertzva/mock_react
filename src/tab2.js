import React from 'react';
import CustomButton from './customButton.js';
import Card from './card.js'


import './static/tab1-2.scss'

function Tab2(props) {
  return (
    <div id='tab1'>
      <Card
        id='final-card'
        data={props.data}
      />
      <CustomButton
        onClick={props.onClick}
        str={'download'}
      />
    </div>
  )
}

export default Tab2;
