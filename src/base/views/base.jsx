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
        <h1>bss</h1>
        {this.props.children}
      </div>
    );
  }
}
