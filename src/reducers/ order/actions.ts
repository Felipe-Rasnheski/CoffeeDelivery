/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_ORDER = 'ADD_NEW_ORDER',
  UPDATE_ORDER = 'UPDATE_ORDER',
  UPDATE_ORDER_CHECKOUT = 'UPDATE_ORDER_CHECKOUT',
  DELETE_ORDER = 'DELETE_ORDER',
  CLEAR_ORDER = 'CLEAR_ORDER',
  ADD_PAYMENT_METHOD = 'ADD_PAYMENT_METHOD',
}

export function actionAddNewOrderOrUpdate(
  orderAlreadyExists: boolean,
  coffeeId: number,
  amount: number,
) {
  return {
    type: orderAlreadyExists
      ? ActionTypes.UPDATE_ORDER
      : ActionTypes.ADD_NEW_ORDER,
    payload: {
      coffeeId,
      amount,
    },
  }
}

export function actionUpdateOrderCheckout(
  coffeeId: number,
  quantityOrdered: number,
) {
  return {
    type: ActionTypes.UPDATE_ORDER_CHECKOUT,
    payload: {
      coffeeId,
      amount: quantityOrdered,
    },
  }
}

export function actionDeleteOrder(coffeeId: number) {
  return {
    type: ActionTypes.DELETE_ORDER,
    payload: {
      coffeeId,
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
