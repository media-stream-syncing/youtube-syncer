import React, { useEffect, useState } from 'react';

function YoutubePlayer(video) {
  if (video.video != null) {
    console.log(video.video)
  }
  console.log(video)

  if (video.video != null && video.video[1] != null) {
    const videos = [];
    video.video.forEach(result => {
      if(result.id.kind === "youtube#channel") {
        return;
      }
      videos.push(<div className="ui segment">
                    <div className="ui embed">
                      <iframe src={`https://www.youtube.com/embed/${result.id.videoId}`} /> 
                    </div>
                    <h4 className="ui header">{result.snippet.title}</h4>
                    <p>{result.snippet.description}</p>
                  </div>);
    })
    
    return (
      <div>
        {videos}
      </div>
    );
  }
  return (
    <div>
      <div className="ui segment">
        <div className="ui embed">
          {/* <iframe src={videoSrc} />  */}
        </div>
        {/* <h4 className="ui header">{video.items[1].title}</h4> */}
        {/* <p>{video.items[1].snippet.description}</p> */}
      </div>
    </div>
  );
};

export default YoutubePlayer;
