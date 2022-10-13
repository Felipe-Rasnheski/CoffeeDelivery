import { ActionsContainer } from './styles'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { Pedido } from '../coffeeMenu'

interface ActionsBuyProps {
  coffeeId: number
  handleNewPedido: ({
    coffeeId,
    amount,
    coffeeData: { coffeeImg, coffeeName, coffeePrice },
  }: Pedido) => void
  coffeeImg: string
  coffeeName: string
  coffeePrice: string
}

export function ActionsBuy({
  coffeeId,
  handleNewPedido,
  coffeeImg,
  coffeeName,
  coffeePrice,
}: ActionsBuyProps) {
  const [amount, setAmount] = useState(1)

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
          handleNewPedido({
            coffeeId,
            amount,
            coffeeData: { coffeeImg, coffeeName, coffeePrice },
          })
          setAmount(1)
        }}
      >
        <ShoppingCartSimple />
      </button>
    </ActionsContainer>
  )
}
