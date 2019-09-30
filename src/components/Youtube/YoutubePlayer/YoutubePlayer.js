import React from 'react';

const YoutubePlayer = ({video}) => {

  if (!video) return <div>Loading </div>;
  const videoSrc = `https://www.youtube.com/embed/${video.videoId}`
  return (
    <div>

      <div className="ui segment">
        <div className='ui embed'>
          <iframe src={videoSrc}/>
        </div>
        <h4 className="ui header">{video.title}</h4>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default YoutubePlayer;
