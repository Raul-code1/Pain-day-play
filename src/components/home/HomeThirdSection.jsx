import styled from "styled-components";
import {AiFillShopping} from 'react-icons/ai'

import imgThirdSection from "../../assets/home-page-img-1.jpg";
import { Logo } from "../layout";

const HomeThirdSection = () => {
  return (
    <Wrapper className="section-center">
      <div className="home-third-section-container">
        <div className="third-section-img">
          <img className="img" src={imgThirdSection} alt="PainDayPlay" />
        </div>
        <div className="home-third-section-content">
          <div className="logo-title-third-section">
            <Logo />
            <div className="e-commerce">E-commerce</div>
          </div>
          <p>
            Equipate para tus juegos de paintball, airsoft y laser tag con los
            mejores productos en nuestra tienda en línea!
          </p>
          <p className="second-p">
            Consigue el mejor rendimiento en tus juegos con nuestros productos
            de alta calidad para paintball, airsoft y laser tag
          </p>
          <a href="#" className="btn">
            Ir a E-commerce
            <AiFillShopping />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeThirdSection;

const Wrapper = styled.section`
  .third-section-img {
    overflow: hidden;
    border-radius: var(--radius-helper);
  }

  .home-third-section-content {
    text-align: center;
    padding-top: 1.25rem;
    font-size: 18px;
    .logo,
    .e-commerce {
      font-size: 50px;
    }
    .second-p {
      display: none;
    }
    .btn{
      display: flex;
      align-items: center;
      justify-content: center;
      
    }
  }

  @media (min-width: 800px) {
    .home-third-section-container {
      display: flex;

      .third-section-img {
        width: 50%;
      }

      .home-third-section-content {
        padding: 0rem 50px;
        width: 50%;
        text-align: justify;
        .logo-title-third-section {
          gap: 20px;
        }
        .second-p {
          display: block;
        }

        .btn{
          width: 50%;
        }
      }
    }
  }
`;
