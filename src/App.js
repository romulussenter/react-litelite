import React, { Component } from 'react';
import './App.css';
import './LiteGrid';
import LiteGrid from './LiteGrid';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cards: [{
            bg:'blue '
      },
      {
        bg:'blue'
  },
  {
    bg:'blue'
},
{
  bg:'blue'
},
{
  bg:'blue'
},
{
  bg:'blue'
},
{
  bg:'blue'
}
      
  ]
    }
  }
  
  render() {
  
    return (
      <div className="container">
      <h1>Lite Lite</h1>
      <div className='row'>
        {this.state.cards.map((cardObj, index) => <div style={{backgroundColor: cardObj.bg}} 
      key={index} className="col-md-1 border"></div>)}                                                   
   </div>
   </div>
   
   
      
    );
  }

  
    
    
    

     
} 
    
   
    
    
    
export default App;
// {/* return (
//       <div className='container'>
//       <h1>LiteLite</h1>
//       <div className='row'>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//       </div>
//       <div className='row'>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//       </div>
//       <div className='row'>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//       </div>
//       <div className='row'>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//        <div className='col-md-1 border'></div>
//       </div>
//       </div>
      
//     );
  
// {/* < LiteGrid /> */}
// } */}