/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import YouTube from 'react-youtube';
import s from './YoutubePlayer.css';

class YoutubePlayer extends React.Component {
  static propTypes = {
    videoId: PropTypes.string
  };

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div className={s.root}>
        <div className={s.container}>
        <YouTube
        videoId={this.props.videoId}
        opts={opts}
        onReady={this._onReady}
        onPlay={this._Play}
        onPause={this._Pause}
        />
        </div>
      </div>
    );
  }
  
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  _Play(event) {
    console.log("play");
  }

  _Pause(event) {
    event.target.pauseVideo();
    console.log("pause");
  }
}

export default withStyles(s)(YoutubePlayer);
