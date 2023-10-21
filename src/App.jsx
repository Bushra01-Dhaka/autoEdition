
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import BrandCards from './Components/Brand/BrandCards'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import SellCars from './Components/SellCars'

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty('--background-color', 'black');
      document.documentElement.style.setProperty('--text-color', 'white');
    } else {
      document.documentElement.style.setProperty('--background-color', 'white');
      document.documentElement.style.setProperty('--text-color', 'black');
    }
  }, [isDarkMode]);


  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}></Navbar>
      <Banner></Banner>
      <BrandCards></BrandCards>
      <Features></Features>
      <SellCars></SellCars>
      <Footer></Footer>
    </>
  )
}

export default App
