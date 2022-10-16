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

interface InfoDeliveryProps {
  address: {
    number: number
    cep: string
    rua: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
  }
  paymentMethod: string
}

interface OrderContextType {
  order: Order[]
  setOrder: (order: Order[]) => void
  handleNewOrder: (order: NewOrderProps) => void
  paymentMethod: string
  setPaymentMethod: (paymentMethod: string) => void
  infoDelivery: InfoDeliveryProps
  setInfoDelivery: (address: InfoDeliveryProps) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order[]>([])
  const [paymentMethod, setPaymentMethod] = useState('')
  const [infoDelivery, setInfoDelivery] = useState<InfoDeliveryProps>(
    {} as InfoDeliveryProps,
  )

  function handleNewOrder({ coffeeId, amount }: NewOrderProps) {
    const orderAlreadyExists = order.some((order) => order.id === coffeeId)

    const coffeeOrdered = coffees.find((coffee) => coffee.id === coffeeId)

    if (orderAlreadyExists && coffeeOrdered) {
      const orderUpdated = order.map((order) => {
        if (order.id !== coffeeId) return order

        return { ...order, coffeeAmount: order.coffeeAmount + amount }
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
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        handleNewOrder,
        paymentMethod,
        setPaymentMethod,
        infoDelivery,
        setInfoDelivery,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
