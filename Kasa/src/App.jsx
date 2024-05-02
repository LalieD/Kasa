import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './styles/index.scss'
import Home from './pages/Home';
import About from './pages/About'; 
import NotFound from './pages/NotFound';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
