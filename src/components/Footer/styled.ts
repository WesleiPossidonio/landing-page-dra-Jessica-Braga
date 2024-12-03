import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  width: 100%;

  height: 18rem;
  min-height: max-content;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 3rem;

  padding: 2rem 3.5rem;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors['base-bg']};

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 1.5rem;
  }
`

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContentIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const BoxIcon = styled.a`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  color: ${({ theme }) => theme.colors['base-text']};

  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background-color: ${({ theme }) => theme.colors['base-secundary-bg']};

  svg {
    color: ${({ theme }) => theme.colors['base-white']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-white']};

    svg {
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`

export const ImageLogo = styled.img`
  width: 9rem;
`

export const ContainerNavigate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContentLink = styled(ContainerNavigate)`
  gap: 0.5rem;

  a {
    color: ${({ theme }) => theme.colors['base-text']};

    &:hover {
      color: ${({ theme }) => theme.colors['base-white']};
    }
  }
`
