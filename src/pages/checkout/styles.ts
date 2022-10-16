import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  max-width: 1366px;
  padding: 0 8rem;
`

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  cursor: default;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 0.25rem;
  }

  h3 {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-800']};
  }

  .container {
    width: 100%;
  }
`
export const CompleteYourOrder = styled.div`
  margin-bottom: 6rem;

  .adressInfo {
    background: ${(props) => props.theme['gray-100']};
    margin-top: 0.75rem;
    padding: 2.5rem;
    border-radius: 6px;

    p {
      font-size: 0.875rem;
      line-height: 130%;
    }
  }

  .info {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 2rem;

    svg {
      height: 1.375rem;
      width: 1.375rem;
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
