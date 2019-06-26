import React, { Component } from 'react';
import './App.css';
import Friends_Item from './Friends_Item';
import btn_icon_54855 from './images/btn_icon_54855.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Appbar from 'muicss/lib/react/appbar';


export default class FriendsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, ds_SlotUserPhoto, ds_SlotUserID, ds_numberOfRestaurants

  constructor(props) {
    super(props);
    
    this.state = {
      pickerNumberOfRows: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_numberOfRestaurants'] : ''),
    };
  }

  onClick_elFab = (ev) => {
    // Go to screen 'Add A User'
    this.props.appActions.goToScreen('addauser', { transitionId: 'fadeIn' });
  
  }

  onClick_elText3 = (ev) => {
    // Go to outsideapp
    window.open('https://finalfordeploy.herokuapp.com/', '_blank');
  
  }
  
  
  pickerValueChanged_pickerNumberOfRows = (event) => {
    this.setState({pickerNumberOfRows: event.target.value});
    this.props.appActions.updateDataSlot("ds_numberOfRestaurants", event.target.value);
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
    
    //const dataSheet_sheet2 = this.props.dataSheets['sheet2'];
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('sheet2').items);
    
    const style_elFab = {
        display: 'block',
        color: '(null)',
        textAlign: 'left',
     };
    const style_elFab_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elCardBG = {
        width: '100%',
        height: '100%',
     };
    const style_elCardBG_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
     };
    const style_elTextNumberOfItems = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'right',
     };
    const style_elPickerNumberOfRows = {
        pointerEvents: 'auto',
     };
    let selection_pickerNumberOfRows = this.state.pickerNumberOfRows;
    // Source datasheet and selected data column for picker element 'pickerNumberOfRows'
    const dataSource_pickerNumberOfRows = this.props.appActions.getDataSheet('pickerNumberOfRows');
    const valueColumnName_pickerNumberOfRows = 'numberOfRows';
    
    
    return (
      <div className="AppScreen FriendsScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className='appBg' style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elList'>
            <div className='' style={style_elList}>
              {items_list.map((row, index) => {
                let itemClasses = `gridItem cols1_${index % 1} cols2_${index % 2} cols4_${index % 4}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <Friends_Item dataSheetId={'sheet2'} dataSheetRow={row} {...{ 'img_URL': row['img_URL'], 'img_Name': row['img_Name'], 'img_Number': row['img_Number'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </div>
          
          </div>
          
          <div className='elFab' style={style_elFab_outer}>
            <Button className='actionFont' style={style_elFab}  variant="fab" color="accent" onClick={this.onClick_elFab} >
              <img src={btn_icon_54855} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Friends</div>
          <button className="mui--appbar-height" onClick={this.onClick_elText3}>Go to Texting Page</button>
          </Appbar>

          
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elCardBG' style={style_elCardBG_outer}>
              <div className='cardBg' style={style_elCardBG} />
            
            </div>
            
            <div className='baseFont elTextNumberOfItems' style={style_elTextNumberOfItems}>
              <div>{this.props.locStrings.restaurants_text_347089}</div>
            </div>
            <Select className='baseFont elPickerNumberOfRows' style={style_elPickerNumberOfRows}  onChange={this.pickerValueChanged_pickerNumberOfRows} value={selection_pickerNumberOfRows} >
              {dataSource_pickerNumberOfRows.items.map(item => {
                const colValue = item[valueColumnName_pickerNumberOfRows];
                const labelColValue = item[valueColumnName_pickerNumberOfRows];
                return <Option key={item.key} value={colValue} label={labelColValue} />
              })}
            </Select>
           
          </div>
        </div>
      </div>
    )
  }
  

}
