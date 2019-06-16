import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/AddAUserScreen_elImage_200875.jpg';
import btn_icon_back_addauser from './images/btn_icon_back_addauser.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class AddAUserScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, ds_SlotUserName, ds_SlotUserPhoto, ds_SlotUserPhone, ds_Slotnew_user, ds_Slot_userURL

  constructor(props) {
    super(props);
    
    this.state = {
      user_name: this.props.ds_SlotUserName || '',
      user_number: this.props.ds_SlotUserPhone || '',
      manual_user_name: this.props.ds_Slotnew_user || '',
      manual_user_phone: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SlotUserPhone'] : '') || '',
      manual_user_URL: this.props.ds_Slot_userURL || '',
    };
  }

  textInputChanged_user_name = (event) => {
    this.setState({user_name: event.target.value});
  }
  
  textInputChanged_user_number = (event) => {
    this.setState({user_number: event.target.value});
  }
  
  onClick_elSendButton = (ev) => {
    this.sendData_sendButton_to_sheet2();
  
  
  }
  
  
  textInputChanged_manual_user_name = (event) => {
    this.setState({manual_user_name: event.target.value});
  }
  
  textInputChanged_manual_user_phone = (event) => {
    this.setState({manual_user_phone: event.target.value});
  }
  
  textInputChanged_manual_user_URL = (event) => {
    this.setState({manual_user_URL: event.target.value});
  }
  
  onClick_elButton = (ev) => {
    this.sendData_button_to_sheet2();
  
  }
  
  
  sendData_button_to_sheet2 = () => {
    const dataSheet = this.props.appActions.getDataSheet('sheet2');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      img_URL: this.state.manual_user_URL,
      img_Name: this.state.manual_user_name,
      img_Number: this.state.manual_user_phone,
    };
    this.props.appActions.addToDataSheet('sheet2', row);
  }
  
  
  sendData_sendButton_to_sheet2 = () => {
    const dataSheet = this.props.appActions.getDataSheet('sheet2');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      img_URL: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SlotUserPhoto'] : ''),
      img_Name: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SlotUserName'] : ''),
      img_Number: this.state.user_number,
    };
    this.props.appActions.addToDataSheet('sheet2', row);
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
        backgroundImage: 'url('+(this.props.ds_SlotUserPhoto || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_elUser_name = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const value_user_name = this.state.user_name;
    
    const style_elUser_name_outer = {
        pointerEvents: 'auto',
     };
    const style_elUser_number = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const value_user_number = this.state.user_number;
    
    const style_elUser_number_outer = {
        pointerEvents: 'auto',
     };
    const style_elSendButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elSendButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elText = {
        fontSize: 15.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#1d06ff',
        textAlign: 'center',
     };
    const style_elManual_user_name = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const value_manual_user_name = this.state.manual_user_name;
    
    const style_elManual_user_name_outer = {
        pointerEvents: 'auto',
     };
    const style_elManual_user_phone = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const value_manual_user_phone = this.state.manual_user_phone;
    
    const style_elManual_user_phone_outer = {
        pointerEvents: 'auto',
     };
    const style_elManual_user_URL = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const value_manual_user_URL = this.state.manual_user_URL;
    
    const style_elManual_user_URL_outer = {
        pointerEvents: 'auto',
     };
    const style_elButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen AddAUserScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className='appBg' style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elImage'>
            <div className='' style={style_elImage} />
          
          </div>
          
          <div className='elUser_name' style={style_elUser_name_outer}>
            <input className='baseFont' style={style_elUser_name} type="text" placeholder={this.props.locStrings.addreview_reviewtextcopy_367397} onChange={this.textInputChanged_user_name} value={value_user_name !== undefined ? value_user_name : ''}  />
          
          </div>
          
          <div className='elUser_number' style={style_elUser_number_outer}>
            <input className='baseFont' style={style_elUser_number} type="text" placeholder={this.props.locStrings.addreview_field_786827} onChange={this.textInputChanged_user_number} value={value_user_number !== undefined ? value_user_number : ''}  />
          
          </div>
          
          <div className="flowRow flowRow_AddAUserScreen_elSendButton_596452">
          <div className='elSendButton' style={style_elSendButton_outer}>
            <Button className='actionFont' style={style_elSendButton}  color="accent" onClick={this.onClick_elSendButton} >
              {this.props.locStrings.addreview_button_596452}
            </Button>
          
          </div>
          
          </div>
          <div className='elText'>
            <div className='' style={style_elText}>
              <div>{this.props.locStrings.addauser_text_993609}</div>
            </div>
          
          </div>
          
          <div className='elManual_user_name' style={style_elManual_user_name_outer}>
            <input className='baseFont' style={style_elManual_user_name} type="text" placeholder={this.props.locStrings.addauser_field_514032} onChange={this.textInputChanged_manual_user_name} value={value_manual_user_name !== undefined ? value_manual_user_name : ''}  />
          
          </div>
          
          <div className='elManual_user_phone' style={style_elManual_user_phone_outer}>
            <input className='baseFont' style={style_elManual_user_phone} type="text" placeholder={this.props.locStrings.addauser_field_257389} onChange={this.textInputChanged_manual_user_phone} value={value_manual_user_phone !== undefined ? value_manual_user_phone : ''}  />
          
          </div>
          
          <div className='elManual_user_URL' style={style_elManual_user_URL_outer}>
            <input className='baseFont' style={style_elManual_user_URL} type="text" placeholder={this.props.locStrings.addauser_field_531510} onChange={this.textInputChanged_manual_user_URL} value={value_manual_user_URL !== undefined ? value_manual_user_URL : ''}  />
          
          </div>
          
          <div className='elButton' style={style_elButton_outer}>
            <Button className='actionFont' style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.addauser_button_70349}
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Add A User</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_addauser} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  

}
