
import './App.css';
import data from './data';
import React, { Component } from 'react';
import User from './components/User';
import Photocom from './components/PhotoCom.js';
import PhotoCom from './components/PhotoCom.js';

class App extends Component{

  constructor(props) {
    super(props);
    this.state={
      
      album1:false,
      album2:false,
      album3:false,
      
    }
  }

  changeState1 = () => {   
    this.setState(
      {
        
        album1:true,
        album2:false,
        album3:false,

    });  
       }; 

       changeState2 = () => {   
        this.setState(
          {
           
            album2:true,
            album1:false,
            album3:false,
    
        });  
           }; 

           changeState3 = () => {   
            this.setState(
              {
                
                album3:true,
                album1:false,
                album2:false,
        
            });  
               }; 


  render() {
    
  return (      
            <div >   
                    
                <div>   
                    <button  onClick={this.changeState1} type="button">  
                      user1  
                    </button>     
                </div> 
                {this.state.album1 && <PhotoCom album1={this.state.album1} />}

                <div>   
                    <button  onClick={this.changeState2} type="button">  
                      user2  
                    </button>     
                </div> 
                {this.state.album2 && <PhotoCom album2={this.state.album2} />}

                <div>   
                    <button  onClick={this.changeState3} type="button">  
                      user3  
                    </button>     
                </div> 
                {this.state.album3 && <PhotoCom album2={this.state.album3} />}
            </div>    
        );          
}
}
export default App;
