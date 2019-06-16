import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class Comp1 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elButton2 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    
    return (
      <div className="Comp1" style={baseStyle}>
        <div className="layoutFlow">
          <div className='actionFont elButton2'>
            <Button style={style_elButton2}  color="accent" >
              {this.props.locStrings.comp1_button2_1001283}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
