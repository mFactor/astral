import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from 'app/less/home.less';

/**
 * Base (or root) component for application
 */
@withStyles(style)
export default class Home extends React.Component {
  static propTypes = {
    children: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
    };
    console.log('test son');
  }

  render() {
    return (
      <div id='home-view'>
        Some home shit or something likes thats
      </div>
    );
  }
}
