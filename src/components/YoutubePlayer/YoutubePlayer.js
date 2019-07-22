import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './YoutubePlayer.css';

class YoutubePlayer extends React.Component {
  static propTypes = {
    YTLInk: PropTypes.string
  };

  render() {
      return(
      <div>
         <iframe id="ytplayer" type="text/html" width="640" height="360"
            src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
            frameBorder="0">

        </iframe> 
      </div>
      );
  }
}

export default withStyles(s)(YoutubePlayer)