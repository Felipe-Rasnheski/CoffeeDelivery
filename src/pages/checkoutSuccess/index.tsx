import { CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import Illustration from '../../assets/Illustration.png'
import mapPin from '../../assets/mapPin2.svg'
import timer from '../../assets/timer.svg'
import { OrderContext } from '../../context/OrderContext'
import { Header } from './header/Header'
import { OrderInfoSuccessContainer } from './styles'

export function CheckoutSuccess() {
  const { infoDelivery } = useContext(OrderContext)
  const { address, paymentMethod } = infoDelivery

  return (
    <OrderInfoSuccessContainer>
      <Header />
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div className="content">
        <div className="info">
          <div>
            <span className="mapPin">
              <img src={mapPin} alt="" />
            </span>
            <p>
              Entrega em <strong>{address.rua}</strong>, {address.number} <br />
              {address.bairro} - {address.cidade}, {address.uf}
            </p>
          </div>
          <div>
            <span className="timer">
              <img src={timer} alt="" />
            </span>
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </p>
          </div>
          <div>
            <span className="currencyDollar">
              <CurrencyDollar size={16} />
            </span>
            <p>
              Pagamento na entrega <br />
              <strong>{paymentMethod}</strong>
            </p>
          </div>
        </div>
        <img src={Illustration} alt="" />
      </div>
    </OrderInfoSuccessContainer>
  )
}
