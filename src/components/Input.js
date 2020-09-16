import React from 'react';
import './Input.css';
// HAMZA ZAHEER FA17-BCS-026
class Input extends React.Component {

  render(){
    return(
        <div className = "input">
            {this.props.children}
        </div>
    );
  }
}
export default Input;