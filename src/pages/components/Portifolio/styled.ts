import { styled } from 'styled-components'

export const ContainerPortifolio = styled.section`
  width: 100%;
  height: auto;
  min-height: 40rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3rem;
  margin-top: 3.5rem;
  background-color: ${({ theme }) => theme.colors['base-bg']};

  @media (max-width: 800px) {
    height: auto;
    min-height: 100dvh;
  }

  @media (max-width: 500px) {
    padding: 3rem 1.5rem;
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  text-align: center;
`

export const ContainerCard = styled.div`
  width: 100%;
  max-width: 100rem;
  height: max-content;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
  grid-gap: 1.5rem;

  margin-top: 4rem;

  @media (max-width: 800px) {
    height: auto;
    min-height: 100dvh;
  }
`

export const CardProtifolio = styled.div`
  width: 100%;
  height: 16rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  text-align: center;

  border: 2px solid ${({ theme }) => theme.colors['base-secundary-bg']};
  border-radius: 12px;
  padding: 1rem;

  cursor: pointer;

  &:hover {
    background-color: rgba(50, 43, 40, 0.1);
    transform: scale(1.1);
    transition: all 0.5s;
  }
`
