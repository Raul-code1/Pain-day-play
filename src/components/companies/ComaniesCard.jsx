import { Link } from "react-router-dom";
import styled from "styled-components";
import { formattPrice } from "../../utils/priceFormatter";

const ComaniesCard = ({ _id, name, location, pricing, image }) => {
  const imagePath = `http://localhost:4444${image}`;

  return (
    <Wrapper>
      <div className="image-company-container">
        <img src={imagePath} alt={name} className="img" />
      </div>
      <div className="info">
        <h5>{name}</h5>
        <div className="feature-card">
          Localizacion:<p>{location}</p>
        </div>
        <div className="feature-card">
          Precios desde <p>{formattPrice(pricing[0].price)}</p>
        </div>
        <Link to={`/companies/${_id}`} className="card-link">
          mas informacion
        </Link>
      </div>
    </Wrapper>
  );
};

export default ComaniesCard;

const Wrapper = styled.div`
  background-color: var(--bg-grey-color);
  width: 90%;
  margin: 0 auto;
  border-radius: var(--radius-helper);
  overflow: hidden;

  .info {
    padding: 0.625rem;
    h5 {
      font-size: 1.25rem;
      color: red;
      font-family: var(--generals-font);
      text-transform: uppercase;
    }

    .card-link {
      color: var(--btn-bg-color);
      text-decoration: underline;
      font-weight: bold;
    }
  

    .feature-card {
      font-weight: bold;
      color: var(--headers-color);
      p {
        font-weight: 300;
        color: var(--paragraphs-color);
      }
    }
  }

  @media (min-width: 1100px) {
    .info {
      .feature-card {
        font-size: 1.125rem;
      }
    }
  }
`;
