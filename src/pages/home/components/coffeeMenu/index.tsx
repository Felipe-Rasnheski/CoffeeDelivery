import { v4 as uuidv4 } from 'uuid'
import { ActionsBuy } from '../actionsOfCoffeeMenu/Actions'
import { coffees } from './coffeeDescriptions'
import { ListContainer } from './styles'

export function CoffeeMenu() {
  return (
    <ListContainer>
      {coffees.map((coffee) => {
        return (
          <div className="box" key={uuidv4()}>
            <img src={coffee.img} alt="" />
            <div className="tags">
              {coffee.tags.map((tag) => (
                <span key={uuidv4()}>{tag}</span>
              ))}
            </div>
            <h3>{coffee.name}</h3>
            <p>{coffee.description}</p>
            <div className="priceAndCart">
              <strong>
                R$ <span>{coffee.price}</span>
              </strong>
              <ActionsBuy coffeeId={coffee.id} />
            </div>
          </div>
        )
      })}
    </ListContainer>
  )
}
