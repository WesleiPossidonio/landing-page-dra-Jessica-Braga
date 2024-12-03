import { forwardRef, type InputHTMLAttributes } from 'react'

import { InputContaineStyle, InputStyled, InputWrapper } from './styled'
import { TextRegular } from '../typograph'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <InputWrapper>
        <InputContaineStyle hasError={error !== undefined && error !== ''}>
          <InputStyled ref={ref} {...props} />
        </InputContaineStyle>
        {error !== undefined && (
          <TextRegular size="sm" color="red">
            {error}
          </TextRegular>
        )}
      </InputWrapper>
    )
  },
)
