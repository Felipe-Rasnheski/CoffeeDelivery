import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header/Header'
import { LayoutContainer } from './styles'

export function DeafultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
