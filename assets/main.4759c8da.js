import{s as p,r as g,j as o,a as t,F as h,I as v,b as A,W as w,c as D,R as L}from"./CurrencyDollar.esm.c1191ddb.js";import{r as H,N as b,O,M,P as I,v as C,R as q,a as x,C as S,B as T}from"./checkout.b6f25634.js";import{t as B,C as N}from"./checkoutSuccess.5940420b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var y={},k=H.exports;y.createRoot=k.createRoot,y.hydrateRoot=k.hydrateRoot;const R=p.header`
  background: ${e=>e.theme.background};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 0;
  position: sticky;
  top: 0;

  img {
    height: 40px;
  }

  nav {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    a {
      padding: 0.625rem;
      display: flex;
      gap: 0.25rem;
      align-items: center;
      color: ${e=>e.theme["purple-dark"]};
      background: ${e=>e.theme["purple-light"]};
      border-radius: 8px;

      img {
        height: 22px;
      }
    }
  }

  .shoppingCart {
    background: ${e=>e.theme["yellow-light"]};
  }

  .hasOrder {
    position: absolute;
    right: -5px;
    top: 25px;
    height: 20px;
    width: 20px;
    text-align: center;
    padding: 2px;
    background: ${e=>e.theme["yellow-dark"]};
    color: ${e=>e.theme.white};
    border-radius: 999px;
  }

  .none {
    display: none;
  }
`,F="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/mapPin.c0d4e46f.svg",P="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/shoppingCart.9e2ec35a.svg",j="data:image/png;base64,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";function z(){const e=localStorage.getItem("@iginite-CoffeeDelivery:OrderList-1.0.0");return e?JSON.parse(e):[]}function K(){const[e,a]=g.exports.useState([]);function n(){const c=z();a(c)}return o(R,{children:[t("img",{src:j,alt:""}),o("nav",{children:[o(b,{to:"/",title:"localiza\xE7\xE3o",children:[t("img",{src:F,alt:""}),"Marcel\xE2ndia, MT"]}),t(b,{to:"/checkout",className:"shoppingCart",onClick:n,title:"Carrinho de compras",children:t("div",{children:t("img",{src:P,alt:""})})}),t("span",{className:e.length>0?"hasOrder":"none",children:e.length})]})]})}const W=p.div`
  margin: 0 8rem;
`;function Y(){return o(W,{children:[t(K,{}),t(O,{})]})}var d=new Map;d.set("bold",function(e){return o(h,{children:[t("circle",{cx:"80",cy:"216",r:"20"}),t("circle",{cx:"184",cy:"216",r:"20"}),t("path",{d:"M42.3,72H221.7l-24.1,84.4A16,16,0,0,1,182.2,168H81.8a16,16,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H12",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});d.set("duotone",function(e){return o(h,{children:[t("path",{d:"M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6Z",opacity:"0.2"}),t("circle",{cx:"80",cy:"216",r:"16"}),t("circle",{cx:"184",cy:"216",r:"16"}),t("path",{d:"M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});d.set("fill",function(){return t(h,{children:t("path",{d:"M96,216a16,16,0,1,1-16-16A16,16,0,0,1,96,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,184,200ZM228.1,67.2a8.1,8.1,0,0,0-6.4-3.2H48.3L40.2,35.6A16.1,16.1,0,0,0,24.8,24H8A8,8,0,0,0,8,40H24.8l9.8,34.1v.2L61,166.6A24.1,24.1,0,0,0,84.1,184h95.8A24.1,24.1,0,0,0,203,166.6l26.4-92.4A8,8,0,0,0,228.1,67.2Z"})})});d.set("light",function(e){return o(h,{children:[t("circle",{cx:"80",cy:"216",r:"14"}),t("circle",{cx:"184",cy:"216",r:"14"}),t("path",{d:"M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});d.set("thin",function(e){return o(h,{children:[t("circle",{cx:"80",cy:"216",r:"12"}),t("circle",{cx:"184",cy:"216",r:"12"}),t("path",{d:"M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});d.set("regular",function(e){return o(h,{children:[t("circle",{cx:"80",cy:"216",r:"16"}),t("circle",{cx:"184",cy:"216",r:"16"}),t("path",{d:"M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var Q=function(a,n){return A(a,n,d)},E=g.exports.forwardRef(function(e,a){return t(v,{...Object.assign({ref:a},e,{renderPath:Q})})});E.displayName="ShoppingCartSimple";const V=E,J=p.div`
  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${e=>e.theme["gray-800"]};
    margin: 2rem 0 3.375rem 0;
  }
