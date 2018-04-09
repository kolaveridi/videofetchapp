import React, { Component } from 'react';
class  SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      term:''
    };
    this.onInputChange=this.onInputChange.bind(this);
  }
  render(){
     return(
      <div>
       <input value={this.state.term} onChange={this.onInputChange}/>
       Value of the input is : {this.state.term}
      </div>
     );
  }
  onInputChange(event){
    this.setState({
     term:event.target.value
    })
  }
}
export default SearchBar;
