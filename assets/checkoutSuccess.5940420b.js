import{s,r as t,j as a,a as r,C as o}from"./CurrencyDollar.esm.c1191ddb.js";const d="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/Illustration.186921bc.png",c="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/mapPin2.0ad6cd46.svg",l="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/timer.9f102cb4.svg",g=s.div`
  h1 {
    color: ${e=>e.theme["yellow-dark"]};
    font-family: 'Baloo 2', cursive;
  }

  > p {
    font-size: 20px;
    color: ${e=>e.theme["gray-800"]};
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    height: fit-content;
    border: double 1px transparent;
    border-radius: 6px 36px;
    background-image: linear-gradient(#fafafa, #fafafa),
      radial-gradient(circle at top left, #dbac2c 2.61%, #8047f8 98.76%);
    background-origin: border-box;
    background-clip: padding-box, border-box;

    span {
      display: inline-block;
      height: 2rem;
      width: 2rem;
      padding: 0.5rem;
      border-radius: 50%;
    }

    img {
      height: 16px;
      width: 16px;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
  }

  .mapPin {
    background: ${e=>e.theme.purple};
  }

  .timer {
    background: ${e=>e.theme.yellow};
  }

  .currencyDollar {
    background: ${e=>e.theme["yellow-dark"]};
    color: ${e=>e.theme.background};
  }
`;function m(){const[e,n]=t.exports.useState();return t.exports.useEffect(()=>{const i=localStorage.getItem("@iginite-CoffeeDelivery:OrderList-1.0.0");i&&n(JSON.parse(i)),localStorage.setItem("@iginite-CoffeeDelivery:OrderList-1.0.0","")},[]),a(g,{children:[r("h1",{children:"Uhu! Pedido confirmado"}),r("p",{children:"Agora \xE9 s\xF3 aguardar que logo o caf\xE9 chegar\xE1 at\xE9 voc\xEA"}),a("div",{className:"content",children:[a("div",{className:"info",children:[a("div",{children:[r("span",{className:"mapPin",children:r("img",{src:c,alt:""})}),a("p",{children:["Entrega em"," ",r("strong",{children:e?e.data.rua:""})," ,"," ",e?e.data.number:""," ",r("br",{}),e?e.data.cidade:"",","," ",e?e.data.uf:""]})]}),a("div",{children:[r("span",{className:"timer",children:r("img",{src:l,alt:""})}),a("p",{children:["Previs\xE3o de entrega ",r("br",{}),r("strong",{children:"20 min - 30 min"})]})]}),a("div",{children:[r("span",{className:"currencyDollar",children:r(o,{size:16})}),a("p",{children:["Pagamento na entrega ",r("br",{}),r("strong",{children:e?e.paymentMethod:""})]})]})]}),r("img",{src:d,alt:""})]})]})}export{m as C,l as t};
