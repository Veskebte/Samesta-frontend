import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLogin from './pages/Auth/Login.jsx'
import AuthRegister from './pages/Auth/Register.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Facilities from './pages/Facility.jsx'
import Promo from './pages/Promo.jsx'
import Inquiry from './pages/Inquiry.jsx'
import Apartment from './pages/Apartment.jsx'
import ApartmentDetail from './components/ApartmentDetail.jsx'
import ApartmentList from './components/ApartmentList.jsx'
import ApartmentFilter from './components/ApartmentFilter.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/register" element={<AuthRegister />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path='/promo' element={<Promo />} />
        <Route path='/inquiry' element={<Inquiry />} />
        <Route path='/apartments' element={<Apartment />} />
        <Route path='/apartment/list' element={<ApartmentList />} />
        <Route path='/apartment/filter' element={<ApartmentFilter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
