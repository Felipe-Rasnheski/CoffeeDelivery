import { coffees } from '../../coffeesDescriptions'
import { Order } from '../../context/OrderContext'
import { ActionTypes } from './actions'

interface OrderState {
  order: Order[]
  paymentMethod: string
}

interface OrderAction {
  type: string
  payload: {
    coffeeId: number
    amount: number
    value: string
  }
}

export function orderReducer(state: OrderState, action: OrderAction) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ORDER:
      {
        const { coffeeId, amount } = action.payload

        const coffeeOrdered = coffees.find((coffee) => coffee.id === coffeeId)

        if (coffeeOrdered) {
          const { name, id, img, price } = coffeeOrdered

          const newCoffeeOrder = {
            name,
            id,
            img,
            price,
            coffeeAmount: amount,
          }

          return {
            ...state,
            order: [...state.order, newCoffeeOrder],
          }
        }
      }
      break

    case ActionTypes.UPDATE_ORDER: {
      const { coffeeId, amount } = action.payload

      const orderUpdated = state.order.map((order) => {
        if (order.id !== coffeeId) return order

        return { ...order, coffeeAmount: order.coffeeAmount + amount }
      })

      return {
        ...state,
        order: orderUpdated,
      }
    }

    case ActionTypes.UPDATE_ORDER_CHECKOUT: {
      const { coffeeId, amount } = action.payload

      const orderUpdated = state.order.map((order) => {
        if (order.id !== coffeeId) return order

        return { ...order, coffeeAmount: amount }
      })

      return {
        ...state,
        order: orderUpdated,
      }
    }

    case ActionTypes.DELETE_ORDER: {
      const { coffeeId } = action.payload

      const orderWithoutDeletedOne = state.order.filter(
        (coffee) => coffee.id !== coffeeId,
      )

      return {
        ...state,
        order: orderWithoutDeletedOne,
      }
    }

    case ActionTypes.CLEAR_ORDER: {
      return {
        ...state,
        order: [],
      }
    }

    case ActionTypes.ADD_PAYMENT_METHOD: {
      const { value } = action.payload

      return {
        ...state,
        paymentMethod: value,
      }
    }

    default:
      return state
  }
}
