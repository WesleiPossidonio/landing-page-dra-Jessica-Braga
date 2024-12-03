import ImgAbout from '../../../assets/drajessica-about2.jpg'
import ImgAbout2 from '../../../assets/drajessica-about.jpg'

import { Button } from '../../../components'
import { TextRegular, TitleText } from '../../../components/typograph'
import {
  ContentImage,
  ContainerAbout,
  ContentText,
  Image,
  ContainerImage,
  ContentImageTwo,
  ImageTwo,
  ContentTitle,
} from './styled'

export const About = () => {
  return (
    <ContainerAbout>
      <ContentText>
        <ContentTitle>
          <TextRegular size="sm" color="bg" weight={600}>
            - SOBRE MIM
          </TextRegular>
          <TitleText size="l"> Dra Jéssica Braga</TitleText>
          <TextRegular color="bg" weight={500} id="crp">
            CRP 123/0582
          </TextRegular>
        </ContentTitle>

        <TextRegular>
          Formada pela Estácio de Sá, com especialização em Terapia
          Cognitivo-Comportamental pela PUC/RS, e capacitação em Psico-Oncologia
          e Neurociência, oferece um suporte psicológico atualizado e focado no
          bem-estar emocional.
        </TextRegular>
        <Button bgColor="bg" btnLarge={false}>
          Saiba Mais!
        </Button>
      </ContentText>

      <ContainerImage>
        <ContentImage>
          <Image src={ImgAbout} />
        </ContentImage>

        <ContentImageTwo>
          <ImageTwo src={ImgAbout2} />
        </ContentImageTwo>
      </ContainerImage>
    </ContainerAbout>
  )
}
