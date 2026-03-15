import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from '@/components/ErrorBoundary'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Solutions from '@/pages/Solutions'
import Sectors from '@/pages/Sectors'
import Contact from '@/pages/Contact'
import UssdAccess from '@/pages/UssdAccess'
import MobileApplication from '@/pages/MobileApplication'
import IotBinSensors from '@/pages/IotBinSensors'
import MonitoringPlatform from '@/pages/MonitoringPlatform'
import AboutUs from '@/pages/AboutUs'
import Careers from '@/pages/Careers'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="sectors" element={<Sectors />} />
            <Route path="contact" element={<Contact />} />
            <Route path="ussd-access" element={<UssdAccess />} />
            <Route path="mobile-application" element={<MobileApplication />} />
            <Route path="iot-bin-sensors" element={<IotBinSensors />} />
            <Route path="monitoring-platform" element={<MonitoringPlatform />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
