import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getAllCompaniesThunk } from "../../feautres/companies/companiesThunk";
import Loading from "../layout/Loading";
import ComaniesCard from "./ComaniesCard";

const CompaniesContainer = () => {
  const {
    allCompanies,
    isLoading,
    totalActiveCompanies,
    activeCategory,
    activeSort,
  } = useSelector((store) => store.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCompaniesThunk());
  }, [activeCategory, activeSort]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <p>Elementos encontrados: {totalActiveCompanies | 0}</p>
      <div className="companies-grid-container" >
        {allCompanies?.map((company) => {
          return <ComaniesCard key={company._id} {...company} />;
        })}
      </div>
    </Wrapper>
  );
};

export default CompaniesContainer;

const Wrapper = styled.div`
  padding-top: 1.25rem;

  .companies-grid-container{
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: .625rem;
  }

  @media  ( min-width:800px ) {
    .companies-grid-container{
      grid-template-columns: repeat(3,1fr);
    }
  }
  @media  ( min-width:1100px ) {
    .companies-grid-container{
      grid-template-columns: repeat(4,1fr);
    }
  }

`;
