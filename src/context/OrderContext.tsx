import { createContext, ReactNode, useState } from 'react'
import { coffees } from '../coffeesDescriptions'

export interface Order {
  name: string
  id: number
  img: string
  price: string
  coffeeAmount: number
}

interface NewOrderProps {
  coffeeId: number
  amount: number
}

interface OrderContextType {
  order: Order[]
  setOrder: (order: Order[]) => void
  handleNewOrder: (order: NewOrderProps) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order[]>([])

  function handleNewOrder({ coffeeId, amount }: NewOrderProps) {
    const orderAlreadyExists = order.some((order) => order.id === coffeeId)

    const coffeeOrdered = coffees.find((coffee) => coffee.id === coffeeId)

    if (orderAlreadyExists && coffeeOrdered) {
      const orderUpdated = order.map((order) => {
        if (order.id !== coffeeId) return order

        const { name, id, img, price } = coffeeOrdered
        const orderUpdate = {
          name,
          id,
          img,
          price,
          coffeeAmount: order.coffeeAmount + amount,
        }

        return orderUpdate
      })

      setOrder(orderUpdated)
    } else if (coffeeOrdered) {
      const { name, id, img, price } = coffeeOrdered

      const newCoffeeOrder = {
        name,
        id,
        img,
        price,
        coffeeAmount: amount,
      }

      setOrder([...order, newCoffeeOrder])
    }
  }

  return (
    <OrderContext.Provider value={{ order, setOrder, handleNewOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
