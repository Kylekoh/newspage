import React from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/Main';
import Title from './components/Title';
import Header from './components/Header';
import Reply from './components/Reply';
import Footer from './components/Footer';
import Advertisement from './components/Advertisement';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Title></Title>
      <Main></Main>
      <Advertisement></Advertisement>
      <Reply></Reply>
      <Footer></Footer> 
    </div>
  );
}

export default App;