import styled from 'styled-components'

export const IntroContainer = styled.div`
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
      color: ${(props) => props.theme['gray-900']};
      line-height: 130%;
    }

    h1 + p {
      margin-top: 1rem;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme['gray-800']};
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
          background: ${(props) => props.theme['yellow-dark']};
        }
      }

      div:nth-child(2) {
        span {
          background: ${(props) => props.theme['gray-700']};
        }
      }

      div:nth-child(3) {
        span {
          background: ${(props) => props.theme.yellow};
        }
      }

      div:nth-child(4) {
        span {
          background: ${(props) => props.theme.purple};
        }
      }
    }
  }
`
