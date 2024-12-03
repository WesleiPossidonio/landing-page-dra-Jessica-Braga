import ImgAbout from '../../../assets/service-img.jpg'

import { Button } from '../../../components'
import { TextRegular, TitleText } from '../../../components/typograph'
import {
  ContentImage,
  ContentText,
  Image,
  ContainerImage,
  ContainerServiceSection,
} from './styled'

export const ServiceSection = () => {
  return (
    <ContainerServiceSection>
      <ContainerImage>
        <ContentImage>
          <Image src={ImgAbout} />
        </ContentImage>
      </ContainerImage>

      <ContentText>
        <TitleText size="l">Psicoterapia On-line</TitleText>
        <TextRegular>
          Cuide da sua saúde mental sem sair de casa. A terapia online oferece o
          mesmo acolhimento e sigilo da presencial, adaptada à sua rotina.
          Superar desafios e alcançar o equilíbrio emocional está ao seu
          alcance. Comece sua jornada hoje mesmo!
        </TextRegular>
        <Button bgColor="bg" btnLarge={false}>
          Marcar Consulta!
        </Button>
      </ContentText>
    </ContainerServiceSection>
  )
}
