import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SelectedWorks from './pages/SelectedWorks'
import Mountains from './pages/Mountains'
import InternationalTravel from './pages/InternationalTravel'
import './App.css'

function App() {
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
