import React from 'react'
import {DefaultPoster} from 'components/posters'

export default class ShowCollection extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    let Posters = []
    for (let i = 0; i < this.props.collection.length; i++) {
      if (i >= 18) break
      Posters.push(<DefaultPoster tmdbSize='w154' posterPath={this.props.collection[i]} key={i} />)
    }
    return (
      <div className='ui segment'>
        <div className='ui horizontal list'>
          <div className='item'>
            <div className='content'>
              <div className='header'>Name</div>
              <div className='description'>Untitled Collection</div>
            </div>
          </div>
          <div className='item'>
            <div className='content'>
              <div className='header'>Location</div>
              <div className='description'><a href='http://imdbnator.com/hGd3s-Bj'>http://imdbnator.com/hGd3s-Bj</a>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='content'>
              <div className='ui green button'>Edit</div>
            </div>
          </div>
          <div className='item'>
            <div className='content'>
              <div className='ui inverted red button'>Delete</div>
            </div>
          </div>
        </div>
        <div className='ui divider' />
        <div className='ui tiny images'>
          { Posters }
        </div>
      </div>
    )
  }
}
