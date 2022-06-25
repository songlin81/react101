import FormattedDate from './FormattedDate';
import React from 'react';
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: true,
      isLoggedIn: false
    };

    //this.handleClick = this.handleClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
 
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  handleClick(status) {
    console.log(status);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
 
  tick() {
    this.setState({
      date: new Date()
    });
  }
 
  render() {
    const isLogged = this.state.isLoggedIn;
    let button = null;
    if (isLogged) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <FormattedDate date={this.state.date} />
        
        <button onClick={(e) => this.handleClick(this.state.isToggleOn, e)}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <br/>
        <Greeting isLoggedIn={this.state.isToggleOn} />

        {button}
      </div>
    );
  }

  
}

export default Clock;
