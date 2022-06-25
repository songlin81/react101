import React from 'react';
import Content from './Content';

class HelloMessage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: 'React 101!'};
      //this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    var value = this.state.value;
    return <div>
            <Content 
              myDataProp = {value} 
              updateStateProp = {this.handleChange.bind(this)}>  
            </Content>
           </div>;
  }
}

export default HelloMessage;
