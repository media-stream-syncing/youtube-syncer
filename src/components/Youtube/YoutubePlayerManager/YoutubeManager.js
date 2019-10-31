import React, { useState } from 'react';
import SearchBar from '../SearchBar.js/SearchBar';
import youtubeApi from '../../Apis/youtube';
import YoutubePlayer from '../YoutubePlayer/YoutubePlayer';
import useDataApi from '../useDataApi.js';
// import youtubeParams form '../../Apis/youtube'
// import YoutubePlayer from '../YoutubePlayer/YoutubePlayer';
const youtubeApiClient = require('request-promise');

const KEY = 'AIzaSyBoTvIBD-2vU7gDgCtUaGdNFUGZmrp0uRU';
const MAXVIDEORESULT = 5;

function YoutubePlayerManager() {
  // {/* <YoutubePlayer videoId="R0ykLlhg0AQ" /> */}
  let videoPractice = {
    title: `SiR - D'Evils`,
    description: 'slow motion',
    videoId: 'txZVJ24UVUs',
  };

  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${KEY}&maxResult=${MAXVIDEORESULT}&q=kendrick`,
    { hits: [] },
  );

  return (
    <div>
      <div className="ui container">
        <SearchBar onFormSubmit={term => doFetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${KEY}&maxResult=${MAXVIDEORESULT}&q=${term}`,)} />
        <YoutubePlayer video={data.items} />
      </div>
    </div>
  );
}

export default YoutubePlayerManager;
