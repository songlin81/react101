import React from 'react';

class RefsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.myInput = React.createRef();
  }

  handleClick() {
    this.myInput.current.focus();

  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myInput} />
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