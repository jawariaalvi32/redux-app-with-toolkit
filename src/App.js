import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import AddTodo from './components/AddTodo';
import Post from './components/posts/Posts';

function App() {
  return (
    <div className="App">
      <Counter />
      <AddTodo/>
      <Post/>
    </div>
  );
}

export default App;
