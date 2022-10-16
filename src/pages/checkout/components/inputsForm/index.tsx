import { useFormContext } from 'react-hook-form'
import { InputsFormContainer } from './styles'

export function InputsForm() {
  const { register } = useFormContext()

  return (
    <InputsFormContainer>
      <label>
        <input type="text" id="cep" placeholder="CEP" {...register('cep')} />
      </label>
      <label>
        <input
          type="text"
          id="rua"
          className="inputWidth flex1"
          placeholder="Rua"
          {...register('rua')}
        />
      </label>
      <label>
        <input
          type="number"
          id="number"
          placeholder="Número"
          {...register('number', { valueAsNumber: true })}
        />
        <input
          type="text"
          id="complemento"
          className="inputWidth flex1"
          placeholder="Complemento"
          {...register('complemento')}
        />
      </label>
      <label>
        <input
          type="text"
          id="bairro"
          placeholder="Bairro"
          {...register('bairro')}
        />
        <input
          type="text"
          id="cidade"
          className="inputWidth flex1"
          placeholder="Cidade"
          {...register('cidade')}
        />
        <input
          type="text"
          id="uf"
          className="inputWidthMin"
          placeholder="UF"
          {...register('uf')}
        />
      </label>
    </InputsFormContainer>
  )
}
