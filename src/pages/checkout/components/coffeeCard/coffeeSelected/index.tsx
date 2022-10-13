import { Minus, Plus, Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CoffeeSelectedContainer } from './styles'

interface CoffeeSelectedProps {
  coffeeData: {
    coffeeImg: string
    coffeeName: string
    coffeePrice: string
  }
  coffeeAmount: number
  coffeeId: number
  setNumberSelectedCoffee: (coffeeId: number, quantityOrdered: number) => void
  handleRemoveOrder: (coffeeId: number) => void
}

export function CoffeeSelected({
  coffeeData,
  coffeeAmount,
  coffeeId,
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
        <img src={coffeeData.coffeeImg} alt="" />
        <div>
          <h3>{coffeeData.coffeeName}</h3>
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
      <strong>R$ {coffeeData.coffeePrice}</strong>
    </CoffeeSelectedContainer>
  )
}
