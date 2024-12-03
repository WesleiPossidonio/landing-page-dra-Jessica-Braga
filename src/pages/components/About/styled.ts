import styled from 'styled-components'

export const ContainerAbout = styled.section`
  width: 100%;
  height: 40rem;
  min-height: max-content;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;

  padding: 4rem 2rem;

  @media (max-width: 937px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

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

  @media (max-width: 937px) {
    max-width: 100%;
  }
`

export const ContentTitle = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  #crp {
    margin-top: 0.4rem;
  }
`

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  @media (max-width: 937px) {
    margin-left: 10%;
  }

  @media (max-width: 500px) {
    margin-left: 18.5%;
  }
`

export const ContentImage = styled.div`
  width: 20rem;
  height: 25rem;
  border: 4px solid ${({ theme }) => theme.colors['base-secundary-bg']};

  @media (max-width: 630px) {
    width: min(17rem, 50vw);
    height: min(25rem, 28vh);
  }
`

export const Image = styled.img`
  width: 100%;
  height: 25rem;
  object-fit: cover;

  margin: 1.5rem 0 0 -1.5rem;

  @media (max-width: 630px) {
    height: min(25rem, 28vh);
  }
`

export const ContentImageTwo = styled.div`
  width: 13rem;
  height: 14.5rem;

  border: 4px solid ${({ theme }) => theme.colors['base-secundary-bg']};
  position: absolute;

  bottom: -3rem;
  left: -7rem;

  @media (max-width: 630px) {
    width: min(9rem, 35vw);
    height: min(9.5rem, 25vh);

    left: -5rem;
  }
`

export const ImageTwo = styled.img`
  width: 100%;
  height: 14.5rem;
  object-fit: cover;

  margin: 1rem 0 0 -1rem;

  @media (max-width: 630px) {
    height: min(9.5rem, 20vh);
  }
`
