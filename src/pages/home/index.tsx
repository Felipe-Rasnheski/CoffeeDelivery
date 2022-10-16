import { CoffeeMenu } from './components/coffeeMenu'
import { Header } from './components/header/Header'
import { IntroCoffee } from './components/introCoffee'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <IntroCoffee />
      <h2>Nossos cafés</h2>
      <CoffeeMenu />
    </HomeContainer>
  )
}
