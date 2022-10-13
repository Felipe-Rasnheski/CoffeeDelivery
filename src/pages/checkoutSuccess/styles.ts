import styled from 'styled-components'

export const OrderInfoSuccessContainer = styled.div`
  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', cursive;
  }

  > p {
    font-size: 20px;
    color: ${(props) => props.theme['gray-800']};
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
    background: ${(props) => props.theme.purple};
  }

  .timer {
    background: ${(props) => props.theme.yellow};
  }

  .currencyDollar {
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.background};
  }
`
