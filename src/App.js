import React from 'react';
import './styles/main.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat.js";
import {BrowserRouter as Router} from 'react-dom';

function App() {
  console.log("app");
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
