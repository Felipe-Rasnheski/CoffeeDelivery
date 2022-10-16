import { Route, Routes } from 'react-router-dom'
import { Checkout } from './pages/checkout'
import { CheckoutSuccess } from './pages/checkoutSuccess'
import { Home } from './pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkout/success" element={<CheckoutSuccess />} />
    </Routes>
  )
}
