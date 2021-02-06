import React from 'react'; 
import cake1 from './../images/cake1.jpg';
import cake2 from './../images/cake2.jpg';
import cake3 from './../images/cake3.jpg';

import kitten1 from './../images/kitten1.jpg';
import kitten2 from './../images/kitten2.jpg';
import kitten3 from './../images/kitten3.jpg';

import puppy1 from './../images/puppy1.jpg';
import puppy2 from './../images/puppy2.jpg';
import puppy3 from './../images/puppy3.jpg';
  
const PhotoCom = (props) => { 
    return ( 
        <div >
            <div >
                <li>
                    {props.album1 && <img src={cake1}  style={{width: "150px"}}/>}
                    {props.album1 && <img src={cake2}  style={{width: "150px"}}/>}
                    {props.album1 && <img src={cake3}  style={{width: "150px"}}/>}
                </li>
            </div>   

            <div >
                <li>
                    {props.album2 && <img src={kitten1}  style={{width: "150px"}}/>}
                    {props.album2 && <img src={kitten2}  style={{width: "150px"}}/> }   
                    {props.album2 && <img src={kitten3}  style={{width: "150px"}}/>}  
                </li>
            </div> 

            <div >
                <li>
                    {props.album3 && <img src={puppy1}  style={{width: "150px"}}/>}
                    {props.album3 && <img src={puppy2}  style={{width: "150px"}}/> }   
                    {props.album3 && <img src={puppy3}  style={{width: "150px"}}/>}  
                </li>
            </div> 
               
              
        </div> 
    ) 
} 
  
export default PhotoCom;