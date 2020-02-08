import React from 'react';
import ContentHeader from './ContentHeader';

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="faded-branded-gradient">
        <div className="main-content mx-auto mb-5 p-0">
          <ContentHeader contentHeader={this.props.contentHeader} />
          <div className="p-3">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
