import React from 'react';

class Count extends React.Component{
  render () {
    console.log("From Count...");
    return (
      <div>
        Amount: {this.props.count}
      </div>
    )
  }
}

export default Count;
