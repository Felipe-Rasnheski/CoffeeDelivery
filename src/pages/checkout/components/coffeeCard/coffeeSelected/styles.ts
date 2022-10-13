import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0.25rem;

  .boxSelectedCoffee {
    display: flex;
    gap: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
    line-height: 130%;
    cursor: default;

    img {
      height: 64px;
      width: 64px;
    }

    .align {
      display: flex;
    }

    .text-dark {
      cursor: default;
      font-size: 16px;
      color: ${(props) => props.theme['gray-900']};
    }

    span {
      cursor: pointer;
      user-select: none;
      font-size: 12px;
      line-height: 100%;
      border-radius: 6px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      background: ${(props) => props.theme['gray-300']};
      padding: 0.5rem;
      margin: 0.5rem 0.5rem 0.5rem 0;

      svg {
        color: ${(props) => props.theme.purple};
      }

      svg:hover {
        cursor: pointer;
      }
    }
  }

  strong {
    cursor: default;
  }
`
