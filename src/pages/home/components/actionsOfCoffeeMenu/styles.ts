import styled from 'styled-components'

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    background: ${(props) => props.theme['gray-300']};
    user-select: none;
    color: ${(props) => props.theme['gray-900']};
    line-height: 1.25rem;

    svg {
      padding: 0.25rem;
      height: 1.6rem;
      width: 1.6rem;
      color: ${(props) => props.theme.purple};
    }

    svg:hover {
      color: ${(props) => props.theme['purple-dark']};
      cursor: pointer;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme['purple-dark']};
    margin: 0;
    height: 2.375rem;
    width: 2.375rem;
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.white};
      height: 1.375rem;
      width: 1.375rem;

      path {
        fill: ${(props) => props.theme.white};
      }
    }
  }

  button:hover {
    background: ${(props) => props.theme.purple};
  }
`
