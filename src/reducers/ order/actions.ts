import { Order } from '../../context/OrderContext'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_ORDER = 'ADD_NEW_ORDER',
  UPDATE_ORDER = 'UPDATE_ORDER',
  UPDATE_ORDER_CHECKOUT = 'UPDATE_ORDER_CHECKOUT',
  DELETE_ORDER = 'DELETE_ORDER',
  CLEAR_ORDER = 'CLEAR_ORDER',
  ADD_PAYMENT_METHOD = 'ADD_PAYMENT_METHOD',
}

export function actionAddNewOrder(newCoffeeOrder: Order) {
  return {
    type: ActionTypes.ADD_NEW_ORDER,
    payload: {
      newCoffeeOrder,
    },
  }
}

export function actionUpdateOrder(updatedOrder: Order[]) {
  return {
    type: ActionTypes.UPDATE_ORDER,
    payload: {
      updatedOrder,
    },
  }
}

export function actionDeleteOrder(updatedOrder: Order[]) {
  return {
    type: ActionTypes.DELETE_ORDER,
    payload: {
      updatedOrder,
    },
  }
}

export function actionAddPaymentMethod(value: string) {
  return {
    type: ActionTypes.ADD_PAYMENT_METHOD,
    payload: {
      value,
    },
  }
}
