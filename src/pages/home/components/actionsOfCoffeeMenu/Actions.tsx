import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { OrderContext } from '../../../../context/OrderContext'
import { ActionsContainer } from './styles'

interface ActionsBuyProps {
  coffeeId: number
}

export function ActionsBuy({ coffeeId }: ActionsBuyProps) {
  const [amount, setAmount] = useState(1)
  const { handleNewOrder } = useContext(OrderContext)

  function handleQuantityOrdered(action: string) {
    if (action === 'REMOVE' && amount > 1) {
      setAmount(amount - 1)
    } else if (action === 'ADD') {
      setAmount(amount + 1)
    }
  }

  return (
    <ActionsContainer>
      <span>
        <Minus
          className="minus"
          onClick={() => handleQuantityOrdered('REMOVE')}
        />
        {amount}
        <Plus onClick={() => handleQuantityOrdered('ADD')} />
      </span>
      <button
        onClick={() => {
          handleNewOrder({
            coffeeId,
            amount,
          })
          setAmount(1)
        }}
      >
        <ShoppingCartSimple />
      </button>
    </ActionsContainer>
  )
}
