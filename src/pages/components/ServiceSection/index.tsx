import ImgAbout from '../../../assets/service-img.jpg'

import { useEffect } from 'react'
import { Button } from '../../../components'
import { TextRegular, TitleText } from '../../../components/typograph'

import Aos from 'aos'
import 'aos/dist/aos.css'

import {
  ContentImage,
  ContentText,
  Image,
  ContainerImage,
  ContainerServiceSection,
} from './styled'

export const ServiceSection = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <ContainerServiceSection>
      <ContainerImage data-aos="zoom-in" data-aos-duration="1500">
        <ContentImage>
          <Image src={ImgAbout} />
        </ContentImage>
      </ContainerImage>

      <ContentText data-aos="fade-left" data-aos-duration="1500">
        <TitleText size="l">Psicoterapia On-line</TitleText>
        <TextRegular>
          Cuide da sua saúde mental sem sair de casa. A terapia online oferece o
          mesmo acolhimento e sigilo da presencial, adaptada à sua rotina.
          Superar desafios e alcançar o equilíbrio emocional está ao seu
          alcance. Comece sua jornada hoje mesmo!
        </TextRegular>
        <Button bgColor="bg" btnLarge={false}>
          <a href="https://wa.me/5521970721122" target="_blank">
            Marcar Consulta!
          </a>
        </Button>
      </ContentText>
    </ContainerServiceSection>
  )
}
