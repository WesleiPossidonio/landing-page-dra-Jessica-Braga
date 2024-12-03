import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;   
  font-family: "Montserrat", serif;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
  @media (max-width: 1024px) {
    font-size: 90.5%;
  }

  @media (max-width: 768px) {
    [data-aos=fade-left] {
        transform: translate3d(0, 0, 0);
    }
}

}
`
