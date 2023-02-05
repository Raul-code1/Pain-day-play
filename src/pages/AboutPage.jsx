import styled from "styled-components";

const AboutPage = () => {
  return (
    <Wrapper className="section">
      <h1>Sobre PainDayPlay</h1>
      <article>
        <h2>¿Quienes somos?</h2>
        <p>
          Somos una empresa líder en el mercado de las aplicaciones deportivas.
          Nos esforzamos por brindar a nuestros usuarios la mejor experiencia de
          comparación de precios y reservación para instalaciones deportivas de
          paintball, airsoft y laser tag. Nuestro objetivo es hacer que sea
          fácil para los amantes de estos deportes encontrar la instalación
          perfecta al mejor precio posible
        </p>
        <p>
          Desde nuestro lanzamiento, hemos trabajado incansablemente para
          desarrollar una amplia red de instalaciones deportivas de todo el país
          y ofrecer a nuestros usuarios una experiencia de usuario intuitiva y
          sin problemas. Nos enorgullece poder ayudar a los entusiastas de estos
          deportes a planificar y disfrutar de sus partidas de una manera más
          eficiente y asequible.
        </p>
      </article>
      <article>
        <h2>Vision</h2>
        <p>
          Ser la plataforma líder en el mercado para la búsqueda y reservación
          de instalaciones deportivas de paintball, airsoft y laser tag,
          proporcionando la mejor experiencia para nuestros usuarios y
          asegurándonos de que siempre obtengan el mejor valor
        </p>
        <h2>Mision</h2>
        <p>
          Proporcionar a los amantes de los deportes de paintball, airsoft y
          laser tag una plataforma fácil de usar y confiable para comparar
          precios y reservar sus próximas partidas. Nos comprometemos a brindar
          un servicio excepcional a nuestros usuarios y a colaborar con las
          mejores instalaciones deportivas para garantizar que siempre obtengan
          el mejor precio posible. Nuestro objetivo es hacer que la
          planificación y disfrute de estos deportes sea más accesible y
          asequible para todos.
        </p>
      </article>
    </Wrapper>
  );
};

export default AboutPage;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  h2 {
    color: var(--color-helper-blue);
  }
  @media (min-width: 800px) {
    article {
      width: 40%;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;
