import React, { Component } from 'react';
import Videolistitem from './video_list_item';
class Videolist extends React.Component{

  render(){

    const videoitems=this.props.videos.map((video)=>{
      return <Videolistitem onVideoSelect={this.props.onVideoSelect} key={video.etag} video={video}/>
    });
    return(
      <ul>
        {videoitems}
      </ul>
    );
  }
}
export default Videolist;
