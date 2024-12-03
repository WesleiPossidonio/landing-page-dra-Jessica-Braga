import styled from 'styled-components'

interface HeaderProps {
  stateHeader?: boolean
}

export const ContainerHeaderMenu = styled.header<HeaderProps>`
  width: 100%;
  height: 5.2rem;
  padding: 1rem 3.5rem;
  position: fixed;
  z-index: 999;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme, stateHeader }) =>
    stateHeader ? theme.colors['base-bg'] : 'transparente'};

  > svg {
    display: none;
    z-index: 9999;
  }

  @media (max-width: 970px) {
    > svg {
      display: block;
      color: ${({ theme }) => theme.colors['base-white']};
    }

    padding: 1rem 1.5rem;
  }
`

export const NavDesktop = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 970px) {
    display: none;
  }
`

export const NavLink = styled.a<HeaderProps>`
  font-size: ${({ theme }) => theme.FontSizes['text-regular-m']};
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  text-decoration: none;

  color: ${({ theme, stateHeader }) =>
    stateHeader === true
      ? theme.colors['base-white']
      : theme.colors['base-white']};
  cursor: pointer;

  transition: 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors['base-secundary-bg']};
  }
`

export const ImgLogo = styled.img`
  width: 14rem;
  z-index: 999;

  @media (max-width: 768px) {
    width: 14rem;
  }
`

interface NavMobileProps {
  isOpen: boolean
}

export const NavMobile = styled.nav<NavMobileProps>`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;

  z-index: 99;

  background-color: ${({ theme }) => theme.colors['base-bg']};
`

export const NavLinkMobile = styled(NavLink)`
  font-size: ${({ theme }) => theme.FontSizes['title-regular-m']};
  color: ${({ theme }) => theme.colors['base-white']};
  font-weight: 500;
`
