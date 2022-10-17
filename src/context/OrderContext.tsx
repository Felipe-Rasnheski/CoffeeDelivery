import { createContext, ReactNode, useReducer, useState } from 'react'
import { actionAddNewOrderOrUpdate } from '../reducers/ order/actions'
import { orderReducer } from '../reducers/ order/reducer'

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
  dispatch: (order: any) => void
  handleNewOrder: (order: NewOrderProps) => void
  paymentMethod: string
  infoDelivery: InfoDeliveryProps
  setInfoDelivery: (address: InfoDeliveryProps) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [infoDelivery, setInfoDelivery] = useState<InfoDeliveryProps>(
    {} as InfoDeliveryProps,
  )

  const [orderState, dispatch] = useReducer(orderReducer, {
    order: [],
    paymentMethod: '',
  })

  const { order, paymentMethod } = orderState

  function handleNewOrder({ coffeeId, amount }: NewOrderProps) {
    const orderAlreadyExists = order.some((order) => order.id === coffeeId)

    dispatch(actionAddNewOrderOrUpdate(orderAlreadyExists, coffeeId, amount))
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        dispatch,
        handleNewOrder,
        paymentMethod,
        infoDelivery,
        setInfoDelivery,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
