import React, { Component } from 'react';
import './App.css';


export default class ReviewsComp extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const dataSheet_reviews = this.props.appActions.getDataSheet('reviews');
    
    return (
      <div className="ReviewsComp" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elList'>
            <div />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
