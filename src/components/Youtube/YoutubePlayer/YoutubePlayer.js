import React, { useEffect, useState } from 'react';

function YoutubePlayer(video) {
  console.log(video.video)
  
  //const videoSrc = `https://www.youtube.com/embed/${video.items[1].id.videoId}`;
  const videoSrc = `https://www.youtube.com/embed/asdfasdf`;
  // return (
  //   <div>
  //     <div className="ui segment">
  //       <div className="ui embed">
  //         <iframe src={videoSrc} /> 
  //       </div>
  //       <h4 className="ui header">{video.items[1].title}</h4>
  //       <p>{video.items[1].snippet.description}</p>
  //     </div>
  //   </div>
  // );
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
