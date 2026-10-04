import React from 'react'

export default class Search extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='ui reactPage container grid'>
        <div className='row'>
          <div className='column'>
            <h1 className='ui header'>
              Search results
              <div className='sub header'>
                for "Titanic"
              </div>
            </h1>
          </div>
        </div>
      </div>
    )
  }
}
