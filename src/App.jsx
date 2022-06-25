import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Clock from './components/Clock';
import Mailbox from './components/Mailbox';
import PageW from './components/Page';
import NumberList from './components/NumberList';
import Blog from './components/Blog';
import Counter from './components/Counter';
import UserGist from './components/UserGist';
import RefsComponent from './components/RefsComponent';
import HelloMessage from './components/HelloMessage';
import FlavorForm from './components/FlavorForm';
import Reservation from './components/Reservation';

import './i18n/config';
import './components/HomeComponent';
import HomeComponent from './components/HomeComponent';

import AxiosComponent from './components/AxiosComponent';

function App() {
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  const numbers = [1, 2, 3, 4, 5];
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Name className="App-link" name="React 101" />
        <Clock />
        <Mailbox unreadMessages={messages} />
        <PageW />
        <NumberList numbers={numbers} />
        <Blog posts={posts} />
        <Counter />
        <UserGist source="https://api.github.com/users/octocat/gists" />
        <RefsComponent />
        <HelloMessage />
        <FlavorForm />
        <Reservation />
        <HomeComponent />
        <AxiosComponent />
      </header>
    </div>
  );
}

export default App;
