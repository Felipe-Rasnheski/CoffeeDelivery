import { House } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import CoffeLogo from '../../../assets/CoffeeLogo.png'
import mapPin from '../../../assets/mapPin.svg'
import { HeaderContainer } from './styles'

export function Header() {
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
      </nav>
    </HeaderContainer>
  )
}
