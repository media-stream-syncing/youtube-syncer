import React, { Component } from 'react';
import SearchBar from '../SearchBar.js/SearchBar';
import youtubeApi from '../../Apis/youtube';
import YoutubePlayer from '../YoutubePlayer/YoutubePlayer';
// import youtubeParams form '../../Apis/youtube'
// import YoutubePlayer from '../YoutubePlayer/YoutubePlayer';
var youtubeApiClient = require('request-promise');
const KEY = 'AIzaSyBoTvIBD-2vU7gDgCtUaGdNFUGZmrp0uRU';
const MAXVIDEORESULT = 5;


class YoutubePlayerManager extends Component {

  // {/* <YoutubePlayer videoId="R0ykLlhg0AQ" /> */}
  state = { videoList: null, selectedVideo: null };

  // Fetch Videos based on Search term
  onSearchSubmit = term => {
    var options = {
      uri: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${KEY}&maxResult=${MAXVIDEORESULT}&q=${term}`,
      json: true
    }
    youtubeApiClient(options)
    .then(res => console.log(res))

    // Temp;
    this.onVideoSelect(videoObject);
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <div className="ui container">
          <SearchBar onFormSubmit={this.onSearchSubmit} />
          <YoutubePlayer video={this.state.selectedVideo} />
        </div>
      </div>
    );
  }
}
const videoObject = {
  title: `SiR - D'Evils`,
  description: 'slow motion',
  videoId: 'txZVJ24UVUs',
};

export default YoutubePlayerManager;
