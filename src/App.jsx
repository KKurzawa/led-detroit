import './App.css';
import Footer from './components/Footer/Footer';
import Landing from './Pages/Landing/Landing';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  if (isLoading) {
    return <Landing />
  }
  return (
    <main id='app-main-container'>
      <Header />
      <Outlet />
      <Footer />
    </ main>

  )
}

export default App