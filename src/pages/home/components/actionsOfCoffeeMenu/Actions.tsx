import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { coffees } from '../../../../coffeesDescriptions'
import { OrderContext } from '../../../../context/OrderContext'
import {
  actionAddNewOrder,
  // eslint-disable-next-line prettier/prettier
  actionUpdateOrder
} from '../../../../reducers/ order/actions'
import { ActionsContainer } from './styles'

interface ActionsBuyProps {
  coffeeId: number
}

interface NewOrderProps {
  coffeeId: number
  amount: number
}

export function ActionsBuy({ coffeeId }: ActionsBuyProps) {
  const [amount, setAmount] = useState(1)
  const { order, dispatch } = useContext(OrderContext)

  function handleNewOrder({ coffeeId, amount }: NewOrderProps) {
    const orderAlreadyExists = order.some((order) => order.id === coffeeId)

    if (orderAlreadyExists) {
      const updatedOrder = order.map((order) => {
        if (order.id !== coffeeId) return order

        return { ...order, coffeeAmount: order.coffeeAmount + amount }
      })

      dispatch(actionUpdateOrder(updatedOrder))
    } else {
      const coffeeOrdered = coffees.find((coffee) => coffee.id === coffeeId)

      if (!coffeeOrdered) return
      const { name, id, img, price } = coffeeOrdered

      const newCoffeeOrder = {
        name,
        id,
        img,
        price,
        coffeeAmount: amount,
      }

      dispatch(actionAddNewOrder(newCoffeeOrder))
    }
  }

  return (
    <ActionsContainer>
      <span>
        <Minus className="minus" onClick={() => setAmount(amount - 1)} />
        {amount}
        <Plus onClick={() => setAmount(amount + 1)} />
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
