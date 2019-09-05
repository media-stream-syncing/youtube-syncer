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
import s from './Home.css';
import YoutubePlayer from '../../components/YoutubePlayer';
import { subscribeToTimer } from './io';

class Home extends React.Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
  }
  state = {
    timestamp: 'no timestamp yet'
  };
  static propTypes = {
   
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <YoutubePlayer></YoutubePlayer>
        This is the timer value: {this.state.timestamp}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
