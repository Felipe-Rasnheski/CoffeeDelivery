import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Order, OrderContext } from '../../../../../context/OrderContext'
import {
  actionDeleteOrder,
  // eslint-disable-next-line prettier/prettier
  actionUpdateOrderCheckout
} from '../../../../../reducers/ order/actions'
import { CoffeeSelectedContainer } from './styles'

interface CoffeeSelectedProps {
  orderedCoffee: Order
}

export function CoffeeSelected({ orderedCoffee }: CoffeeSelectedProps) {
  const { dispatch } = useContext(OrderContext)
  const [quantityOrdered, setQuantityOrdered] = useState(
    orderedCoffee.coffeeAmount,
  )

  function handleSetNumberSelectedCoffee(
    coffeeId: number,
    quantityOrdered: number,
  ) {
    if (quantityOrdered < 0) return
    setQuantityOrdered(quantityOrdered)
    console.log(quantityOrdered)

    dispatch(actionUpdateOrderCheckout(coffeeId, quantityOrdered))
  }

  function handleRemoveOrder(coffeeId: number) {
    dispatch(actionDeleteOrder(coffeeId))
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
                    quantityOrdered - 1,
                  )
                }
              />
              {quantityOrdered}
              <Plus
                size={16}
                onClick={() =>
                  handleSetNumberSelectedCoffee(
                    orderedCoffee.id,
                    quantityOrdered + 1,
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
