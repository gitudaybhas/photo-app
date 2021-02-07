import React, {Component} from 'react'; 

  
class Album extends Component{

    constructor(props) {
        super(props);
    }

    showAlbum(e){
        

        let element = e.currentTarget;

        let photos = element.getAttribute("photos");

        let className = element.getAttribute("id");
        
        let res = photos.split(",");

        res.forEach(function(item, index, array) {
            var img = document.createElement('img'); 
            img.src =  process.env.PUBLIC_URL + '/images/'+item;
            img.alt = "hello";
            img.style = "width : 150px";
            document.getElementById(className).appendChild(img);
            
             
          })
    } 

    
render() {

   
    const elements = this.props.show;

    const cls = this.props.cls;

    const items = [];
    
    for (const [index, value] of elements.entries()) {
        items.push(
            
        <div className={cls}>
          <div key={index} photos={value.photos} onClick={this.showAlbum} id={value.name}>{value.name}</div>
          
        </div>
        
        )
      }
    return ( 
        <div ><span className="bold-text">Albums</span>
            {items}
            </div>  
        
    ) 
} 
}
  
export default Album;