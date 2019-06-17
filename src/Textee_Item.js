import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Textee_Item_elImage_56105.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class Textee_Item extends Component {

  // Properties used by this component:
  // dataSheetRow, img_Name, img_Number, img_URL

 
  onClick_elList = (ev) => {
    // Remove row from connected sheet
    this.props.appActions.removeFromDataSheet(this.props.dataSheetId, this.props.dataSheetRow);
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    //let layoutFlowStyle = {};
    
    const style_elBackgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elImage = {
        backgroundImage: 'url('+(this.props.img_URL || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_elRestaurantName = {
        fontSize: 25.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_userName = this.props.img_Name;
    
    const style_elAddressCopy = {
        fontSize: 19.4,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_addressCopy = this.props.img_Number;
    
    const style_elButtonReviews = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButtonReviews_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elRectangleSpacer = {
        background: 'rgba(252, 253, 253, 1.000)',
     };
    
    return (
      <div className="Textee_Item" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_elBackgroundShape} />
        </div>
        <div className="layoutFlow">
          <div className='elImage'>
            <div style={style_elImage} />
          
          </div>
          
          <div className='font-avenirNextRegular  elRestaurantName'>
            <div style={style_elRestaurantName}>
              <div>{value_userName !== undefined ? value_userName : (<span className="propValueMissing">{this.props.locStrings.restaurantitem_textblockcopy2_495180}</span>)}</div>
            </div>
          
          </div>
          
          <div className='font-avenirBook  elAddressCopy'>
            <div style={style_elAddressCopy}>
              <div>{value_addressCopy !== undefined ? value_addressCopy : (<span className="propValueMissing">{this.props.locStrings.restaurantitem_addresscopy_1012676}</span>)}</div>
            </div>
          
          </div>
          
          <div className='actionFont elButtonReviews' style={style_elButtonReviews_outer}>
            <Button style={style_elButtonReviews}  color="accent" onClick={this.onClick_elList} >
              {this.props.locStrings.restaurantitem_button_813725}
            </Button>
          
          </div>
          
          <div className='elRectangleSpacer'>
            <div style={style_elRectangleSpacer} />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
