import { ReactNode, ButtonHTMLAttributes } from 'react'
import { ContainerButton } from './styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  btnLarge: boolean
  bgColor: 'bg' | 'white' | 'secundary-bg'
}

export const Button = ({
  children,
  btnLarge,
  bgColor,
  ...rest
}: ButtonProps) => {
  return (
    <ContainerButton btnLarge={btnLarge} bgColor={bgColor} {...rest}>
      {children}
    </ContainerButton>
  )
}
