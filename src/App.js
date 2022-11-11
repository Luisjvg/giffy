import React from 'react';
import './App.css';
import Home from './pages/Home/index'
import {Route} from 'wouter'
import ListOfGifs from './components/ListOfGifs/ListOfGifs'

function App() {
  return (
    <div className="App">
      <section className='App-content'>
        <Route 
          path="/" 
          component={Home}
        />
        <Route
          component={ListOfGifs}
          path="/search/:keyword"
        />
      </section>
    </div>
  )
}

export default App;
