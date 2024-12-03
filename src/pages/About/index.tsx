import Image from '../../assets/drajessica-about2.jpg'

import { BannerServices, ImagePages } from '../../components'
import { TextRegular, TitleText } from '../../components/typograph'
import { ContactSection } from '../components/Contact'
import { listPortifolio } from '../components/listPortifolio'
import { Portifolio } from '../components/Portifolio'
import { ContainerAbout, ContentText, SectionAbout } from './styled'

export const PageAbout = () => {
  return (
    <ContainerAbout>
      <BannerServices nameServices="Sobre Mim" />
      <SectionAbout>
        <ContentText>
          <TitleText size="l">Dra Jessica Braga</TitleText>
          <TextRegular>
            Psicóloga com experiência em atendimento clínico a todas as faixas
            etárias, especializada em psicanálise e intervenções personalizadas.
            Atuou no AME, acompanhando pacientes e colaborando com equipes
            multidisciplinares para garantir cuidado integral.
          </TextRegular>
          <div>
            <TitleText size="s" color="bg">
              Graduação
            </TitleText>
            <TextRegular>
              Formação em Psicologia pela Universidade Estácio de Sá (2024)
            </TextRegular>
          </div>

          <div>
            <TitleText size="s" color="bg">
              Pós Graduação / Especialização
            </TitleText>
            <TextRegular>
              Pós-graduação/Especialização em Terapia Cognitivo-Comportamental
              (TCC): Pontifícia Universidade Católica PUC/RS (Online), Rio
              Grande do Sul
            </TextRegular>
          </div>

          <div>
            <TitleText size="s" color="bg">
              Certificação
            </TitleText>

            <TextRegular>
              Certificação em Psico-Oncologia Hospitalar: Hospital Israelita
              Albert Einstein, São Paulo (Online), (2023)
            </TextRegular>

            <TextRegular>
              Curso de Neurociência: Instituto Conectomus (Online), (2022)
            </TextRegular>
          </div>
        </ContentText>
        <ImagePages linkImg={Image} />
      </SectionAbout>
      <Portifolio listProtifolio={listPortifolio} />
      <ContactSection />
    </ContainerAbout>
  )
}
