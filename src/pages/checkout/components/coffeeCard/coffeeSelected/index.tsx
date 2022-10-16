import { Minus, Plus, Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CoffeeSelectedContainer } from './styles'

interface CoffeeSelectedProps {
  coffeeName: string
  coffeeId: number
  coffeeImg: string
  coffeeAmount: number
  coffeePrice: string
  setNumberSelectedCoffee: (coffeeId: number, quantityOrdered: number) => void
  handleRemoveOrder: (coffeeId: number) => void
}

export function CoffeeSelected({
  coffeeName,
  coffeeId,
  coffeeImg,
  coffeeAmount,
  coffeePrice,
  setNumberSelectedCoffee,
  handleRemoveOrder,
}: CoffeeSelectedProps) {
  const [quantityOrdered, setQuantityOrderes] = useState(0)

  useEffect(() => {
    setQuantityOrderes(coffeeAmount)
  }, [coffeeAmount])

  function handleQuantityOrdered(action: string) {
    if (action === 'ADD') {
      setQuantityOrderes(quantityOrdered + 1)
      setNumberSelectedCoffee(coffeeId, quantityOrdered + 1)
    } else if (action === 'REMOVE' && quantityOrdered > 1) {
      setQuantityOrderes(quantityOrdered - 1)
      setNumberSelectedCoffee(coffeeId, quantityOrdered - 1)
    }
  }

  return (
    <CoffeeSelectedContainer>
      <div className="boxSelectedCoffee">
        <img src={coffeeImg} alt="" />
        <div>
          <h3>{coffeeName}</h3>
          <div className="align">
            <span className="text-dark">
              <Minus
                size={16}
                onClick={() => handleQuantityOrdered('REMOVE')}
              />
              {quantityOrdered}
              <Plus size={16} onClick={() => handleQuantityOrdered('ADD')} />
            </span>
            <span onClick={() => handleRemoveOrder(coffeeId)}>
              <Trash size={16} />
              REMOVER
            </span>
          </div>
        </div>
      </div>
      <strong>R$ {coffeePrice}</strong>
    </CoffeeSelectedContainer>
  )
}
