import React from 'react';
import './ClearButton.css';
// HAMZA ZAHEER FA17-BCS-026
class ClearButton extends React.Component {

  render(){
    return(
        <div className = "clear-btn"       
         onClick ={()=> this.props.handleClear()}
        >
            {this.props.children}
        </div>
    );
  }
}
export default ClearButton;