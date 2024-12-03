import styled from 'styled-components'

export const ContainerCallAction = styled.section`
  width: 100%;
  height: 40rem;
  min-height: max-content;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentCallAction = styled.div`
  width: 90%;
  height: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 1rem;
  border-radius: 16px;
  text-align: center;

  background-color: ${({ theme }) => theme.colors['base-bg']};

  h1 {
    max-width: 80%;
  }
`
