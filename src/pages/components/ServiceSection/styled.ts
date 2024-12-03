import styled from 'styled-components'

export const ContainerServiceSection = styled.section`
  width: 100%;
  height: 35rem;
  min-height: max-content;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;

  padding: 4rem 3rem 2rem 3rem;

  @media (max-width: 818px) {
    flex-direction: column;
    padding: 3rem 1.5rem;
  }
`

export const ContentText = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 818px) {
    max-width: 100%;
    order: 1;
  }
`

export const ContainerImage = styled.div`
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  @media (max-width: 818px) {
    max-width: 100%;
    order: 2;
  }
`

export const ContentImage = styled.div`
  width: min(30rem, 45vw);
  height: 23rem;

  border: 4px solid ${({ theme }) => theme.colors['base-secundary-bg']};

  @media (max-width: 844px) {
    height: min(23rem, 25vh);
  }

  @media (max-width: 768px) {
    width: 20rem;
  }

  @media (max-width: 600px) {
    height: 13.5rem;
  }

  @media (max-width: 400px) {
    margin-left: -1rem;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 23rem;
  object-fit: cover;

  margin: 1.5rem 0 0 1.5rem;

  @media (max-width: 844px) {
    height: min(23rem, 25vh);
  }

  @media (max-width: 600px) {
    height: 13.5rem;
  }
`
