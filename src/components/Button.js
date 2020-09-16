import React from 'react';
import './Button.css';
// HAMZA ZAHEER FA17-BCS-026
class Button extends React.Component {
    isOperator = val =>{ //checking if it is operator or not
        return !isNaN(val) || val === "." || val === "=" || val === "C" 
         || val === "CE" || val === "History";
    };
  render(){
    return(     //if operator then its pattern will be different
      <div className = {`button ${this.isOperator  
        (this.props.children)? "" : "operator"}`}
        onClick= {() => this.props.handleClick(this.props.children)}
        >
        {this.props.children}
      </div>
    );
  }
}
export default Button;