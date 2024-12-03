import { BookOpenUser } from '@phosphor-icons/react'
import { TextRegular, TitleText } from '../../../components/typograph'
import {
  CardProtifolio,
  ContainerCard,
  ContainerPortifolio,
  ContainerTitle,
} from './styled'

type listPortifolio = {
  id: number
  yearsCourse?: string
  schoolName: string
  courseName: string
}

interface PortifolioProps {
  listProtifolio: listPortifolio[]
}

export const Portifolio = ({ listProtifolio }: PortifolioProps) => {
  return (
    <ContainerPortifolio>
      <ContainerTitle>
        <BookOpenUser size={50} />
        <TextRegular color="white" weight={600}>
          Formação Profissional
        </TextRegular>
        <TitleText size="l">
          Minha Trajetória <br /> Acadêmica e Especializações
        </TitleText>
      </ContainerTitle>
      <ContainerCard>
        {listProtifolio.map((list) => {
          return (
            <CardProtifolio key={list.id}>
              <TitleText size="s">{list.courseName}</TitleText>
              <TextRegular>
                {list.schoolName} <br /> {list.yearsCourse}
              </TextRegular>
            </CardProtifolio>
          )
        })}
      </ContainerCard>
    </ContainerPortifolio>
  )
}
