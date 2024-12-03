import { Button } from '../../../components'
import { TitleText } from '../../../components/typograph'
import { ContainerCallAction, ContentCallAction } from './styled'

export const CallAction = () => {
  return (
    <ContainerCallAction>
      <ContentCallAction>
        <TitleText size="l">
          Sente-se sobrecarregado e sem direção? É hora de transformar sua vida.
          Encontre equilíbrio e clareza com uma consulta{' '}
        </TitleText>
        <Button bgColor="secundary-bg" btnLarge>
          Marcar Consulta!
        </Button>
      </ContentCallAction>
    </ContainerCallAction>
  )
}
