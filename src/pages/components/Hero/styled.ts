import { styled } from 'styled-components'

import Banner from '../../../assets/Banner.png'
import BannerMobile from '../../../assets/BannerMobile.png'
import BannerUltrawide from '../../../assets/BannerUltraWilde.png'

export const ContainerHero = styled.section`
  width: 100%;
  height: 40rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 3rem;

  background-image: url(${Banner});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 1800px) {
    height: 100vh;
    height: 100dvh;
    background-image: url(${BannerUltrawide});
  }

  @media (max-width: 500px) {
    height: 100vh;
    height: 100dvh;
    background-image: url(${BannerMobile});
    align-items: flex-start;
    padding: 1.8rem;
  }
`

export const ContainerText = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 1800px) {
    margin-left: 7rem;
  }

  @media (max-width: 600px) {
    max-width: 70%;
  }

  @media (max-width: 500px) {
    max-width: 100%;
    margin-top: 7.5rem;
  }
`
