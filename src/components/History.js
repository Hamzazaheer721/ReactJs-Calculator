import React from 'react';
import './History.css';

class History extends React.Component {

  render(){
    return(
        <div className = "History">   
            <div className = "his1"> 
                History:
            </div>

            <div className = "his2">
                {this.props.children}
            </div>
            
        </div>
    );
  }
}
export default History;