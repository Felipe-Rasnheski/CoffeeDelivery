import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../../../context/OrderContext'
import { PaymentMethodContainer } from './styles'

export function PaymentMethod() {
  const { paymentMethod, setPaymentMethod } = useContext(OrderContext)
  return (
    <PaymentMethodContainer>
      <div className="info" id="info">
        <CurrencyDollar />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>

      <ToggleGroup.Root
        type="single"
        className="optionsPayment"
        onValueChange={setPaymentMethod}
      >
        <ToggleGroup.Item
          value="Cartão de Crédito"
          className={`${paymentMethod === 'Cartão de Crédito' && 'mark'}`}
        >
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="Cartão de Débito"
          className={`${paymentMethod === 'Cartão de Débito' && 'mark'}`}
        >
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="Dinheiro"
          className={`${paymentMethod === 'Dinheiro' && 'mark'}`}
        >
          <Money size={16} />
          DINHEIRO
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </PaymentMethodContainer>
  )
}
