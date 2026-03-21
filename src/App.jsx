import { HashRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ShopBikes from './pages/ShopBikes'
import BikeServiceRepair from './pages/BikeServiceRepair'
import BikeFitting from './pages/BikeFitting'
import BikeTradeIn from './pages/BikeTradeIn'
import KidsBikeTradeUp from './pages/KidsBikeTradeUp'
import Events from './pages/Events'
import GroupRides from './pages/GroupRides'
import AboutUs from './pages/AboutUs'
import HoursLocation from './pages/HoursLocation'
import ContactUs from './pages/ContactUs'
import WorkWithUs from './pages/WorkWithUs'
import JackiesPage from './pages/JackiesPage'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <NavBar />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopBikes />} />
          <Route path="/services/repair" element={<BikeServiceRepair />} />
          <Route path="/services/fitting" element={<BikeFitting />} />
          <Route path="/services/trade-in" element={<BikeTradeIn />} />
          <Route path="/services/kids-trade-up" element={<KidsBikeTradeUp />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/group-rides" element={<GroupRides />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/hours" element={<HoursLocation />} />
          <Route path="/about/contact" element={<ContactUs />} />
          <Route path="/about/work-with-us" element={<WorkWithUs />} />
          <Route path="/jackie" element={<JackiesPage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
