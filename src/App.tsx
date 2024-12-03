import { ThemeProvider } from 'styled-components'
import { DefaultThemes } from './styles/theme/default'
import { GlobalStyled } from './styles/globalStyles'
import { Header, WhatsappButton } from './components'
import { Footer } from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/routes'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultThemes}>
        <Header />
        <WhatsappButton />
        <Router />
        <Footer />
        <GlobalStyled />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
