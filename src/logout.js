
import React, { Component } from 'react';
import './App.css';
import Button from 'muicss/lib/react/button';




export default class Logout extends Component {

  
  onClick_elText2 = (ev) => {
    // Go to screen 'Friends'
    window.open('https://finalfordeploy.herokuapp.com/', '_blank');
  
  }

 
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elN00021restaurant = {
        backgroundColor: '#d3d3d3',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elText = {
        fontSize: 55,
        color: 'black',
        textAlign: 'center',
     };
    const style_elFirebaseLogin_outer = {
        pointerEvents: 'auto',
     };
    const style_elText3 = {
        fontSize: 23.7,
        color: 'black',
        textAlign: 'center',
     };
    const style_elText2 = {
        color: 'black',
        textAlign: 'center',
     };
    const style_elText2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };

    
    
    return (
      <div className="AppScreen LoginMainScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_elBackground_outer}>
            <div className='appBg' style={style_elBackground} />
          
          </div>
          
          <div className='containerMinHeight elN00021restaurant' style={style_elN00021restaurant} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elText'>
            <div className='font-helveticaBold' style={style_elText}>
              <div>LOGGED OUT</div>
            </div>
          
          </div>
          

          
          <div className='elText2' style={style_elText2_outer}>
            <div className='font-helveticaBold' style={style_elText2} onClick={this.onClick_elText2} >
              <Button>Go to Main Page (Where You Can Text)</Button>
            </div>

            
          
          </div>
          
        </div>
      </div>
    )
  }
  

}