`,X="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/HomeImg.deaa454e.svg",Z="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/shoppingCart2.08a83188.svg",G="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/package.eac4c7c0.svg",U="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/coffee.525b6a05.svg",$=p.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: calc(100vh - 8.625rem);

  .intro {
    width: 53%;
    margin-bottom: 4rem;

    h1 {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 3rem;
      color: ${e=>e.theme["gray-900"]};
      line-height: 130%;
    }

    h1 + p {
      margin-top: 1rem;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${e=>e.theme["gray-800"]};
    }

    .description {
      display: flex;
      flex-wrap: wrap;
      margin-top: 3rem;

      div {
        margin-top: 1.25rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.75rem;
        flex-basis: 50%;

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2rem;
          width: 2rem;
          border-radius: 50%;

          img {
            height: 1rem;
            width: 1rem;
          }
        }
      }

      div:nth-child(1) {
        span {
          background: ${e=>e.theme["yellow-dark"]};
        }
      }

      div:nth-child(2) {
        span {
          background: ${e=>e.theme["gray-700"]};
        }
      }

      div:nth-child(3) {
        span {
          background: ${e=>e.theme.yellow};
        }
      }

      div:nth-child(4) {
        span {
          background: ${e=>e.theme.purple};
        }
      }
    }
  }
`;function _(){return o($,{children:[o("div",{className:"intro",children:[t("h1",{children:"Encontre o caf\xE9 perfeito para qualquer hora do dia"}),t("p",{children:"Com o Coffee Delivery voc\xEA recebe seu caf\xE9 onde estiver, a qualquer hora"}),o("div",{className:"description",children:[o("div",{children:[t("span",{children:t("img",{src:Z,alt:""})}),t("p",{children:"Compra simples e segura"})]}),o("div",{children:[t("span",{children:t("img",{src:G,alt:""})}),t("p",{children:"Embalagem mant\xE9m o caf\xE9 intacto"})]}),o("div",{children:[t("span",{children:t("img",{src:B,alt:""})}),t("p",{children:"Entrega r\xE1pida e rastreada"})]}),o("div",{children:[t("span",{children:t("img",{src:U,alt:""})}),t("p",{children:"O caf\xE9 chega fresquinho at\xE9 voc\xEA"})]})]})]}),t("img",{src:X,alt:""})]})}const ee=p.main`
  display: grid;
  gap: 2.5rem 2rem;
  grid-template-columns: auto auto auto auto;
  margin-bottom: 5rem;

  .box {
    display: inline-block;
    background: ${e=>e.theme["gray-100"]};
    border-radius: 6px 36px;
    text-align: center;
    padding: 0 1.25rem;

    img {
      margin-top: -1.25rem;
      margin-bottom: 1rem;
    }

    .tags {
      display: flex;
      flex-direction: row;
      gap: 0.25rem;
      justify-content: center;

      span {
        padding: 0.25rem 0.5rem;
        text-transform: uppercase;
        font-weight: 700;
        border-radius: 8px;
        font-size: 0.625rem;
        line-height: 0.85rem;
        background: ${e=>e.theme["yellow-light"]};
        color: ${e=>e.theme["yellow-dark"]};
        margin-bottom: 1rem;
      }
    }

    h3 {
      font-family: 'Baloo 2', cursive;
      font-weight: 700;
      line-height: 1.625rem;
      font-size: 1.25rem;
      color: ${e=>e.theme["gray-800"]};
      margin-bottom: 0.5rem;
    }

    p {
      color: ${e=>e.theme["gray-600"]};
      font-size: 0.875rem;
      line-height: 1.3rem;
      margin-bottom: 2rem;
    }

    .priceAndCart {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.25rem;
      padding: 0 0.5rem;

      strong {
        line-height: 1.2rem;
        font-size: 0.875rem;

        span {
          color: ${e=>e.theme["gray-700"]};
          font-family: 'Baloo 2', cursive;
          line-height: 2rem;
          font-size: 1.5rem;
          font-weight: 800;
        }
      }
    }
  }
`,te="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/CoffeeAmericano.7a71a5bc.png",ie="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/Coffee\xC1rabe.e262a848.png",re="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/CoffeeCapuccino.1f15e3d0.png",oe="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/CoffeeChocolateQuente.a9aa701d.png",ae="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/CoffeeCubano.e51aaf53.png",ne="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/CoffeeExpresso.00f78a30.png",se="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/CoffeeExpressoCremoso.3fe5753e.png",ce="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/CoffeeHavaiano.56c980b1.png",le="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/CoffeeIced.f48b961e.png",de="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/CoffeeIrland\xEAs.b47f4edb.png",pe="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/CoffeeLatte.838ad081.png",he="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/CoffeeMacchiato.c5fecaf8.png",fe="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/CoffeeMochaccino.f775e309.png",me="https://felipe-rasnheski.github.io/CoffeeDelivery/assets/CoffeeWhithMilk.43d9404f.png",ge=[{id:1,name:"Expresso Tradicional",coffeeImg:ne,tags:["Tradicional"],description:"O tradicional feito com \xE1gua quente e gr\xE3os moidos",price:"9,99"},{id:2,name:"Expresso Americano",coffeeImg:te,tags:["Tradicional"],description:"Expresso dilu\xEDdo, menos intenso que o tradicional",price:"9,99"},{id:3,name:"Expresso Cremoso",coffeeImg:se,tags:["Tradicional"],description:"Caf\xE9 expresso tradicional com espuma cremosa",price:"9,99"},{id:4,name:"Expresso Gelado",coffeeImg:le,tags:["Tradicional","Gelado"],description:"Bebida preparada com caf\xE9 expresso e cubos de gelo",price:"9,99"},{id:5,name:"Caf\xE9 com Leite",coffeeImg:me,tags:["Tradicional","Com Leite"],description:"Meio a meio de expresso tradicional com leite vaporizado",price:"11,99"},{id:6,name:"Latte",coffeeImg:pe,tags:["Tradicional","Com leite"],description:"Uma dose de caf\xE9 expresso com o dobro de espuma cremosa",price:"11,99"},{id:7,name:"Capuccino",coffeeImg:re,tags:["Tradicional","Com leite"],description:"Bebida com canela feita de doses iguais de caf\xE9, leite e espuma",price:"13,99"},{id:8,name:"Macchiato",coffeeImg:he,tags:["Tradicional","Com leite"],description:"Caf\xE9 expresso misturado com um pouco de leite quente e espuma",price:"13,99"},{id:9,name:"Macaccino",coffeeImg:fe,tags:["Tradicional","Com leite"],description:"Caf\xE9 expresso com calda de chocolate, pouco leite e espuma",price:"11,99"},{id:10,name:"Chocolate Quente",coffeeImg:oe,tags:["Especial","Com leite"],description:"Bebida feita com chocolate dissolvido no leite quente e caf\xE9",price:"11,99"},{id:11,name:"Cubano",coffeeImg:ae,tags:["Especial","Alco\xF3lico","Gelado"],description:"Drink gelado de caf\xE9 expresso com rum, creme de leite e hortel\xE3",price:"11,99"},{id:12,name:"Havaiano",coffeeImg:ce,tags:["Especial"],description:"Bebida adocicada preparada com caf\xE9 e leite de coco",price:"12,99"},{id:13,name:"\xC1rabe",coffeeImg:ie,tags:["Especial"],description:"Bebida preparada com gr\xE3os de caf\xE9 \xE1rabe e especiarias",price:"15,99"},{id:14,name:"Irland\xEAs",coffeeImg:de,tags:["Especial","Alco\xF3lico"],description:"Bebida a base de caf\xE9, uisque irland\xEAs, a\xE7\xFAcar e chantilly",price:"15,99"}],ue=p.div`
  display: flex;
  gap: 0.5rem;

  span {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    background: ${e=>e.theme["gray-300"]};
    user-select: none;
    color: ${e=>e.theme["gray-900"]};
    line-height: 1.25rem;

    svg {
      padding: 0.25rem;
      height: 1.6rem;
      width: 1.6rem;
      color: ${e=>e.theme.purple};
    }

    svg:hover {
      color: ${e=>e.theme["purple-dark"]};
      cursor: pointer;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e=>e.theme["purple-dark"]};
    margin: 0;
    height: 2.375rem;
    width: 2.375rem;
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;

    svg {
      color: ${e=>e.theme.white};
      height: 1.375rem;
      width: 1.375rem;

      path {
        fill: ${e=>e.theme.white};
      }
    }
  }

  button:hover {
    background: ${e=>e.theme.purple};
  }
`;function xe({coffeeId:e,handleNewPedido:a,coffeeImg:n,coffeeName:c,coffeePrice:i}){const[r,s]=g.exports.useState(1);function f(m){m==="REMOVE"&&r>1?s(r-1):m==="ADD"&&s(r+1)}return o(ue,{children:[o("span",{children:[t(M,{className:"minus",onClick:()=>f("REMOVE")}),r,t(I,{onClick:()=>f("ADD")})]}),t("button",{onClick:()=>{a({coffeeId:e,amount:r,coffeeData:{coffeeImg:n,coffeeName:c,coffeePrice:i}}),s(1)},children:t(V,{})})]})}function ye(){const[e,a]=g.exports.useState([]);function n(i){const r=JSON.stringify(i);localStorage.setItem("@iginite-CoffeeDelivery:OrderList-1.0.0",r)}g.exports.useEffect(()=>{const i=localStorage.getItem("@iginite-CoffeeDelivery:OrderList-1.0.0");i&&a(JSON.parse(i))},[a]);function c({coffeeId:i,amount:r,coffeeData:{coffeeImg:s,coffeeName:f,coffeePrice:m}}){if(e.some(l=>l.coffeeId===i)){const l=e.map(u=>u.coffeeId!==i?u:{coffeeId:u.coffeeId,amount:u.amount+r,coffeeData:{coffeeImg:s,coffeeName:f,coffeePrice:m}});a(l),n(l)}else{const l={coffeeId:i,amount:r,coffeeData:{coffeeImg:s,coffeeName:f,coffeePrice:m}};a([...e,l]),n([...e,l])}}return t(ee,{children:ge.map(i=>o("div",{className:"box",children:[t("img",{src:i.coffeeImg,alt:""}),t("div",{className:"tags",children:i.tags.map(r=>t("span",{children:r},C()))}),t("h3",{children:i.name}),t("p",{children:i.description}),o("div",{className:"priceAndCart",children:[o("strong",{children:["R$ ",t("span",{children:i.price})]}),t(xe,{coffeeId:i.id,handleNewPedido:c,coffeeImg:i.coffeeImg,coffeeName:i.name,coffeePrice:i.price})]})]},C()))})}function be(){return o(J,{children:[t(_,{}),t("h2",{children:"Nossos caf\xE9s"}),t(ye,{})]})}function Ce(){return t(q,{children:o(x,{path:"/",element:t(Y,{}),children:[t(x,{path:"/",element:t(be,{})}),t(x,{path:"/checkout",element:t(S,{})}),t(x,{path:"/checkout/success",element:t(N,{})})]})})}const ke=w`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${e=>e.theme.background};
    color: ${e=>e.theme["gray-700"]};
    -webkit-font-smoothing: antialiased;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  body, textarea, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`,Ee={background:"#FAFAFA",white:"#FFFFFF",yellow:"#DBAC2C",purple:"#8047F8","gray-100":"#F3F2F2","gray-200":"#EDEDED","gray-300":"#E6E5E5","gray-400":"#D7D5D5","gray-600":"#8D8686","gray-700":"#574F4D","gray-800":"#403937","gray-900":"#272221","yellow-light":"#F1E9C9","yellow-dark":"#C47F17","purple-light":"#EBE5F9","purple-dark":"#4B2995"};function ve(){return o(D,{theme:Ee,children:[t(T,{basename:"https://felipe-rasnheski.github.io/CoffeeDelivery/",children:t(Ce,{})}),t(ke,{})]})}y.createRoot(document.getElementById("root")).render(t(L.StrictMode,{children:t(ve,{})}));
