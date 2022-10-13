import americano from './img/CoffeeAmericano.png'
import árabe from './img/CoffeeÁrabe.png'
import capuccino from './img/CoffeeCapuccino.png'
import chocolateHot from './img/CoffeeChocolateQuente.png'
import cubano from './img/CoffeeCubano.png'
import expresso from './img/CoffeeExpresso.png'
import expressoCremoso from './img/CoffeeExpressoCremoso.png'
import havaiano from './img/CoffeeHavaiano.png'
import iced from './img/CoffeeIced.png'
import irlandês from './img/CoffeeIrlandês.png'
import latte from './img/CoffeeLatte.png'
import macchiato from './img/CoffeeMacchiato.png'
import mochaccino from './img/CoffeeMochaccino.png'
import whithMilk from './img/CoffeeWhithMilk.png'

export const cafes = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    coffeeImg: expresso,
    tags: ['Tradicional'],
    description: 'O tradicional feito com água quente e grãos moidos',
    price: '9,99',
  },
  {
    id: 2,
    name: 'Expresso Americano',
    coffeeImg: americano,
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,99',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    coffeeImg: expressoCremoso,
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,99',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    coffeeImg: iced,
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,99',
  },
  {
    id: 5,
    name: 'Café com Leite',
    coffeeImg: whithMilk,
    tags: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '11,99',
  },
  {
    id: 6,
    name: 'Latte',
    coffeeImg: latte,
    tags: ['Tradicional', 'Com leite'],
    description: 'Uma dose de café expresso com o dobro de espuma cremosa',
    price: '11,99',
  },
  {
    id: 7,
    name: 'Capuccino',
    coffeeImg: capuccino,
    tags: ['Tradicional', 'Com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '13,99',
  },
  {
    id: 8,
    name: 'Macchiato',
    coffeeImg: macchiato,
    tags: ['Tradicional', 'Com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '13,99',
  },
  {
    id: 9,
    name: 'Macaccino',
    coffeeImg: mochaccino,
    tags: ['Tradicional', 'Com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '11,99',
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    coffeeImg: chocolateHot,
    tags: ['Especial', 'Com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '11,99',
  },
  {
    id: 11,
    name: 'Cubano',
    coffeeImg: cubano,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '11,99',
  },
  {
    id: 12,
    name: 'Havaiano',
    coffeeImg: havaiano,
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '12,99',
  },
  {
    id: 13,
    name: 'Árabe',
    coffeeImg: árabe,
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '15,99',
  },
  {
    id: 14,
    name: 'Irlandês',
    coffeeImg: irlandês,
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uisque irlandês, açúcar e chantilly',
    price: '15,99',
  },
]
