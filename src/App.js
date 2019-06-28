import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import './App.css';
import AddAUserScreen from './AddAUserScreen.js';
import FriendsScreen from './FriendsScreen.js';
import Logout from './logout.js'
import LoginMainScreen from './LoginMainScreen.js';
import DataSheet_sheet2 from './DataSheet_sheet2.js';
import DataSheet_localizationSheet from './DataSheet_localizationSheet.js';
import DataSheet_pickerNumberOfRows from './DataSheet_pickerNumberOfRows.js';
import firebase from 'firebase';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.dataSheets = {};
    this.dataSheets['sheet2'] = new DataSheet_sheet2('sheet2', this.dataSheetDidUpdate);
    this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet', this.dataSheetDidUpdate);
    this.dataSheets['pickerNumberOfRows'] = new DataSheet_pickerNumberOfRows('pickerNumberOfRows', this.dataSheetDidUpdate);

    this.dataSlots = {};
    this.dataSlots['ds_activeLang'] = "en";
  
    this.dataSlots['ds_numberOfRestaurants'] = "10";
    this.dataSlots['ds_SlotUserID'] = "";
    this.dataSlots['ds_SlotUserName'] = "";
    this.dataSlots['ds_SlotUserEmail'] = "";
    this.dataSlots['ds_SlotUserPhone'] = "";
    this.dataSlots['ds_Slotnew_user'] = "";

    this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);


    // Initialize web service plugin 'firebase 1'
    firebase.initializeApp({
        apiKey: "AIzaSyD98BZnif_88GJQuy_cF67rBJHn_xianFs",
        authDomain: "texterimages.firebaseapp.com",
        databaseURL: "https://texterimages.firebaseio.com",
        projectId: "texterimages",
        storageBucket: "texterimages.appspot.com",
        messagingSenderId: "592534977480",
        appId: "1:592534977480:web:ee43d9435e5a242d"
      });
    firebase.firestore().settings({});
    
    this.serviceOptions_sheet2 = {
      dataSlots: this.dataSlots,
      servicePath: "Textees",
      query: "",
    };
    this.dataSheets['sheet2'].firebase = firebase;
    

    this.state = {
      currentScreen: 'loginmain',
      currentScreenProps: {},
      screenTransitionForward: true,
    }
    this.screenHistory = [ {...this.state} ];

  }
// Formats for different size phones
  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);

    this.serviceOptions_sheet2.servicePath = this.dataSheets['sheet2'].expandSlotTemplateString("Textees", this.dataSlots);
    this.loadData_firebase1(this.dataSheets['sheet2'], this.serviceOptions_sheet2, true);
    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  isLoading() {
    return this.state.loading;
  }

  // Screen History
  goToScreen = (screenId, props) => {
   

    let screenIdx = -1;  
    for (let i = 0; i < this.screenHistory.length; i++) {
      if (this.screenHistory[i].currentScreen === screenId) {
        screenIdx = i;
        break;
      }
    }
    if (screenIdx > -1) {
      this.screenHistory.splice(screenIdx + 1, this.screenHistory.length - screenIdx - 1);
      let prevScreenState = this.screenHistory[screenIdx];
      this.setState({...prevScreenState, screenTransitionForward: false});
    }
    else {
      props = props || {};
      let screenState = {currentScreen: screenId, currentScreenProps: props};
      this.screenHistory.push(screenState);
      this.setState({...screenState, screenTransitionForward: true});
    }
    window.scrollTo(0, 0);
  }

  //Go Back Logic 
  goBack = () => {
   
    if (this.screenHistory.length < 2)
      return;

    this.screenHistory.splice(this.screenHistory.length - 1, 1);
    let prevScreenState = this.screenHistory[this.screenHistory.length - 1];
    this.setState({...prevScreenState, screenTransitionForward: false});
    window.scrollTo(0, 0);
  }

  getDataSheet = (sheetId) => {
    
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, newRow, actionId) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && newRow) {
      sheet.addItem(newRow, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateInDataSheet = (sheetId, row, actionId) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.replaceItemByKey(row.key, row, this['serviceOptions_'+sheetId] || {});

      if (this.state.currentScreenProps.dataSheetRow) {
        let screenProps = {...this.state.currentScreenProps};
        screenProps.dataSheetRow = row;

        for (let prop in screenProps) {
          if (row[prop] !== undefined) {
            screenProps[prop] = row[prop];
          }
        }
        this.setState({currentScreenProps: screenProps});
      } else {
        this.setState({});
      }
    }
  }

  removeFromDataSheet = (sheetId, row) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.removeItem(row, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateDataSlot = (slotId, value, actionId) => {
   
    this.dataSlots[slotId] = value;
    if (slotId === 'ds_activeLang') {
      this.locStrings.setLanguage(value);
    }

    {
      let usedSlots = [];
      let servicePath = this.dataSheets['sheet2'].expandSlotTemplateString("Textees", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        
        this.serviceOptions_sheet2.servicePath = servicePath;
        this.loadData_firebase1(this.dataSheets['sheet2'], this.serviceOptions_sheet2, true);
      }
    }
    this.setState({});
  }

  dataSheetDidUpdate = (dataSheet) => {
   
    this.setState({});
  }

  updateLocalizationFromDataSheet = (dataSheet) => {
    const stringsObj = dataSheet.getStringsByLanguage();
    if (stringsObj && Object.keys(stringsObj).length > 0) {
      this.locStrings = new LocalizedStrings(stringsObj);
    } else {
      this.locStrings = new LocalizedStrings({en: {}});
    }
    this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);
  } 
