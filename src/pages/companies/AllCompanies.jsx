import styled from "styled-components"

import {  CompaniesContainer, FilterBar } from "../../components/companies"

const AllCompanies = () => {
  return (
    <Wrapper className="section" >
       <h2>Instalaciones Deportivas</h2>
       <FilterBar />
       <CompaniesContainer />
    </Wrapper>
  )
}

export default AllCompanies


const Wrapper=styled.section`
  min-height: 100vh;
  h2{
    text-align: center;
  }
`