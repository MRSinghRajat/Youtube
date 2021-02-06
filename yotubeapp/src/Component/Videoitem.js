import React from "react";
import "./Videoitem.css";

function Videoitem({ video, onVideoSelect }) {
    
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">{video.snippet.title}</div>
    </div>
  );
}

export default Videoitem;
