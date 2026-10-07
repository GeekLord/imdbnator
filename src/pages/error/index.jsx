import React from 'react'
import {withRouter} from 'react-router-dom'

export default function Error (props) {
  let code = (props.code) ? props.code : 404
  let message = (props.message) ? props.message : 'Invalid page.'
  return (
    <div className='ui text container one column grid' style={{minHeight: '100%'}}>
      <div className='center aligned middle aligned column'>
        <h1 className='ui header'>
          {code}
          <div className='sub header'>
            {message}
          </div>
        </h1>
      </div>
    </div>
  )
}
