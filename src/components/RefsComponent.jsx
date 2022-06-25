import React from 'react';

class RefsComponent extends React.Component {
  handleClick() {
    this.refs.myInput.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref="myInput" />
        <input
          type="button"
          value="Click to focus"
          onClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}

export default RefsComponent;