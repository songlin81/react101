import React from 'react';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'fb'}; //try with gg
  }
 
  handleChange(event) {
    this.setState({value: event.target.value});
  }
 
  handleSubmit(event) {
    alert('fav site is: ' + this.state.value);
    event.preventDefault();
  }
 
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Favourite Site:
          <select value={this.state.value} onChange={this.handleChange.bind(this)}>
            <option value="gg">Google</option>
            <option value="fb">Facebook</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlavorForm;
