import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.background};
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
      color: ${(props) => props.theme['purple-dark']};
      background: ${(props) => props.theme['purple-light']};
      border-radius: 8px;

      img {
        height: 22px;
      }
    }
  }

  .shoppingCart {
    background: ${(props) => props.theme['yellow-light']};
  }

  .hasOrder {
    position: absolute;
    right: -5px;
    top: 25px;
    height: 20px;
    width: 20px;
    text-align: center;
    padding: 2px;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 999px;
  }

  .none {
    display: none;
  }
`
