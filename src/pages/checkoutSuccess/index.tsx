import { CurrencyDollar } from 'phosphor-react'
import { useEffect, useState } from 'react'
import Illustration from '../../assets/Illustration.png'
import mapPin from '../../assets/mapPin2.svg'
import timer from '../../assets/timer.svg'
import { Header } from './header/Header'
import { OrderInfoSuccessContainer } from './styles'

interface AddressInfoProps {
  data: {
    cep: string
    rua: string
    number: number
    complemento: string
    bairro: string
    cidade: string
    uf: string
  }
  paymentMethod: string
}

export function CheckoutSuccess() {
  const [addressInfo, setAddressInfo] = useState<AddressInfoProps>()

  useEffect(() => {
    const addressInfoJSON = localStorage.getItem(
      '@iginite-CoffeeDelivery:OrderList-1.0.0',
    )
    if (addressInfoJSON) {
      setAddressInfo(JSON.parse(addressInfoJSON))
    }

    localStorage.setItem('@iginite-CoffeeDelivery:OrderList-1.0.0', '')
  }, [])

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
              Entrega em <strong>{addressInfo && addressInfo.data.rua}</strong>,{' '}
              {addressInfo && addressInfo.data.number} <br />
              {addressInfo && addressInfo.data.cidade},{' '}
              {addressInfo && addressInfo.data.uf}
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
              <strong>{addressInfo && addressInfo.paymentMethod}</strong>
            </p>
          </div>
        </div>
        <img src={Illustration} alt="" />
      </div>
    </OrderInfoSuccessContainer>
  )
}
