import React from 'react'

export default function Loading (props) {
  return (
    <div className={`${props.addClass} ui active dimmer`}>
      <div className='ui text loader'>{props.message}</div>
    </div>
  )
}
