

import React, { Component } from 'react';


class User extends Component{

  
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
    this.shoot = this.shoot.bind(this)
  }

  shoot() {
    console.log("hello");
    
  }
  
  render() {
    
    
  return (
    <div>
       <div onClick={this.shoot}>Beth</div>
     <div>Kelly</div>
     <div>John</div>
     
    </div>
  );
}
}
export default User;