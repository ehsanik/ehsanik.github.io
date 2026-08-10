import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SelectedWorks from './pages/SelectedWorks'
import Mountains from './pages/Mountains'
import InternationalTravel from './pages/InternationalTravel'
import './App.css'

const PAGE_META = {
  '/': { title: 'Kiana Ehsani' },
  '/selected-works': { title: 'Selected Works — Kiana Ehsani' },
  '/mountains': { title: 'Mountains — Kiana Ehsani' },
  '/travel-checklist': { title: 'International Travel Checklist — Kiana Ehsani' },
}

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = PAGE_META[pathname] || PAGE_META['/']
    document.title = meta.title
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.href = `https://kianaehsani.com${pathname === '/' ? '/' : pathname}`
    }
  }, [pathname])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/selected-works" element={<SelectedWorks />} />
        <Route path="/mountains" element={<Mountains />} />
      </Route>
      <Route path="/travel-checklist" element={<InternationalTravel />} />
    </Routes>
  )
}

export default App
