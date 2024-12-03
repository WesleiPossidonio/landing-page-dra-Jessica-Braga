import {
  AccordionContent,
  ContainerAcordion,
  ContainerFaq,
  ContainerTitle,
  ContentAcordion,
} from './styled'
import Accordion from '@mui/material/Accordion'

import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { CaretDown } from '@phosphor-icons/react'
import { TextRegular, TitleText } from '../../../components/typograph'

export const Faq = () => {
  return (
    <ContainerFaq>
      <ContainerTitle>
        <TextRegular color="white">FAQ</TextRegular>
        <TitleText size="l">Principais Dúvidas</TitleText>
      </ContainerTitle>

      <ContainerAcordion>
        <ContentAcordion>
          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>O que é psicoterapia?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                A psicoterapia é um tratamento psicológico que envolve conversas
                entre o paciente e o psicólogo, com o objetivo de ajudar a
                pessoa a lidar com questões emocionais, comportamentais e
                mentais. Através de técnicas e abordagens específicas, o
                psicólogo auxilia o paciente a entender e resolver seus
                problemas, promovendo o bem-estar e equilíbrio emocional.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>A psicoterapia online é eficaz?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Sim, estudos comprovam que a psicoterapia online é tão eficaz
                quanto a presencial, oferecendo o mesmo nível de suporte e
                resultados positivos, especialmente quando realizada com
                profissionais qualificados.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Como saber se preciso de psicoterapia?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Se você está enfrentando dificuldades emocionais, como
                ansiedade, depressão, estresse, dificuldades de relacionamento
                ou sentimentos de confusão e insegurança, a psicoterapia pode
                ser uma boa opção. Mesmo quem não está em crise pode buscar a
                terapia para melhorar a qualidade de vida e o autoconhecimento.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Como funciona uma sessão online?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Você pode solicitar um medicamento manipulado através de receita
                médica, entregando-a diretamente na farmácia de manipulação ou
                enviando-a por e-mail. Nossa equipe entrará em contato para
                confirmar os detalhes da sua prescrição.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                A psicoterapia é só para quem tem problemas sérios?
              </Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Não. Psicoterapia é útil tanto para quem enfrenta problemas
                sérios quanto para quem busca melhorar seu autoconhecimento,
                habilidades de enfrentamento ou desenvolver a saúde mental.
                Mesmo em momentos de bem-estar, a terapia pode ser uma
                ferramenta valiosa de prevenção e crescimento pessoal.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Qual a frequência ideal para as sessões?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                A frequência é personalizada, mas geralmente é recomendada uma
                sessão por semana. O psicólogo pode ajustar conforme sua
                evolução e disponibilidade.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ContentAcordion>
      </ContainerAcordion>
    </ContainerFaq>
  )
}
