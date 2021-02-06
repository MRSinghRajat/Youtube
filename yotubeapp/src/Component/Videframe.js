import React from "react";

export default function Videframe({ video }) {
  if (video == null) {
    return <div> Please Search for some item...</div>;
  } else {
    var videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe title={video.snippet.title} src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}
