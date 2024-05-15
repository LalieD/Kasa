import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import './styles/index.scss';
import Router from './router/Router';


function App() {
  
  return (
      <Router />
  );
}

export default App;
