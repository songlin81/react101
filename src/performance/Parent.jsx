import React from 'react';
import Count from './Count';
import Title from './Title';

class Parent extends React.Component{
  state ={
    title: "PureComponent",
    count: 0
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  render () {
    return (
      <div>
        <Title title={this.state.title}></Title>
        <Count count={this.state.count}></Count>
      </div>
    )
  }
}

export default Parent;