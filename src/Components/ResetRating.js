import React, { Component } from 'react';
import ReactRating from 'react-rating';

class ResetRating extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0};
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      this.setState({value: undefined});
    }
  
    render() {
      return (
        <div>
          <ReactRating {...this.props} initialRating={this.state.value}/>
          <button onClick={this.handleClick}>Save</button>
        </div>
      );
    }
  }
  
<ResetRating placeholderRating={3}/>

export default ResetRating;
  