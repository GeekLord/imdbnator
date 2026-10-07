import React from 'react'
import {FindMovie} from 'components/search'
import Load from 'components/load'

export default class Add extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='ui page reactPage grid'>
        <div className="row">
          <div className='column'>
            <FindMovie />
          </div>
        </div>
        <div className="row">
          <Load addClass='column' />
        </div>
      </div>
    )
  }
}
