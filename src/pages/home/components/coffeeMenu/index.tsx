import { ListContainer } from './styles'
import { v4 as uuidv4 } from 'uuid'
import { cafes } from './coffeeDescriptions'
import { ActionsBuy } from '../actionsOfCoffeeMenu/Actions'
import { useEffect, useState } from 'react'

export interface Pedido {
  coffeeId: number
  amount: number
  coffeeData: {
    coffeeImg: string
    coffeeName: string
    coffeePrice: string
  }
}

export function CoffeeMenu() {
  const [order, setOrder] = useState<Pedido[]>([])

  function setOrderLocalStorage(orderDescription: Pedido[]) {
    const orderJSON = JSON.stringify(orderDescription)

    localStorage.setItem('@iginite-CoffeeDelivery:OrderList-1.0.0', orderJSON)
  }

  useEffect(() => {
    const orderJSON = localStorage.getItem(
      '@iginite-CoffeeDelivery:OrderList-1.0.0',
    )

    if (orderJSON) {
      setOrder(JSON.parse(orderJSON))
    }
  }, [setOrder])

  function handleNewPedido({
    coffeeId,
    amount,
    coffeeData: { coffeeImg, coffeeName, coffeePrice },
  }: Pedido) {
    const pedidoAlredyExists = order.some(
      (order) => order.coffeeId === coffeeId,
    )

    if (pedidoAlredyExists) {
      const updatedOrder = order.map((order) => {
        if (order.coffeeId !== coffeeId) return order

        const updateOrder = {
          coffeeId: order.coffeeId,
          amount: order.amount + amount,
          coffeeData: { coffeeImg, coffeeName, coffeePrice },
        }

        return updateOrder
      })

      setOrder(updatedOrder)
      setOrderLocalStorage(updatedOrder)
    } else {
      const newPedido = {
        coffeeId,
        amount,
        coffeeData: { coffeeImg, coffeeName, coffeePrice },
      }
      setOrder([...order, newPedido])
      setOrderLocalStorage([...order, newPedido])
    }
  }

  return (
    <ListContainer>
      {cafes.map((coffee) => {
        return (
          <div className="box" key={uuidv4()}>
            <img src={coffee.coffeeImg} alt="" />
            <div className="tags">
              {coffee.tags.map((tag) => (
                <span key={uuidv4()}>{tag}</span>
              ))}
            </div>
            <h3>{coffee.name}</h3>
            <p>{coffee.description}</p>
            <div className="priceAndCart">
              <strong>
                R$ <span>{coffee.price}</span>
              </strong>
              <ActionsBuy
                coffeeId={coffee.id}
                handleNewPedido={handleNewPedido}
                coffeeImg={coffee.coffeeImg}
                coffeeName={coffee.name}
                coffeePrice={coffee.price}
              />
            </div>
          </div>
        )
      })}
    </ListContainer>
  )
}