//Firebase Logic
  loadData_firebase1 = (dataSheet, options, firstLoad) => {
  
   this.setState({loading: true});
    
    if (firstLoad) {
      dataSheet.items = [];
    }
    
    const fetchComplete = (err) => {
      if (err) {

        console.error('** Web service load failed: ', err);
      } else {
      }
      this.setState({loading: false});
    }
    
    const db = firebase.firestore();
    const collection = db.collection(options.servicePath);
    const query = dataSheet.expandSlotTemplateString(options.query, this.dataSlots);
    let queryObj;
    
    if (query.length < 1) {
      queryObj = collection;
    } else {
      console.log("loading firebase data for '%s' with query: %s", options.servicePath, query);
      try {
        queryObj = eval(`(function(c){ return c.${query}; })(collection)`);
      } catch (e) {
        console.log("** error creating firebase query object from '%s': ", query, e)
        return;
      }
    }
    
    queryObj.onSnapshot(
      (querySnapshot) => {
        let jsonArr = [];
        
        if (querySnapshot.docs) {
          querySnapshot.forEach((doc) => {
            const data = { ...doc.data(), document_key: doc.id };
            jsonArr.push(data);
          });
        } else if (querySnapshot.data) {
          const doc = querySnapshot;
          const data = { ...doc.data(), document_key: doc.id };
          jsonArr.push(data);
        }    
            
        dataSheet.loadFromJson(jsonArr);
        fetchComplete(null, options);  
      },
      (err) => {
        fetchComplete(err, options);
      });  
    
  }

  render() {
    let makeElementForScreen = (screenId, baseProps, atTop, forward) => {
      let screenProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        dataSheets: this.dataSheets,
        locStrings: this.locStrings,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
        'ds_activeLang': this.dataSlots['ds_activeLang'],
        
        'ds_numberOfRestaurants': this.dataSlots['ds_numberOfRestaurants'],
        'ds_SlotUserID': this.dataSlots['ds_SlotUserID'],
        'ds_SlotUserName': this.dataSlots['ds_SlotUserName'],
        'ds_SlotUserEmail': this.dataSlots['ds_SlotUserEmail'],
        'ds_SlotUserPhoto': this.dataSlots['ds_SlotUserPhoto'],
       
        'ds_SlotUserPhone': this.dataSlots['ds_SlotUserPhone'],
        'ds_Slotnew_user': this.dataSlots['ds_Slotnew_user'],
      };
     
      const dataSheetRow_FriendsScreen = this.dataSheets['sheet2'].items[0];
      const screenData_FriendsScreen = {
        ...dataSheetRow_FriendsScreen,
        dataSheetRow: dataSheetRow_FriendsScreen,
      }
      switch (screenId) {
        default:
          return null;
        case 'addauser':
          return (<AddAUserScreen {...screenProps} />)
        case 'friends':
          return (<FriendsScreen {...screenProps} {...screenData_FriendsScreen} />)
        case 'loginmain':
          return (<LoginMainScreen {...screenProps} />)
        case 'logout':
          return (<Logout {...screenProps}/>)
      }
    }

    let screenEl = makeElementForScreen(this.state.currentScreen, this.state.currentScreenProps, true, this.state.screenTransitionForward);
    let prevScreenEl = null;
    if (this.screenHistory.length >= 2) {  // For transitions, we want to show the previous screen below
      let prevScreenState = this.screenHistory[this.screenHistory.length - 2];
      prevScreenEl = makeElementForScreen(prevScreenState.currentScreen, prevScreenState.currentScreenProps, false, this.state.screenTransitionForward);
    }

    return (
      <div className="App">
        {prevScreenEl}
        {screenEl}
      </div>
    );
  }
}
