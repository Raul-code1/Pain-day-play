import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setActiveCategory, setActiveSort } from "../../feautres/companies/companiesSlice";
import SelectComponents from "./SelectComponents";

const FilterBar = () => {

  const { categoryOptions , sortOptions }=useSelector((store)=>store.companies)
  const dispatch=useDispatch();

  const onChangeCategory = (value) => dispatch(setActiveCategory(value.value));
  const onChangeSort = (value) =>dispatch(setActiveSort(value.value));

  return (
    <Wrapper>
      <div className="select-category-container">
        <SelectComponents options={categoryOptions} onChange={onChangeCategory} />
      </div>
      <div className="select-sort-container">
        <SelectComponents options={sortOptions} onChange={onChangeSort} />
      </div>
    </Wrapper>
  );
};

export default FilterBar;

const Wrapper = styled.div`

    display: flex;
    gap: 1.25rem;
    
    .select-category-container,
    .select-sort-container {
        width: 50%;
    }
    
    @media  ( min-width:1100px ) {
        
        width: 90%;
        margin: 0 auto;
      .select-category-container,
      .select-sort-container {
        width: 50%;
      }

  }
`;
