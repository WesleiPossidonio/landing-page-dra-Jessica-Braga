import styled from 'styled-components'

export const ContainerImages = styled.div`
  width: min(30rem, 40vw);
  height: 32rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors['base-bg']};

  @media (max-width: 768px) {
    width: min(32rem, 75vw);
    height: 25rem;
  }
`

export const Image = styled.img`
  width: min(30rem, 40vw);
  height: 32rem;
  object-fit: cover;
  border-radius: 12px;
  margin: 2rem 0 0 -4rem;

  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;

  @media (max-width: 768px) {
    width: min(32rem, 75vw);
    height: 25rem;
  }
`
