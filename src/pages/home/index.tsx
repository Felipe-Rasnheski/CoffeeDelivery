import { HomeContainer } from './styles'
import { IntroCoffee } from './components/introCoffee'
import { CoffeeMenu } from './components/coffeeMenu'

export function Home() {
  return (
    <HomeContainer>
      <IntroCoffee />
      <h2>Nossos cafés</h2>
      <CoffeeMenu />
    </HomeContainer>
  )
}
