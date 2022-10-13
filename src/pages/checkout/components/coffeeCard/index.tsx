import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { Pedido } from '../../../home/components/coffeeMenu'
import { CoffeeSelected } from './coffeeSelected'
import { CoffeeCardContainer } from './styles'

interface CoffeeCardProps {
  order: Pedido[]
  totalOrder: number
  setNumberSelectedCoffee: (coffeeId: number, quantityOrdered: number) => void
  handleRemoveOrder: (coffeeId: number) => void
}

export function CoffeeCard({
  order,
  totalOrder,
  setNumberSelectedCoffee,
  handleRemoveOrder,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      {order.map((order) => {
        return (
          <CoffeeSelected
            key={uuidv4()}
            coffeeData={order.coffeeData}
            coffeeAmount={order.amount}
            coffeeId={order.coffeeId}
            setNumberSelectedCoffee={setNumberSelectedCoffee}
            handleRemoveOrder={handleRemoveOrder}
          />
        )
      })}

      <div>
        <div className="totalPayment">
          <p>
            <span>Total de itens</span>
            <span>R$ {totalOrder.toFixed(2).replace('.', ',')}</span>
          </p>
          <p>
            <span>Entrega</span>
            <span>R$ {(totalOrder / 12).toFixed(2).replace('.', ',')}</span>
          </p>
          <p>
            <span>Total</span>
            <span>
              R$
              {(totalOrder + totalOrder / 12).toFixed(2).replace('.', ',')}
            </span>
          </p>
        </div>

        <NavLink to="/checkout/success"></NavLink>
        <button type="submit">Comfirmar pedido</button>
      </div>
    </CoffeeCardContainer>
  )
}
