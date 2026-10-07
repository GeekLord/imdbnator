import React from 'react'

export default class Message extends React.Component {
  __handleCloseClick (event) {
    const $message = event.target.parentElement
    $message.className += ' hidden'
  }
  render () {
    return (
      <div className={`${(this.props.type === 'success') ? 'success' : 'error'} ${(this.props.isHidden) ? 'hidden' : ''} ui icon ${this.props.addClass} message `}>
        <i className={`${(this.props.type === 'success') ? 'green check circle' : 'red info circle'} icon`} />
        <i className='close icon' onClick={this.__handleCloseClick.bind(this)} />
        <div className='content'>
          <div className='header'>
            {this.props.header}
          </div>
          <p>{this.props.message}</p>
        </div>
      </div>
    )
  }
}
