import React from 'react'

export default function Dimmer (props) {
  return (
    <div className='ui active dimmer'>
      <div className='content'>
        <div className='center'>
          <h2 className='ui inverted icon header'>
            <i className={props.icon} />
            {props.header}
            <div className='sub header' dangerouslySetInnerHTML={{__html: props.message}}></div>
          </h2>
        </div>
      </div>
    </div>
  )
}
