import { Link } from "react-router-dom";
import styled from "styled-components";

import { featuredHome } from "../../utils/constants";

const FeaturesHomePage = () => {
  return (
    <Wrapper className="" >
      {featuredHome.map((f, index) => {
        return (
          <div className="featured-container" key={f.id}>
            <div className="icon-features">{f.icon}</div>
            <div className="title-features">{f.title}</div>
            <p className="features-description">{f.des}</p>
            <Link className="btn features-btn" to={f.url}>
              {f.text}
            </Link>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default FeaturesHomePage;

const Wrapper = styled.section`
  width: 100%;
  background-color: var(--bg-darker-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 0.9375rem;
  gap: 1.25rem;

  .features-btn {
    background: var(--btn-bg-color);
    padding: 0.625rem;
  }

  .featured-container {
    padding-top: 1.25rem;
    background-color: var(--bg-grey-color);
    width: 90%;
    text-align: center;
    min-height: 300px;
    border-radius: var(--radius-helper);
    .icon-features {
      font-size: 2.5rem;
      color: var(--headers-color);
    }
    .title-features {
      color: var(--headers-color);
      font-size: 30px;
    }
    .features-description {
      color:  var(--paragraphs-secondary-color);
      letter-spacing: 1px;
      padding: 0rem 1.5625rem;
    }
  }

  @media (min-width: 800px) {
    padding: 40px 6.25rem;

    .featured-container {
      width: 70%;
      padding: 1.5625rem 1.25rem;
      padding-bottom: 1.75rem;
      .features-description {
        padding: 0rem 1.875rem;
      }
    }
  }

  @media (min-width: 1100px) {
    flex-direction: row;

    .featured-container {
      width: 28%;
      .features-btn {
        margin-top: 30px;
      }

      .features-description {
        margin: 1.375rem 0rem;
      }
    }
  }
`;
