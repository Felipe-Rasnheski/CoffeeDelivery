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
    value?: string
  }
}

export function orderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ORDER: {
      const { newCoffeeOrder } = action.payload

      return produce(state, (draft) => {
        draft.order.push(newCoffeeOrder)
      })
    }

    case ActionTypes.UPDATE_ORDER: {
      const { updatedOrder } = action.payload

      return produce(state, (draft) => {
        draft.order = updatedOrder
      })
    }

    case ActionTypes.DELETE_ORDER: {
      const { updatedOrder } = action.payload

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
      const { value } = action.payload

      // if (!value) return state

      return produce(state, (draft) => {
        draft.paymentMethod = value
      })
    }

    default:
      return state
  }
}
