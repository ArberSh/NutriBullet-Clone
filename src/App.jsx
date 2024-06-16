import './App.css'
import Landing from './component/Landing'
import AboutUs from './component/AboutUs'
import BestProducts from './component/BestProducts'
import Footer from './component/Footer'

function App() {

  return (
    <div className='overflow-hidden'>
      <Landing></Landing>
      <AboutUs></AboutUs>
      <BestProducts></BestProducts>
      <Footer></Footer>
    </div>
  )
}

export default App
