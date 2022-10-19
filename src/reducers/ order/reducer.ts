import produce from 'immer'
import { Order } from '../../context/OrderContext'
import { ActionTypes } from './actions'

export interface OrderState {
  order: Order[]
  paymentMethod: string
}

export interface OrderAction {
  type: ActionTypes
  payload: {
    newCoffeeOrder?: Order
    updatedOrder?: Order[]
    paymentMethod?: string
  }
}

export function orderReducer(state: OrderState, action: OrderAction) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ORDER: {
      const { newCoffeeOrder } = action.payload

      if (!newCoffeeOrder) return state

      return produce(state, (draft) => {
        draft.order.push(newCoffeeOrder)
      })
    }

    case ActionTypes.UPDATE_ORDER: {
      const { updatedOrder } = action.payload

      if (!updatedOrder) return state

      return produce(state, (draft) => {
        draft.order = updatedOrder
      })
    }

    case ActionTypes.DELETE_ORDER: {
      const { updatedOrder } = action.payload

      if (!updatedOrder) return state

      return produce(state, (draft) => {
        draft.order = updatedOrder
      })
    }

    case ActionTypes.CLEAR_ORDER: {
      return produce(state, (draft) => {
        draft.order = []
      })
    }

    case ActionTypes.ADD_PAYMENT_METHOD: {
      const { paymentMethod } = action.payload

      if (!paymentMethod) return state

      return produce(state, (draft) => {
        draft.paymentMethod = paymentMethod
      })
    }

    default:
      return state
  }
}
