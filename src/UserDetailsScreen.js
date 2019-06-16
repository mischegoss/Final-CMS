import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/UserDetailsScreen_elImage_298929.jpg';
import btn_icon_342806 from './images/btn_icon_342806.png';
import btn_icon_back_userdetails from './images/btn_icon_back_userdetails.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class UserDetailsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, dataSheetRow

  onClick_elFab = (ev) => {
    let newVal = this.props.restaurantName;
    this.props.appActions.updateDataSlot('ds_selectedRestaurantName', newVal);
  
    // Go to screen 'LoginReview'
    this.props.appActions.goToScreen('loginreview', { transitionId: 'fadeIn' });
  
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
    const style_elImage = {
        backgroundImage: 'url('+(this.props.dataSheetRow ? this.props.dataSheetRow.restaurantCoverImage : '' || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elFab = {
        display: 'block',
        color: '(null)',
        textAlign: 'left',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen UserDetailsScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elImage'>
            <div style={style_elImage} />
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">User Details</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_userdetails} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont elFab' style={style_elFab}  variant="fab" color="accent" onClick={this.onClick_elFab} >
              <img src={btn_icon_342806} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          </div>
        </div>
      </div>
    )
  }
  

}
