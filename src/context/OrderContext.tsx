import React, { createContext, ReactNode, useReducer, useState } from 'react'
import { OrderAction, orderReducer } from '../reducers/ order/reducer'

export interface Order {
  name: string
  id: number
  img: string
  price: string
  coffeeAmount: number
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
  dispatch: React.Dispatch<OrderAction>
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

  return (
    <OrderContext.Provider
      value={{
        order,
        dispatch,
        paymentMethod,
        infoDelivery,
        setInfoDelivery,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
