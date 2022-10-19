import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { Order, OrderContext } from '../../../../../context/OrderContext'
import {
  actionDeleteOrder,
  // eslint-disable-next-line prettier/prettier
  actionUpdateOrder
} from '../../../../../reducers/ order/actions'
import { CoffeeSelectedContainer } from './styles'

interface CoffeeSelectedProps {
  orderedCoffee: Order
}

export function CoffeeSelected({ orderedCoffee }: CoffeeSelectedProps) {
  const { order, dispatch } = useContext(OrderContext)

  function handleSetNumberSelectedCoffee(
    coffeeId: number,
    quantityOrdered: number,
  ) {
    if (quantityOrdered < 0) return

    const updatedOrder = order.map((order) => {
      if (order.id !== coffeeId) return order

      return { ...order, coffeeAmount: orderedCoffee.coffeeAmount }
    })

    dispatch(actionUpdateOrder(updatedOrder))
  }

  function handleRemoveOrder(coffeeId: number) {
    const updatedOrder = order.filter((coffee) => coffee.id !== coffeeId)

    dispatch(actionDeleteOrder(updatedOrder))
  }

  return (
    <CoffeeSelectedContainer>
      <div className="boxSelectedCoffee">
        <img src={orderedCoffee.img} alt="" />
        <div>
          <h3>{orderedCoffee.name}</h3>
          <div className="align">
            <span className="text-dark">
              <Minus
                size={16}
                onClick={() =>
                  handleSetNumberSelectedCoffee(
                    orderedCoffee.id,
                    orderedCoffee.coffeeAmount - 1,
                  )
                }
              />
              {orderedCoffee.coffeeAmount}
              <Plus
                size={16}
                onClick={() =>
                  handleSetNumberSelectedCoffee(
                    orderedCoffee.id,
                    orderedCoffee.coffeeAmount + 1,
                  )
                }
              />
            </span>
            <span onClick={() => handleRemoveOrder(orderedCoffee.id)}>
              <Trash size={16} />
              REMOVER
            </span>
          </div>
        </div>
      </div>
      <strong>R$ {orderedCoffee.price}</strong>
    </CoffeeSelectedContainer>
  )
}
