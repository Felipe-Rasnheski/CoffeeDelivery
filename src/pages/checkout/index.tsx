import { zodResolver } from '@hookform/resolvers/zod'
import { MapPinLine } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { Pedido } from '../home/components/coffeeMenu'
import { CoffeeCard } from './components/coffeeCard'
import { PaymentMethod } from './components/paymentMethod'
import { CheckoutForm, CompleteYourOrder } from './styles'

const paymentAddressFormValidationsSchema = zod.object({
  cep: zod.string().min(8, 'CEP inválido').max(9, 'CEP inválido'),
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
  const [order, setOrder] = useState<Pedido[]>([])
  const [totalOrder, setTotalOrder] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState('')

  const { register, handleSubmit } = useForm<NewAddressDeliveryFormData>({
    resolver: zodResolver(paymentAddressFormValidationsSchema),
  })

  const navigate = useNavigate()

  useEffect(() => {
    const orderJSON = localStorage.getItem(
      '@iginite-CoffeeDelivery:OrderList-1.0.0',
    )

    if (orderJSON) {
      const orderList = JSON.parse(orderJSON)
      setOrder(orderList)

      setSumOrder(orderList)
    }
  }, [])

  function setSumOrder(orderList: Pedido[]) {
    if (orderList.length <= 0) {
      setTotalOrder(0)
      return
    }

    const totalOrderSum = orderList.map((order) => {
      const sum = parseFloat(order.coffeeData.coffeePrice.replace(',', '.'))
      return sum * order.amount
    })

    const orderSum = totalOrderSum.reduce(
      (acc, currentValue) => acc + currentValue,
    )

    setTotalOrder(orderSum)
  }

  function setNumberSelectedCoffee(coffeeId: number, quantityOrdered: number) {
    const updatedOrder = order.map((coffee) => {
      if (coffee.coffeeId === coffeeId) {
        coffee.amount = quantityOrdered
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
    const orderWithoutRemovedOne = order.filter((coffee) => {
      return coffee.coffeeId !== coffeeId
    })

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

          <div className="containerInputs">
            <label>
              <input
                type="text"
                id="cep"
                placeholder="CEP"
                {...register('cep')}
              />
            </label>
            <label>
              <input
                type="text"
                id="rua"
                className="inputWidth flex1"
                placeholder="Rua"
                {...register('rua')}
              />
            </label>
            <label>
              <input
                type="number"
                id="number"
                placeholder="Número"
                {...register('number', { valueAsNumber: true })}
              />
              <input
                type="text"
                id="complemento"
                className="inputWidth flex1"
                placeholder="Complemento"
                {...register('complemento')}
              />
            </label>
            <label>
              <input
                type="text"
                id="bairro"
                placeholder="Bairro"
                {...register('bairro')}
              />
              <input
                type="text"
                id="cidade"
                className="inputWidth flex1"
                placeholder="Cidade"
                {...register('cidade')}
              />
              <input
                type="text"
                id="uf"
                className="inputWidthMin"
                placeholder="UF"
                {...register('uf')}
              />
            </label>
          </div>
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
  )
}
