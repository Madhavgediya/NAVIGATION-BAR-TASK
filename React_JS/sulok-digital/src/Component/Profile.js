import React from 'react'

export default class Profile extends React.Component {

    constructor(){
        super()
    }
    componentDidMount(){
        console.warn("Called Life");
    }
  render() {
    return (
      <div>
            <h1>Madhav Gediya</h1>
      </div>
    )
  }
}

