
import './App.css'
import Banner from './Components/Banner'
import BrandCards from './Components/Brand/BrandCards'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import SellCars from './Components/SellCars'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <BrandCards></BrandCards>
      <SellCars></SellCars>
      <Features></Features>
      <Footer></Footer>
    </>
  )
}

export default App
