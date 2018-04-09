import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import Videolist from './components/video_list';
import Videodetail from './components/video_detail';
const API_KEY='AIzaSyA4c4bzl1At2c0IAJXU939D1vAIUwAn3Ss';

class App extends Component {
  constructor(props){
  super(props)
  this.state={
    videos:[]
  }

  YTSearch({key:API_KEY,term:'surfboards'},(data)=>{
    console.log(data);
    this.setState({
      videos:data
    });
  });
}
  render() {
    return (
      <div className="App">
      <SearchBar/>
      <Videodetail video={this.state.videos[0]}/>
      <Videolist videos={this.state.videos}/>
      </div>
    );
  }
}


export default App;
