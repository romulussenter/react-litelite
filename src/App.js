import React, { Component } from "react";
import "./App.css";
import "./LiteGrid";
import LiteGrid from "./LiteGrid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          bg: "blue"
        },

        {
          bg: "blue"
        },

        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },

        {
          bg: "blue"
        },

        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },

        {
          bg: "blue"
        },

        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },

        {
          bg: "blue"
        },

        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },

        {
          bg: "blue"
        },

        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },

        {
          bg: "blue"
        },

        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },

        {
          bg: "blue"
        },

        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },

        {
          bg: "blue"
        },

        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },

        {
          bg: "blue"
        },

        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },

        {
          bg: "blue"
        },

        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },

        {
          bg: "blue"
        },

        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },

        {
          bg: "blue"
        },

        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        },
        {
          bg: "blue"
        }
      
      ]
    }
  
    this.changeColor = this.changeColor.bind(this);
    this.reset = this.reset.bind(this);
  
}


  
      

  changeColor(position) {
    const currentBox = this.state.cards[position];
    const first = this.state.cards.slice(0, position);
    const last = this.state.cards.slice(position + 1);
    const newBox = {
      ...currentBox,
      bg: "red"
    }
    const newBoxes = [...first, newBox, ...last];
    this.setState({ cards: newBoxes });
  }
  
  reset(){
    const newCards = this.state.cards.map(card => ({bg:'blue'}))
    console.log(newCards);
    this.setState({
      cards: newCards
    });
  }
          
  

  render() {
    const cards = this.state.cards.map((card, index) => (
      <div
        key={index}
        style={{ backgroundColor: card.bg }}
        className="col-md-1 cardy"
        onClick={() => this.changeColor(index)}
      />
    ));

    return (
      <div className="container">
        <h1>Lite Lite</h1>
        <div className="row">{cards}</div>
        <button className="col-md-12 btn btn-primary" onClick={this.reset} >Clear Grid</button>
          
        
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
