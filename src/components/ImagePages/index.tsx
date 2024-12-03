import { ContainerImages, Image } from './styled'

interface ImagePagesProps {
  linkImg: string
}

export const ImagePages = ({ linkImg }: ImagePagesProps) => {
  return (
    <ContainerImages>
      <Image src={linkImg} alt="" />
    </ContainerImages>
  )
}
