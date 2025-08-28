import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import './App.css'
import Donation from './Components/Donation.jsx'
import Join from './Components/Join.jsx'
import About from './Components/About.jsx'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
function App() {
  return (
<BrowserRouter>
  <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/home' index element={<Home/>}/>
  <Route path='/join' element={<Join/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/donation' element={<Donation/>}/>
</Routes>

</BrowserRouter>

  )
}

export default App