import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputTask from './components/inputtask';
import EditTask from './components/edittask';
import ListTask from './components/listtask';
class App extends React.Component {
  render()
  {
    return(
      <div className="body">
        <InputTask/>
        <ListTask/>
      </div>
    )
  }
}

export default App;
