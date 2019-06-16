import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/RestaurantDetailsScreen_elImage_298929.jpg';
import btn_icon_342806 from './images/btn_icon_342806.png';
import btn_icon_back_restaurantdetails from './images/btn_icon_back_restaurantdetails.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class RestaurantDetailsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, dataSheetRow, restaurantName, img_URL, img_Name

  onClick_elFab = (ev) => {
    let newVal = this.props.restaurantName;
    this.props.appActions.updateDataSlot('ds_selectedRestaurantName', newVal);
  
    // Go to screen 'Write a Review'
    this.props.appActions.goToScreen('writeareview', { transitionId: 'fadeIn' });
  
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
        backgroundImage: 'url('+(this.props.img_URL || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elRestaurantName = {
        fontSize: 25.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_restaurantName = this.props.img_Name;
    
    const style_elTextRestaurantWWW = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textRestaurantWWW = this.props.dataSheetRow ? this.props.dataSheetRow.restaurantWWW : '';
    
    const style_elLine = {
        borderTop: '1px solid black',
     };
    const style_elFab = {
        display: 'block',
        color: '(null)',
        textAlign: 'left',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elTextBlock = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textBlock = this.props.img_URL;
    
    
    return (
      <div className="AppScreen RestaurantDetailsScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elImage'>
            <div style={style_elImage} />
          
          </div>
          
          <div className='font-avenirNextRegular  elRestaurantName'>
            <div style={style_elRestaurantName}>
              <div>{value_restaurantName !== undefined ? value_restaurantName : (<span className="propValueMissing">{this.props.locStrings.restaurantdetails_restaurantname_578163}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elTextRestaurantWWW'>
            <div style={style_elTextRestaurantWWW}>
              <div>{value_textRestaurantWWW !== undefined ? value_textRestaurantWWW : (<span className="propValueMissing">{this.props.locStrings.restaurantdetails_textdescriptioncopy_421084}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elLine'>
            <div style={style_elLine} />
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">RestaurantDetails</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_restaurantdetails} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont elFab' style={style_elFab}  variant="fab" color="accent" onClick={this.onClick_elFab} >
              <img src={btn_icon_342806} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
            <div className='baseFont elTextBlock' style={style_elTextBlock}>
              <div>{value_textBlock !== undefined ? value_textBlock : (<span className="propValueMissing">{this.props.locStrings.restaurantdetails_textblock_70976}</span>)}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
