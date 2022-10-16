import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 1366px;
  padding: 0 8rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${(props) => props.theme['gray-800']};
    margin: 2rem 0 3.375rem 0;
  }
`
