import React, { Component } from 'react';
import './App.css';
import btn_icon_back_sendtext from './images/btn_icon_back_sendtext.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class SendTextScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, dataSheetRow

  onClick_elButton2 = (ev) => {
    // Go to screen 'Add a User'
    this.props.appActions.goToScreen('addauser', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elText = (ev) => {
    // Go to screen 'Add a User'
    this.props.appActions.goToScreen('addauser', { transitionId: 'fadeIn' });
  
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
    const style_elButton2 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elCard_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
     };
    const style_elText = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elText_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen SendTextScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='actionFont elButton2' style={style_elButton2_outer}>
            <Button style={style_elButton2}  color="accent" onClick={this.onClick_elButton2} >
              {this.props.locStrings.sendtext_button2_375332}
            </Button>
          
          </div>
          
          <div className='cardBg elCard' style={style_elCard_outer}>
            <div />
          
          </div>
          
          <div className='baseFont elText' style={style_elText_outer}>
            <div style={style_elText} onClick={this.onClick_elText} >
              <div>{this.props.locStrings.sendtext_text_960558}</div>
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Send Text</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_sendtext} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  

}
