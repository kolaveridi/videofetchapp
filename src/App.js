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
    videos:[],
    selectedvideo:null
  }
  YTSearch({key:API_KEY,term:'term'},(data)=>{
    console.log(data);
    this.setState({
      videos:data,
      selectedvideo:data[0]
    });
  });

  this.videoSearch=this.videoSearch.bind(this);
}
videoSearch(term){
  YTSearch({key:API_KEY,term:term},(data)=>{
    console.log(data);
    this.setState({
      videos:data,
      selectedvideo:data[0]
    });
  });
}
  render() {
    return (
      <div className="App">
      <SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
      <Videodetail video={this.state.selectedvideo}/>
      <Videolist onVideoSelect={(selectedvideo)=>this.setState({  selectedvideo})} videos={this.state.videos}/>
      </div>
    );
  }
}


export default App;
