import styled from 'styled-components'
import Img from '../../assets/ImagePages.avif'

export const ContainerBannerService = styled.div`
  width: 100%;
  height: 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin: 0 auto;

  background-image: url(${Img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  h1 {
    margin-top: 2rem;
  }

  p {
    cursor: pointer;
  }

  @media (max-width: 425px) {
    height: 15rem;
    h1 {
      font-size: ${({ theme }) => theme.FontSizes['title-regular-m']};
    }
  }
`

export const ContentLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
