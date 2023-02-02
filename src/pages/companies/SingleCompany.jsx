import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getSingleCompanyThunk } from "../../feautres/companies/companiesThunk";
import { Loading } from "../../components/layout";
import { formattPrice } from "../../utils/priceFormatter";
import { CompanyComments } from "../../components/companies";

const SingleCompany = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { company, isLoading,comments } = useSelector((store) => store.companies);
  const { isLoadingComments } = useSelector((store) => store.comments);

  useEffect(() => {
    dispatch(getSingleCompanyThunk(id));
  }, [id,isLoadingComments]);

  if (isLoading || isLoadingComments) {
    return <Loading />;
  }

  const imagePath = `http://localhost:4444${company?.image}`;

  return (
    <Wrapper className="section">
      <div className="main-info-container">
        <div className="single-company-img-container">
          <img src={imagePath} className="img" alt={company?.name} />
        </div>
        <div className="name-description-company-container">
          <h3>{company?.name}</h3>
          <p>{company?.description}</p>
          <div className="pricing">
            <h3>Algunos precios y ofertas</h3>
            {company?.pricing.map((p) => {
              return (
                <p key={p._id}>
                  {p.planName}--- {formattPrice(p.price)}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="other-company-info">
        <div>
          <p>
            Localizacion: <span>{company?.location}</span>{" "}
          </p>
          <p>
            Categoria: <span>{company?.category}</span>{" "}
          </p>
          <p>
            Contacto: <span>{company?.contactPhone}</span>{" "}
          </p>
          <p>
            Pagina web:{" "}
            <a href={company?.website} target="_blank">
              {company?.website}
            </a>{" "}
          </p>
        </div>
        <div className="comments">
          
          <CompanyComments comments={comments} companyId={company?._id} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleCompany;

const Wrapper = styled.section`
  min-height: 100vh;

  .single-company-img-container {
    overflow: hidden;
    border-radius: var(--radius-helper);
  }

  h3 {
    color: var(--color-helper-green);
  }

  .other-company-info {
    div{
      width: 100%;
    }
    p {
      color: var(--headers-color);
      letter-spacing: var(--letter-spacing);
      span {
        font-weight: 400;
        color: var(--paragraphs-color);
        text-transform: capitalize;
      }

      a {
        color: var(--btn-bg-color);
        text-decoration: underline;
      }
      a:hover {
        color: var(--color-helper-green);
      }
    }
  }

  

  @media (min-width: 800px) {
    .main-info-container {
      display: flex;
      gap: 5%;
      .single-company-img-container {
        width: 40%;
      }

      .name-description-company-container {
        width: 50%;
        p {
          font-size: 1.25rem;
        }
      }
    }
    p {
      font-size: 20px;
    }
    
    
    .other-company-info {
      display: flex;
      padding-top: 20px;
      
      div {
        width: 50%;
        /* //!Class username-date for CommentCard component */
        .username-date{
          color: var(--color-helper-green);
        }
      }
    }
  }

  .comments{
    width: 50%;
    div{
      width: 100%;
    }
  }

`;
