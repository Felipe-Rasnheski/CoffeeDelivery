import { House } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import CoffeLogo from '../../../../assets/CoffeeLogo.png'
import mapPin from '../../../../assets/mapPin.svg'
import { OrderContext } from '../../../../context/OrderContext'
import { HeaderContainer } from './styles'

export function Header() {
  const { order } = useContext(OrderContext)

  return (
    <HeaderContainer>
      <img src={CoffeLogo} alt="" />
      <nav>
        <NavLink to="" title="localização">
          <img src={mapPin} alt="" />
          Marcelândia, MT
        </NavLink>
        <NavLink to="/" className="house" title="Home">
          <div>
            <House size={22} />
          </div>
        </NavLink>
        <span className={order.length > 0 ? 'hasOrder' : 'none'}>
          {order.length}
        </span>
      </nav>
    </HeaderContainer>
  )
}
