import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Friends_Item_elImage_56105.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class Friends_Item extends Component {

  // Properties used by this component:
  // dataSheetRow, img_URL, img_Name, img_Number

  onClick_elImage = (ev) => {
  
  }
  
  
  onClick_elButtonReviews = (ev) => {
    let newVal = this.props.dataSheetRow.key;
    this.props.appActions.updateDataSlot('ds_selectedRestaurantId', newVal);
  
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elImage = {
        backgroundImage: 'url('+(this.props.img_URL || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_elImage_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elUser_name = {
        fontSize: 25.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const value_user_name = this.props.img_Name;
    
    const style_elUser_number = {
        fontSize: 34.4,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#3368ff',
        textAlign: 'center',
     };
    const value_user_number = this.props.img_Number;
    
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
      <div className="Friends_Item" style={baseStyle}>
        <div className="background">
          <div className='elBackgroundShape' style={style_elBackgroundShape} />
        </div>
        <div className="layoutFlow">
          <div className='elImage' style={style_elImage_outer}>
            <div className='' style={style_elImage} onClick={this.onClick_elImage}  />
          
          </div>
          
          <div className='elUser_name'>
            <div className='font-avenirNextRegular' style={style_elUser_name}>
              <div>{value_user_name !== undefined ? value_user_name : (<span className="propValueMissing">{this.props.locStrings.restaurantitem_textblockcopy2_495180}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elUser_number'>
            <div className='' style={style_elUser_number}>
              <div>{value_user_number !== undefined ? value_user_number : (<span className="propValueMissing">{this.props.locStrings.friends_item_text_167027}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elButtonReviews' style={style_elButtonReviews_outer}>
            <Button className='actionFont' style={style_elButtonReviews}  color="accent" onClick={this.onClick_elButtonReviews} >
              {this.props.locStrings.restaurantitem_button_813725}
            </Button>
          
          </div>
          
          <div className='elRectangleSpacer'>
            <div className='' style={style_elRectangleSpacer} />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
