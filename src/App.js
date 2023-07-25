import React from 'react';
import {Route} from 'wouter'
import './App.css';
import Home from './pages/Home/index'
import SearchResult from './pages/searchResult/index'

function App() {
  return (
    <div className="App">
      <section className='App-content'>
        <Route 
          path="/giffy"
          component={Home}
        />
        <Route
          component={SearchResult}
          path="/search/:keyword"
        />
      </section>
    </div>
  )
}

export default App;
