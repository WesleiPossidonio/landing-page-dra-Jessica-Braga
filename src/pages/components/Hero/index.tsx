import { Button } from '../../../components'
import { TextRegular, TitleText } from '../../../components/typograph'
import { ContainerHero, ContainerText } from './styled'

export const Hero = () => {
  return (
    <ContainerHero id="home">
      <ContainerText>
        <TitleText size="xl" color="secundary-bg">
          Transforme desafios em equilíbrio emocional.
        </TitleText>
        <TextRegular color="white">
          Cuide de sua mente, encontre sua força interior e viva com mais
          equilíbrio e bem-estar.
        </TextRegular>
        <Button bgColor="secundary-bg" btnLarge={false}>
          Saiba Mais!
        </Button>
      </ContainerText>
    </ContainerHero>
  )
}
