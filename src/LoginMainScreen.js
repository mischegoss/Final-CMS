import React, { Component } from 'react';
import './App.css';
import img_elN00021restaurant from './images/LoginMainScreen_elN00021restaurant_883381.jpg';
import FirebaseLogin from './FirebaseLogin';
import firebase from 'firebase';



export default class LoginMainScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  componentDidMount() {
    // Check if Firebase login has been completed.
    setTimeout(() => {
      if (firebase.auth().currentUser) {
        if (this._elFirebaseLogin)
          this._elFirebaseLogin.saveCurrentUserDataInApp();
        
        this.props.appActions.goToScreen('friends');
        
      }
    }, 100);
  }

  onClick_elText2 = (ev) => {
    // Go to screen 'Friends'
    window.open('https://finalfordeploy.herokuapp.com/', '_blank');
  
  }

 skipLogin = (ev)  => {
  this.props.appActions.goToScreen('friends');
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
              <div>ALTETALKER</div>
            </div>
          
          </div>
          
          <div className='elFirebaseLogin' style={style_elFirebaseLogin_outer}>
            <div className=''>
              <FirebaseLogin ref={(el)=> this._elFirebaseLogin = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='elText3'>
            <div className='font-helveticaBold' style={style_elText3}>
              <div>This is the page to add or delete users</div>
            </div>
          
          </div>
          
          <div className='elText2' style={style_elText2_outer}>
            <div className='font-helveticaBold' style={style_elText2} onClick={this.onClick_elText2} >
              <div>Go to Main Page (Where You Can Text)</div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <button onClick={this.skipLogin}>Enter w/o Login</button> 
          
          </div>
          
        </div>

       
     

       
       
        </div>
     
      
    )
  }
  

}
