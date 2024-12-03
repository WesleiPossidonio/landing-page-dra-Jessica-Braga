import { ContainerWhatsappButton, ImageWhatsapp } from './styled'

import ImgWhatsapp from '../../assets/whatsapp.png'

export const WhatsappButton = () => {
  return (
    <ContainerWhatsappButton href="https://wa.me/5521970721122" target="_blank">
      <ImageWhatsapp
        src={ImgWhatsapp}
        title="Entre em Contato Conosco!"
        alt=""
      />
    </ContainerWhatsappButton>
  )
}
