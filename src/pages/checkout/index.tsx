import { zodResolver } from '@hookform/resolvers/zod'
import { MapPinLine } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { Order, OrderContext } from '../../context/OrderContext'
import { CoffeeCard } from './components/coffeeCard'
import { Header } from './components/header/Header'
import { InputsForm } from './components/inputsForm'
import { PaymentMethod } from './components/paymentMethod'
import { CheckoutContainer, CheckoutForm, CompleteYourOrder } from './styles'

const paymentAddressFormValidationsSchema = zod.object({
  cep: zod.string().min(8).max(9),
  rua: zod.string().min(1),
  number: zod.number().min(1),
  complemento: zod.string(),
  bairro: zod.string().min(1),
  cidade: zod.string().min(1),
  uf: zod.string().min(2).max(2),
})

export type NewAddressDeliveryFormData = zod.infer<
  typeof paymentAddressFormValidationsSchema
>

export function Checkout() {
  const { order, setOrder } = useContext(OrderContext)
  const [totalOrder, setTotalOrder] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState('')

  const newFormAddress = useForm<NewAddressDeliveryFormData>({
    resolver: zodResolver(paymentAddressFormValidationsSchema),
  })

  const { handleSubmit } = newFormAddress

  const navigate = useNavigate()

  useEffect(() => {
    setSumOrder(order)
  }, [order])

  function setSumOrder(orderList: Order[]) {
    if (orderList.length <= 0) {
      setTotalOrder(0)
      return
    }

    const totalOrderSum = orderList.map((order) => {
      const sum = parseFloat(order.price.replace(',', '.'))
      return sum * order.coffeeAmount
    })

    const orderSum = totalOrderSum.reduce(
      (acc, currentValue) => acc + currentValue,
    )

    setTotalOrder(orderSum)
  }

  function setNumberSelectedCoffee(coffeeId: number, quantityOrdered: number) {
    const updatedOrder = order.map((coffee) => {
      if (coffee.id === coffeeId) {
        coffee.coffeeAmount = quantityOrdered
        return coffee
      }

      return coffee
    })

    setOrder(updatedOrder)
    setSumOrder(updatedOrder)

    const orderList = JSON.stringify(updatedOrder)
    localStorage.setItem('@iginite-CoffeeDelivery:OrderList-1.0.0', orderList)
  }

  function handleRemoveOrder(coffeeId: number) {
    const orderWithoutRemovedOne = order.filter(
      (coffee) => coffee.id !== coffeeId,
    )

    setOrder(orderWithoutRemovedOne)
    setSumOrder(orderWithoutRemovedOne)

    const orderList = JSON.stringify(orderWithoutRemovedOne)
    localStorage.setItem('@iginite-CoffeeDelivery:OrderList-1.0.0', orderList)
  }

  function handleDeliveryAddress(data: NewAddressDeliveryFormData) {
    if (paymentMethod !== '') {
      const infoDelivery = JSON.stringify({ data, paymentMethod })

      localStorage.setItem(
        '@iginite-CoffeeDelivery:OrderList-1.0.0',
        infoDelivery,
      )

      navigate('/checkout/success')
    }
  }

  return (
    <CheckoutContainer>
      <Header />
      <CheckoutForm onSubmit={handleSubmit(handleDeliveryAddress)} action="">
        <CompleteYourOrder>
          <h2>Complete seu pedido</h2>
          <div className="adressInfo">
            <div className="info">
              <MapPinLine />
              <div>
                <h3>Endereço da Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <FormProvider {...newFormAddress}>
              <InputsForm />
            </FormProvider>
          </div>

          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </CompleteYourOrder>

        <div className="container">
          <h2>Cafés selecionados</h2>
          <CoffeeCard
            order={order}
            totalOrder={totalOrder}
            setNumberSelectedCoffee={setNumberSelectedCoffee}
            handleRemoveOrder={handleRemoveOrder}
          />
        </div>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
