import React from 'react';

export default class Expander extends React.Component {

  static get propTypes() {
    return {
      header: React.PropTypes.node,
      children: React.PropTypes.node.isRequired,
      footer: React.PropTypes.node,
      onClose: React.PropTypes.func,
      onOpen: React.PropTypes.func
    };
  }

  constructor() {
    super();
    this.state = { open: false };
  }

  toggleExpanded() {
    if (this.state.open) {
      this.close();
    } else {
      this.open();
    }
  }

  close() {
    this.setState({ open: false });
    React.findDOMNode(this.refs.body).scrollTop = 0;
    if (this.props.onClose) {
      this.props.onClose(this);
    }
  }

  open() {
    this.setState({ open: true });
    if (this.props.onOpen) {
      this.props.onOpen(this);
    }
  }

  render() {
    return (
      <div className="Expander" data-open={this.state.open}>
        <header className="Expander--Header">{this.props.header}</header>
        <div className="Expander--Body" ref="body">
          {this.props.children}
        </div>
        <footer className="Expander--Footer" onClick={this.toggleExpanded.bind(this)}>
          {this.props.footer}
        </footer>
      </div>
    );
  }

}
