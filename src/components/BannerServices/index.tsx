import { ContainerBannerService, ContentLinks } from './styled'
import { TextRegular, TitleText } from '../typograph'
import { useNavigate } from 'react-router-dom'

interface BannerServicesProps {
  nameServices: string
  services?: boolean
}

export const BannerServices = ({ nameServices }: BannerServicesProps) => {
  const navigate = useNavigate()

  return (
    <ContainerBannerService>
      <TitleText color="white" size="xl">
        {nameServices}
      </TitleText>

      <ContentLinks>
        <TextRegular color="white" weight={600} onClick={() => navigate('/')}>
          Home
        </TextRegular>{' '}
        |
        <TextRegular color="white" weight={600}>
          {nameServices}
        </TextRegular>
      </ContentLinks>
    </ContainerBannerService>
  )
}
