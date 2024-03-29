import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom'

import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main className="main">
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </main>
    </div>
  );
}

export default App;
