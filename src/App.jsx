import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import './App.css'
import Donation from './Components/Donation.jsx'
import Mission from './Components/Mission.jsx'
import About from './Components/About.jsx'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Navbar/>}>
  <Route path='/home' index element={<Home/>}/>
  <Route path='/mission' element={<Mission/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/donation' element={<Donation/>} /></Route>
</Routes>

</BrowserRouter>

  )
}

export default App