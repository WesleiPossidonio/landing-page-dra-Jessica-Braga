import { useEffect, useState } from 'react'

import Logo from '../../assets/logo.png'
import {
  ContainerHeaderMenu,
  ImgLogo,
  NavDesktop,
  NavLink,
  NavLinkMobile,
  NavMobile,
} from './styled'
import { List, X } from '@phosphor-icons/react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [stateBackgroundHeader, setStateBackgroundHeader] =
    useState<boolean>(false)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      if (scrollTop > 50) {
        setStateBackgroundHeader(true)
      } else {
        setStateBackgroundHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleStateMenuMobile = () => {
    setIsOpen((open: boolean) => !open)
  }

  // Função para navegação e manipulação de âncoras
  const handleNavigate = (path: string) => {
    if (location.pathname !== '/') {
      navigate(`/${path}`)
    } else {
      window.location.hash = path
    }
    if (isOpen) handleStateMenuMobile()
  }

  return (
    <ContainerHeaderMenu stateHeader={stateBackgroundHeader}>
      <NavLink
        stateHeader={stateBackgroundHeader}
        onClick={() => handleNavigate('#home')}
      >
        <ImgLogo src={Logo} />
      </NavLink>

      {isOpen ? (
        <X size={35} weight="bold" onClick={handleStateMenuMobile} />
      ) : (
        <List size={35} weight="bold" onClick={handleStateMenuMobile} />
      )}

      <NavDesktop>
        <NavLink
          stateHeader={stateBackgroundHeader}
          onClick={() => handleNavigate('#home')}
        >
          Home
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          onClick={() => handleNavigate('#about')}
        >
          Sobre Mim
        </NavLink>

        <NavLink
          stateHeader={stateBackgroundHeader}
          onClick={() => handleNavigate('#services')}
        >
          Serviços
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          onClick={() => handleNavigate('#contact')}
        >
          Contatos
        </NavLink>
      </NavDesktop>

      <NavMobile isOpen={isOpen}>
        <NavLinkMobile onClick={() => handleNavigate('#home')}>
          Home
        </NavLinkMobile>

        <NavLinkMobile onClick={() => handleNavigate('#about')}>
          Sobre Mim
        </NavLinkMobile>

        <NavLinkMobile onClick={() => handleNavigate('#principes')}>
          Serviços
        </NavLinkMobile>

        <NavLinkMobile onClick={() => handleNavigate('#contato')}>
          Contatos
        </NavLinkMobile>
      </NavMobile>
    </ContainerHeaderMenu>
  )
}
