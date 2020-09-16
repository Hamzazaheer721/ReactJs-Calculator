import React from 'react';
import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import History from "./components/History";

// HAMZA ZAHEER FA17-BCS-026
class App extends React.Component {
  constructor(props){
    super(props);

    this.state ={         // State of this class
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
      history : []
    };
  }
  


  addToInput = val => {    //appending numbers on input label
    this.setState ( {input: this.state.input + val});
  }
  clearInputAll = () => { // this method is to clear all the digits on screen
    this.setState ({input : ""});
    this.setState ({previousNumber : ""});
    this.setState ({currentNumber : ""});
    this.setState ({operator : ""});
  }
  clearInputOne = () => { // this method is to clear the previous digit
    let n = this.state.input;
    let newString = "";
    for (let i = 0 ; i < n.length-1 ; i++){
      newString += n[i];
    }
    this.setState ({input: newString});
  }
  addZeroToInput = val => {
    if (this.state.input !== ""){  //checking if zero is at start or not
      this.setState ( {input: this.state.input + val});
    }
  }
  
  addDecimal = val =>{     // checking if "." is already present in our number or not
    if (this.state.input.indexOf('.') === -1){
      this.setState ( {input: this.state.input + val});
    }
  }

  add = () => {
    //if condition will executed if user enters divide operator after
    // he had used another operator already 
      if (this.state.operator !== ""){
        this.setState({operator : "plus"});
      }
      //else condition will be executed if user presses operator button for first time
      else{
        this.setState({previousNumber: this.state.input}); 
        this.setState({input : ""});
        this.setState({operator : "plus"});
    }
  }

  multiply = () => {
    //if condition will executed if user enters divide operator after
    // he had used another operator already 
    if (this.state.operator !== ""){
      this.setState({operator : "multiply"});
    }
    //else condition will be executed if user presses operator button for first time
    else{
      this.setState({previousNumber: this.state.input}); 
      this.setState({input : ""});
      this.setState({operator : "multiply"});
    }
  }

  subtract = () => {
    //if condition will executed if user enters divide operator after
    // he had used another operator already 
    if (this.state.operator !== ""){
      this.setState({operator : "subtract"});
    }
    //else condition will be executed if user presses operator button for first time
    else{
      this.setState({previousNumber: this.state.input}); 
      this.setState({input : ""});
      this.setState({operator : "subtract"});
    }
  }

  divide = () => {
    //if condition will executed if user enters divide operator after
    // he had used another operator already  
    if (this.state.operator !== ""){   
      this.setState({operator : "divide"});
    }

    //else condition will be executed if user presses operator button for first time
    else{
      this.setState({previousNumber: this.state.input}); 
      this.setState({input : ""});
      this.setState({operator : "divide"});
    }
  
  }
  mod = () => {
    //if condition will executed if user enters divide operator after
    // he had used another operator already  
    if (this.state.operator !== ""){   
      this.setState({operator : "mod"});
    }

    //else condition will be executed if user presses operator button for first time
    else{
      this.setState({previousNumber: this.state.input}); 
      this.setState({input : ""});
      this.setState({operator : "mod"});
    }
  }

  evaluate = () => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.currentNumber = this.state.input; 



    if (this.state.operator === "divide"){
      //conversion into  numbers
      let prev = parseFloat(this.state.previousNumber,10) || 0;  
      let curr = parseFloat(this.state.currentNumber,10) || 0;
      let no = prev / curr;

      // Now updating states and history both
      this.setState(
        {
          input: no,
          previousNumber : "",
          currentNumber : "",
          operator : "",
        }
      )
      
      let v = no + ",";
      let h = this.state.history.concat(v);
      this.setState({history:h})
    }
    if (this.state.operator === "plus"){
       //conversion into  numbers
      let prev = parseFloat(this.state.previousNumber,10);  
      let curr = parseFloat(this.state.currentNumber,10);
      let no = prev + curr;
      // Now updating states and history both
      this.setState(
        {
          input: no,
          previousNumber : "",
          currentNumber : "",
          operator : ""
        }
      )
      let v = no + ",";
      let h = this.state.history.concat(v);
      this.setState({history:h})
    }
    if (this.state.operator === "subtract"){
       //conversion into  numbers
      let prev = parseFloat(this.state.previousNumber,10) || 0;  
      let curr = parseFloat(this.state.currentNumber,10) || 0;
      let no = prev - curr;
      // Now updating states and history both
      this.setState(
        {
          input: no,
          previousNumber : "",
          currentNumber : "",
          operator : ""
        }
      )
      let v = no + ",";
      let h = this.state.history.concat(v);
      this.setState({history:h})
    }
    if (this.state.operator === "multiply"){
      //conversion into  numbers
      let prev = parseFloat(this.state.previousNumber,10) || 0;  
      let curr = parseFloat(this.state.currentNumber,10) || 0;
      let no = prev * curr;
      // Now updating states and history both
      this.setState(
        {
          input: no,
          previousNumber : "",
          currentNumber : "",
          operator : ""
        }
      )
      let v = no + ",";
      let h = this.state.history.concat(v);
      this.setState({history:h})
    }
    if (this.state.operator === "mod"){
      //conversion into  numbers
      let prev = parseFloat(this.state.previousNumber,10) || 0;  
      let curr = parseFloat(this.state.currentNumber,10) || 0;
      let no = prev % curr;
      // Now updating states and history both
      this.setState(
        {
          input: no,
          previousNumber : "",
          currentNumber : "",
          operator : ""
        }
      )
      let v = no + ",";
      let h = this.state.history.concat(v);
      this.setState({history:h})
    }
  }
  render(){
    return(
      <div className = "App">
        <div className ="calc-wrapper">

          <div className = "row">
            <Input>{this.state.input}</Input>
          </div>
          <div className = "row">
            <History>{this.state.history}</History>
          </div>
          <div className = "row">
            <ClearButton handleClear = {this.clearInputOne}><b>C</b></ClearButton>
            <ClearButton handleClear = {this.clearInputAll}><b>CE</b></ClearButton>
            <Button handleClick = {this.mod}>modulus</Button>
          </div>
          <div className = "row">
            <Button handleClick = {this.addToInput}>7</Button>
            <Button handleClick = {this.addToInput}>8</Button>
            <Button handleClick = {this.addToInput}>9</Button>
            <Button handleClick = {this.divide}>/</Button>
            
          </div>
          <div className = "row">
            <Button handleClick = {this.addToInput}>4</Button>
            <Button handleClick = {this.addToInput}>5</Button>
            <Button handleClick = {this.addToInput}>6</Button>
            <Button handleClick = {this.multiply}>*</Button>
          </div>
          <div className = "row">
            <Button handleClick = {this.addToInput}>1</Button>
            <Button handleClick = {this.addToInput}>2</Button>
            <Button handleClick = {this.addToInput}>3</Button>
            <Button handleClick = {this.add}>+</Button>
          </div>
          <div className = "row">
            <Button handleClick = {this.addDecimal}>.</Button>
            <Button handleClick = {this.addZeroToInput}>0</Button>
            <Button handleClick = {this.evaluate}>=</Button>
            <Button handleClick = {this.subtract}>-</Button>
            
          </div>
          
        </div>
      </div>
    );
  }
}
export default App;