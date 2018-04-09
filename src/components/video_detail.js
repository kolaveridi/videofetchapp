import React, { Component } from 'react';

class Videodetail extends React.Component{

  render(){
    if(!this.props.video){
      return <div>Loading .....</div>;
    }
    const videoId=this.props.video.id.videoId;
    const url='https://www.youtube.com/embed/'+videoId;
    return(
        <div className="videodetail">
            <div>
            <iframe className="embeded-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
            <div>{this.props.video.snippet.title}</div>
            <div>{this.props.video.snippet.description}</div>
            </div>
        </div>

    );
  }
}
export default Videodetail;
