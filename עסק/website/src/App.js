import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time (in milliseconds) as needed

    return () => {
      clearTimeout(timer);
    };
  }, [])
  return (
    <div className="App" dir="rtl">
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
    <Footer />
</div>

  );
}

export default App;
