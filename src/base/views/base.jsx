import React from 'react';

/**
 * Base (or root) component for application
 */
export default class Base extends React.Component {
  static propTypes = {
    children: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id='base-view'>
        {this.props.children}
      </div>
    );
  }
}
