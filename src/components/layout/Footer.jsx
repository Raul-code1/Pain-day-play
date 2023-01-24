import styled from "styled-components";
import { Link } from "react-router-dom";


import { navLinks,networksIcons } from "../../utils/constants";
import Logo from "./Logo";



const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container  ">
        <div className="logo-and-policy">
          <Logo />
          <p>
            En PainDayPlay, entendemos la importancia de proteger su privacidad
            y seguimos estrictamente las leyes y regulaciones de privacidad en
            todo momento. Esta política de privacidad se aplica a todos los
            servicios ofrecidos por nuestra empresa y explica cómo recopilamos,
            usamos y protegemos la información que usted proporciona.
          </p>
        </div>
        <div className="nav-links-footer">
          {navLinks.map((l) => (
            <Link className="link" key={l.id} to={l.url}>
              {l.text}
            </Link>
          ))}
          <a href="#" className="link" >E-commerce</a>
        </div>
        <div className="network-icons">
          {networksIcons.map((i, index) => (
            <a href="#" key={index}>
              {i}
            </a>
          ))}
        </div>
      </div>
      <p className="copyright-p">
        copyright &copy; {new Date().getUTCFullYear()}.All Rights Reserved
      </p>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  padding-top: 1.25rem;

  .footer-container {
    width: 90%;
    margin: 0 auto;
    padding: 5rem 0.5rem;
  }
  .logo-and-policy {
    .logo {
      font-size: 3.125rem;
    }
  }

  .nav-links-footer {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .network-icons {
    display: flex;
    gap: 1.25rem;
    font-size: 1.5625rem;
    a {
      color: var(--headers-color);
      transition: var(--transition-default);
    }

    a:hover {
      color: var(--btn-bg-color);
    }
  }

  .copyright-p {
    text-align: center;
  }

  @media (min-width: 800px) {
    .footer-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
      .logo-and-policy {
        grid-column: 1/3;
        p {
          width: 60%;
        }
      }
      .network-icons {
        flex-direction: column;
        gap: 0.625rem;
      }
    }

     .copyright-p {
      font-size: 1.25rem;
    }
  }
`;
