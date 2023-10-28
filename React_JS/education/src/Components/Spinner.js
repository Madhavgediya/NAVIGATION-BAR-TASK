import React, { Component } from 'react'
import Sprinner from './loading.gif'

const Spinner = () => {
    return (
      <div className='text-center'>
        <img src={Sprinner} alt="" width={35}/>
      </div>
    )
  }

export default Spinner;
