import styled from 'styled-components'

export const ListContainer = styled.main`
  display: grid;
  gap: 2.5rem 2rem;
  grid-template-columns: auto auto auto auto;
  margin-bottom: 5rem;

  .box {
    display: inline-block;
    background: ${(props) => props.theme['gray-100']};
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
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
        margin-bottom: 1rem;
      }
    }

    h3 {
      font-family: 'Baloo 2', cursive;
      font-weight: 700;
      line-height: 1.625rem;
      font-size: 1.25rem;
      color: ${(props) => props.theme['gray-800']};
      margin-bottom: 0.5rem;
    }

    p {
      color: ${(props) => props.theme['gray-600']};
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
          color: ${(props) => props.theme['gray-700']};
          font-family: 'Baloo 2', cursive;
          line-height: 2rem;
          font-size: 1.5rem;
          font-weight: 800;
        }
      }
    }
  }
`
