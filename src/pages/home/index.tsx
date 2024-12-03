import { About, CallAction, Faq, Hero, ServiceSection } from '../components'
import { ContactSection } from '../components/Contact'
import { Portifolio } from '../components/Portifolio'
import { ContainerHome } from './styled'

import { listPortifolio } from '../components/listPortifolio'

export const Home = () => {
  return (
    <ContainerHome>
      <Hero />
      <About />
      <Portifolio listProtifolio={listPortifolio} />
      <ServiceSection />
      <CallAction />
      <Faq />
      <ContactSection />
    </ContainerHome>
  )
}
