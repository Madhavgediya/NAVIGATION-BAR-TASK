import React, { Component } from 'react'
import Sprinner from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Sprinner} alt="" />
      </div>
    )
  }
}
