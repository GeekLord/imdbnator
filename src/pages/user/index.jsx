import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import ShowCollection from 'components/showcollection'
import {Loading} from 'components/notifications'

import mockCollections from "samples/collections"

export default class User extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMounted: false,
      username: 'skd',
      name: 'Sai Krishna Deep',
      collections: mockCollections
    }
  }
  render () {
    if (!this.state.isMounted) {
      return (<Loading />)
    }
    return (
      <div className='ui container stackable user grid'>
        <div className='row'>
          <div className='column'>
            <div className='ui pointing menu'>
              <NavLink to={`/user/${this.state.username}/collections`} className='item'>Collections</NavLink>
              <NavLink to={`/user/${this.state.username}/watched`} className='item'>Watched</NavLink>
              <NavLink to={`/user/${this.state.username}/favourites`} className='item'>Favourites</NavLink>
              <NavLink to={`/user/${this.state.username}/watchlist`} className='item'>Watchlist</NavLink>
            </div>
          </div>
        </div>

        <Collections collections={this.state.collections} />
        {/* <Watched /> */}

      </div>
    )
  }
  componentDidMount () {
    this.setState({
      isMounted: true
    })
  }
}

class Collections extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    if (this.props.collections.length === 0) {
      return (
        <div className='equal width row'>
          <div className='center aligned middle aligned column'>
            <h3 className='ui header'>
              <div className='content'>
                Aww ...
                <div className='sub header'>
                  You havn't created a collection.
                </div>
              </div>
            </h3>
            <div className='ui inverted green labeled icon button'>
              <i className='plus icon' />
              Create Collection
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className='equal width row'>
        {this.props.collections.map((collection, i) => {
          return (
            <div className='column' key={i}>
              <ShowCollection collection={collection} />
            </div>
          )
        })}
      </div>
    )
  }
}

class Watched extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='equal width row'>
        <div className='center aligned middle aligned column'>
          <h3 className='ui header'>
            <div className='content'>
              Aww ...
              <div className='sub header'>
                You havn't marked aything as "watched" yet.
              </div>
            </div>
          </h3>
          <div className='ui inverted green labeled icon button'>
            <i className='plus icon' />
              Add Movie
          </div>
        </div>
      </div>
    )
  }
}
