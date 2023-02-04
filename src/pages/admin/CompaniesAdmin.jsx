import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllCompaniesAdminThunk } from "../../feautres/userAdmin/userAdminThunk";
import { AiOutlineSearch } from "react-icons/ai";

import { Loading } from "../../components/layout";
import { CompanyItem } from "../../components/companies";
import {
  setText,
  filterCompaniesAction,
} from "../../feautres/userAdmin/userAdminSlice";

const CompaniesAdmin = () => {
  const { isLoadingAdmin, filterCompanies, text } = useSelector(
    (store) => store.userAdmin
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCompaniesAdminThunk());
  }, []);

  useEffect(() => {
    dispatch(filterCompaniesAction());
  }, [text]);

  if (isLoadingAdmin) {
    return <Loading />;
  }

  return (
    <Wrapper className="section">
      <div className="input-admin-container">
        <label>
          Busca entre todas las instalaciones{" "}
          <span>
            <AiOutlineSearch />{" "}
          </span>
        </label>{" "}
        <br />
        <input
          placeholder={``}
          name="text"
          value={text}
          onChange={({ target }) => dispatch(setText(target.value))}
          type="text"
        />
      </div>
      <div className="companies-admin-container">
        {filterCompanies.map((c, i) => (
          <CompanyItem key={c._id} {...c} />
        ))}
      </div>
    </Wrapper>
  );
};

export default CompaniesAdmin;

const Wrapper = styled.section`
  .input-admin-container {
    padding-top: 1.25rem;
    label {
      color: black;
      font-weight: bold;
      margin-bottom: 2px;
    }

    span {
      font-size: 25px;
      color: black;
    }

    input {
      color: black;
      background-color: transparent;
      width: 100%;
      padding: 0.625rem;
      border: none;
      border-radius: var(--radius-helper);
      outline: none;
    }
    border-bottom: 1px solid black;
  }

  .companies-admin-container {
    padding-top: 1.25rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.9375rem;
  }

  @media (min-width: 800px) {
    .companies-admin-container {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 0.9375rem;
    }
  }
`;
