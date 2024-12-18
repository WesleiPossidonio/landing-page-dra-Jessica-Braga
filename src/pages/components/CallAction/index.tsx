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
          <a
            href="https://wa.me/5521970721122"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marcar Consulta!
          </a>
        </Button>
      </ContentCallAction>
    </ContainerCallAction>
  )
}
