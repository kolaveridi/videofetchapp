import React, { Component } from 'react';
import Videodetail from './video_list';
class  Videolistitem extends React.Component {

  render(){
    const onVideoSelect=this.props.onVideoSelect;
    const ImageUrl=this.props.video.snippet.thumbnails.default.url;//thgis is thumbnail of the image
    const title=this.props.video.snippet.title;
    return(
        <div>
        <li onClick={()=>onVideoSelect(this.props.video)} className="list-group-item">
         <div className="video-list-media">
          <div className="media-left">
            <img className="media-object" src={ImageUrl}/>
          </div>
          <div className="media-body">
          <div className="media-heading">{title}</div>
          </div>
        </div>
     </li>
     </div>
    );
  }
}
export default Videolistitem;
