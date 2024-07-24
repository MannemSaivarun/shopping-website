import React, { Component } from 'react'

export class UserPage extends Component {
  render() {
    const {userId} = this.props.params;
    return (
      <div>
        UserPage:{userId}
      </div>
    )
  }
}

export default UserPage
