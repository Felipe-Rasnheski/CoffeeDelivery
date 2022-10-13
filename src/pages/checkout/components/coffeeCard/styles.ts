import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme['gray-100']};
  margin-top: 0.75rem;
  padding: 1rem 2.5rem 2.5rem;
  border-radius: 6px 44px;

  .totalPayment {
    margin: 1.5rem 0;

    p {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.75rem;
    }

    p:nth-child(3) {
      color: ${(props) => props.theme['gray-800']};
      font-size: 20px;
      line-height: 130%;
      font-weight: 700;
    }
  }

  button {
    width: 100%;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    padding: 0.75rem;
    font-size: 14px;
    font-weight: 700;
    line-height: 160%;
    border-radius: 6px;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
  }
`
