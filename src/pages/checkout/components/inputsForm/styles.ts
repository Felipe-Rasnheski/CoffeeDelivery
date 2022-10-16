import styled from 'styled-components'

export const InputsFormContainer = styled.div`
  label {
    display: flex;
    gap: 0.75rem;
    margin: 1rem;
    color: ${(props) => props.theme['gray-600']};

    input {
      padding: 0.75rem;
      border-radius: 4px;
      background: ${(props) => props.theme['gray-200']};
      border: 1px solid ${(props) => props.theme['gray-300']};
    }

    .flex1 {
      flex-grow: 1;
    }

    .inputWidthMin {
      width: 60px;
    }
  }
`
