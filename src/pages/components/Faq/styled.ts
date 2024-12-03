import styled from 'styled-components'
import AccordionSummary from '@mui/material/AccordionSummary'
import { styled as muiStyled } from '@mui/material/styles'

export const ContainerFaq = styled.section`
  width: 100%;
  height: 48rem;
  min-height: max-content;

  padding: 3rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  background-color: ${({ theme }) => theme.colors['base-bg']};

  @media (max-width: 1024px) {
    padding: 2rem;
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`

export const ContainerAcordion = styled.div`
  max-width: 100rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContentAcordion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  padding: 3rem 2rem;

  @media (max-width: 1024px) {
    padding: 0;
  }
`

export const AccordionContent = muiStyled(AccordionSummary)({
  borderRadius: '8px',

  '&:focus': {
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
  },
})
