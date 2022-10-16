import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Order, OrderContext } from '../../../../../context/OrderContext'
import { CoffeeSelectedContainer } from './styles'

interface CoffeeSelectedProps {
  orderedCoffee: Order
}

export function CoffeeSelected({ orderedCoffee }: CoffeeSelectedProps) {
  const { order, setOrder } = useContext(OrderContext)
  const [quantityOrdered, setQuantityOrdered] = useState(
    orderedCoffee.coffeeAmount,
  )

  function handleSetNumberSelectedCoffee(
    coffeeId: number,
    quantityOrdered: number,
  ) {
    if (quantityOrdered < 0) return
    setQuantityOrdered(quantityOrdered)

    const updatedOrder = order.map((coffee) => {
      if (coffee.id === coffeeId) {
        coffee.coffeeAmount = quantityOrdered
        return coffee
      }

      return coffee
    })

    setOrder(updatedOrder)
  }

  function handleRemoveOrder(coffeeId: number) {
    const orderWithoutRemovedOne = order.filter(
      (coffee) => coffee.id !== coffeeId,
    )

    setOrder(orderWithoutRemovedOne)
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
