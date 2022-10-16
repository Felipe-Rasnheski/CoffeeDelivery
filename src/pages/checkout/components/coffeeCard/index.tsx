import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { OrderContext } from '../../../../context/OrderContext'
import { CoffeeSelected } from './coffeeSelected'
import { CoffeeCardContainer } from './styles'

interface CoffeeCardProps {
  totalOrder: number
}

export function CoffeeCard({ totalOrder }: CoffeeCardProps) {
  const { order } = useContext(OrderContext)

  return (
    <CoffeeCardContainer>
      {order.map((order) => {
        return <CoffeeSelected key={uuidv4()} orderedCoffee={order} />
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

        <button type="submit">Comfirmar pedido</button>
      </div>
    </CoffeeCardContainer>
  )
}
