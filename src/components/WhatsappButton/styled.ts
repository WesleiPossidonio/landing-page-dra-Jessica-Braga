import styled from "styled-components";

export const ContainerWhatsappButton = styled.a`
  width: 3.5rem;

  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 2;
  border-radius: 99999px;

  --pulse: 0 0 0 0 #7fff00;
  animation: pulse 3s infinite;
  -webkit-animation: pulse 3s infinite;
  -moz-animation: pulse 3s infinite;
  -o-animation: pulse 3s infinite;

  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: var(--pulse);
    }

    70% {
      -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0);
    }

    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
    }
  }

  @-o-keyframes pulse {
    0% {
      -webkit-box-shadow: var(--pulse);
    }

    70% {
      -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0);
    }

    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
    }
  }

  @-ms-keyframes pulse {
    0% {
      -webkit-box-shadow: var(--pulse);
    }

    70% {
      -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0);
    }

    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
    }
  }

  @-moz-keyframes pulse {
    0% {
      -webkit-box-shadow: var(--pulse);
    }

    70% {
      -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0);
    }

    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
    }
  }

  @keyframes pulse {
    0% {
      -webkit-box-shadow: var(--pulse);
    }

    70% {
      -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0);
    }

    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
    }
  }
`;

export const ImageWhatsapp = styled.img`
  width: 3.5rem;
`;
