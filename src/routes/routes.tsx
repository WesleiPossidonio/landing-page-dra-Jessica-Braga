import { Routes, Route } from 'react-router-dom'
import { Home, PageAbout } from '../pages'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-mim" element={<PageAbout />} />
    </Routes>
  )
}
