import HomeImg from '../../../../assets/HomeImg.svg'
import timer from '../../../../assets/timer.svg'
import shoppingCart from '../../../../assets/shoppingCart2.svg'
import packageDelivery from '../../../../assets/package.svg'
import coffee from '../../../../assets/coffee.svg'
import { IntroContainer } from './styles'

export function IntroCoffee() {
  return (
    <IntroContainer>
      <div className="intro">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div className="description">
          <div>
            <span>
              <img src={shoppingCart} alt="" />
            </span>
            <p>Compra simples e segura</p>
          </div>
          <div>
            <span>
              <img src={packageDelivery} alt="" />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <span>
              <img src={timer} alt="" />
            </span>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <span>
              <img src={coffee} alt="" />
            </span>
            <p>O café chega fresquinho até você</p>
          </div>
        </div>
      </div>
      <img src={HomeImg} alt="" />
    </IntroContainer>
  )
}
