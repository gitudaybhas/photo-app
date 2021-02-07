
import './App.css';
import data from './data';
import React, { Component } from 'react';

import Album from './components/Album';

class App extends Component {



  constructor(props) {
    super(props);
    this.state = {

      data: data,

      
      album: false,

    }
  }

  changeState1 = (e) => {
    this.setState(
      {

       album:true

      });

   

      


  };

 

  


  render() {

    function changeStat(e){

      

    }

    const userStr = this.state.data;

    console.log(userStr);


    const items = [];

    for (const [index, value] of userStr.entries()) {
      items.push(
        <div>
          <div key={index} al={Object.entries(value.album).map(([k, v]) => {
        return (
            
                 v.name.toString()
           
        );
    })} onClick={this.changeState1} id={value.name} className="padding-top-bottom">{value.name}</div>

    
    <div>
          {this.state.album && <Album show={value.album} cls={value.name}></Album>}

          </div>
        </div>
      )
    }

    return (
      <div className="align-center">

        {items}


      </div>
    );
  }
}
export default App;
