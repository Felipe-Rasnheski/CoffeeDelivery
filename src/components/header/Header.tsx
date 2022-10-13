import { HeaderContainer } from './styles'
import mapPin from '../../assets/mapPin.svg'
import shoppingCart from '../../assets/shoppingCart.svg'
import CoffeLogo from '../../assets/CoffeeLogo.png'
import { NavLink } from 'react-router-dom'
import { Pedido } from '../../pages/home/components/coffeeMenu'
import { useState } from 'react'

function getOrder() {
  const orderJSON = localStorage.getItem(
    '@iginite-CoffeeDelivery:OrderList-1.0.0',
  )

  if (orderJSON) {
    return JSON.parse(orderJSON)
  }

  return []
}

export function Header() {
  const [order, setOrder] = useState<Pedido[]>([])

  function handleCheckout() {
    const newOrder = getOrder()

    setOrder(newOrder)
  }

  return (
    <HeaderContainer>
      <img src={CoffeLogo} alt="" />
      <nav>
        <NavLink to="/" title="localização">
          <img src={mapPin} alt="" />
          Marcelândia, MT
        </NavLink>
        <NavLink
          to="/checkout"
          className="shoppingCart"
          onClick={handleCheckout}
          title="Carrinho de compras"
        >
          <div>
            <img src={shoppingCart} alt="" />
          </div>
        </NavLink>
        <span className={order.length > 0 ? 'hasOrder' : 'none'}>
          {order.length}
        </span>
      </nav>
    </HeaderContainer>
  )
}
