import React, { Component } from 'react';
import SearchBar from '../SearchBar.js/SearchBar';
import youtubeApi from '../../Apis/youtube';
import YoutubePlayer from '../YoutubePlayer/YoutubePlayer';
// import youtubeParams form '../../Apis/youtube'
// import YoutubePlayer from '../YoutubePlayer/YoutubePlayer';

class YoutubePlayerManager extends Component {
  // {/* <YoutubePlayer videoId="R0ykLlhg0AQ" /> */}
  state = { videoList: null, selectedVideo: null };

  // Fetch Videos based on Search term
  onSearchSubmit = term => {
    const response = youtubeApi
      .get('/search', {
        params: {
          q: term,
        },
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    // this.setState({ videoList: response.data.iterm});
    // this.setState({ videoList: response.data.iterm});

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
