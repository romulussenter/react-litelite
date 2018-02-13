import React, { Component } from 'react';


class LiteGrid extends Component {

  render() {
    const style= {
      color:this.props.lite ? 'red' : 'blue',
      
    }
    console.log('this is stuff', style);
    return (
   <div className='col-md-1'>
   <div style={ style }></div>

   </div>
  );
  }
}
export default LiteGrid;