import React from 'react';
import './static/card.scss'

function Card(props) {

  return (
    <div className='card-container' id={props.id}>
      <p className='f-l-name'>
        {props.data.firstName + ' ' + props.data.lastName}
      </p>
      <p className='companyName'>
        {props.data.companyName}
      </p>
      <p className='emailAddress'>
        {props.data.emailAddress}
      </p>
      <p className='phoneNumber'>
        {props.data.phoneNumber}
      </p>
    </div>
  )
}

export default Card;
