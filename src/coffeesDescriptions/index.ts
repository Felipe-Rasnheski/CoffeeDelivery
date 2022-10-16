import americano from '../assets/imgCoffees/CoffeeAmericano.png'
import capuccino from '../assets/imgCoffees/CoffeeCapuccino.png'
import chocolateHot from '../assets/imgCoffees/CoffeeChocolateQuente.png'
import cubano from '../assets/imgCoffees/CoffeeCubano.png'
import expresso from '../assets/imgCoffees/CoffeeExpresso.png'
import expressoCremoso from '../assets/imgCoffees/CoffeeExpressoCremoso.png'
import havaiano from '../assets/imgCoffees/CoffeeHavaiano.png'
import iced from '../assets/imgCoffees/CoffeeIced.png'
import irlandês from '../assets/imgCoffees/CoffeeIrlandês.png'
import latte from '../assets/imgCoffees/CoffeeLatte.png'
import macchiato from '../assets/imgCoffees/CoffeeMacchiato.png'
import mochaccino from '../assets/imgCoffees/CoffeeMochaccino.png'
import whithMilk from '../assets/imgCoffees/CoffeeWhithMilk.png'
import árabe from '../assets/imgCoffees/CoffeeÁrabe.png'

export const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    img: expresso,
    tags: ['Tradicional'],
    description: 'O tradicional feito com água quente e grãos moidos',
    price: '9,99',
  },
  {
    id: 2,
    name: 'Expresso Americano',
    img: americano,
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,99',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    img: expressoCremoso,
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,99',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    img: iced,
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,99',
  },
  {
    id: 5,
    name: 'Café com Leite',
    img: whithMilk,
    tags: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '11,99',
  },
  {
    id: 6,
    name: 'Latte',
    img: latte,
    tags: ['Tradicional', 'Com leite'],
    description: 'Uma dose de café expresso com o dobro de espuma cremosa',
    price: '11,99',
  },
  {
    id: 7,
    name: 'Capuccino',
    img: capuccino,
    tags: ['Tradicional', 'Com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '13,99',
  },
  {
    id: 8,
    name: 'Macchiato',
    img: macchiato,
    tags: ['Tradicional', 'Com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '13,99',
  },
  {
    id: 9,
    name: 'Macaccino',
    img: mochaccino,
    tags: ['Tradicional', 'Com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '11,99',
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    img: chocolateHot,
    tags: ['Especial', 'Com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '11,99',
  },
  {
    id: 11,
    name: 'Cubano',
    img: cubano,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '11,99',
  },
  {
    id: 12,
    name: 'Havaiano',
    img: havaiano,
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '12,99',
  },
  {
    id: 13,
    name: 'Árabe',
    img: árabe,
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '15,99',
  },
  {
    id: 14,
    name: 'Irlandês',
    img: irlandês,
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uisque irlandês, açúcar e chantilly',
    price: '15,99',
  },
]
