import { ContainerWhatsappButton, ImageWhatsapp } from './styled'

import ImgWhatsapp from '../../assets/whatsapp.png'

export const WhatsappButton = () => {
  return (
    <ContainerWhatsappButton href="#" target="_blank">
      <ImageWhatsapp
        src={ImgWhatsapp}
        title="Entre em Contato Conosco!"
        alt=""
      />
    </ContainerWhatsappButton>
  )
}
