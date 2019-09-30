import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { rootClass, containerClass } from './Home.css';
import YoutubePlayerManager from '../../../src/components/Youtube/YoutubePlayerManager/YoutubeManager';

class Home extends Component {
  static propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={rootClass}>
        <div className={containerClass}>
          <YoutubePlayerManager />
        </div>
      </div>
    );
  }
}

export default Home;
