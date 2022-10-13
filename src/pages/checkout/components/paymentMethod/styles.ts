import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  background: ${(props) => props.theme['gray-100']};
  margin-top: 0.75rem;
  padding: 2.5rem;
  border-radius: 6px;

  p {
    font-size: 0.875rem;
    line-height: 130%;
  }

  #info > svg {
    color: ${(props) => props.theme.purple};
  }

  .optionsPayment {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  button {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    flex-grow: 1;
    font-size: 12px;
    line-height: 160%;
    color: ${(props) => props.theme['gray-700']};
    background: ${(props) => props.theme['gray-300']};
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;
  }

  .mark {
    border: 1px solid ${(props) => props.theme.purple};
  }
`
