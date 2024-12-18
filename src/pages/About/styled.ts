import styled from 'styled-components'

export const ContainerAbout = styled.main`
  width: 100%;
  height: auto;
  min-height: 100dvh;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

export const SectionAbout = styled.section`
  width: 100%;
  max-width: 135rem;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;

  margin: 0 auto;

  padding: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    margin-top: 2rem;
    margin-bottom: 3rem;

    padding: 2rem 1rem;
  }
`

export const ContentText = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors['base-bg']};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`
