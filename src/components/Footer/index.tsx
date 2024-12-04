import Logo from '../../assets/Logo-footer.png'

import {
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'

import {
  BoxIcon,
  ContainerFooter,
  ContainerLogo,
  ContainerNavigate,
  ContentIcons,
  ContentLink,
  ImageLogo,
} from './styled'
import { TextRegular, TitleText } from '../typograph'

export const Footer = () => {
  return (
    <ContainerFooter>
      <ContainerLogo>
        <ImageLogo src={Logo} alt="Logo" />
        <TextRegular color="text" weight={500} size="s">
          Dra Jessica Braga <br /> © 2024 - Todos os direitos reservados.
        </TextRegular>

        <ContentIcons>
          <BoxIcon href="#" target="_blank">
            <InstagramLogo size={30} />
          </BoxIcon>

          <BoxIcon href="https://wa.me/5521970721122" target="_blank">
            <WhatsappLogo size={30} />
          </BoxIcon>

          <BoxIcon href="#" target="_blank">
            <LinkedinLogo size={30} />
          </BoxIcon>
        </ContentIcons>
      </ContainerLogo>

      <ContainerNavigate>
        <TitleText size="s">Navegação</TitleText>
        <ContentLink>
          <TextRegular weight={500}>
            {' '}
            <a href="#home">Home</a>
          </TextRegular>
          <TextRegular weight={500}>
            {' '}
            <a href="#about">Sobre Nós</a>
          </TextRegular>
          <TextRegular weight={500}>
            {' '}
            <a href="#services">Serviços</a>
          </TextRegular>
          <TextRegular weight={500}>
            {' '}
            <a href="#contact">Contatos</a>
          </TextRegular>
        </ContentLink>
      </ContainerNavigate>

      <ContainerNavigate>
        <TitleText size="s">Contatos</TitleText>
        <ContentLink>
          <TextRegular weight={500}>
            <strong>Tel:</strong>{' '}
            <a href="https://wa.me/5521970721122" target="_blank">
              (21)97072-1122
            </a>
          </TextRegular>
          <TextRegular weight={500}>
            {' '}
            <strong>Email:</strong>{' '}
            <a href="mailto:jessicambraga1@gmail.com">
              jessicambraga1@gmail.com
            </a>
          </TextRegular>
        </ContentLink>
      </ContainerNavigate>
    </ContainerFooter>
  )
}
