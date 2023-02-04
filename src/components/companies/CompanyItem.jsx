import styled from "styled-components";
import { FiTrash } from "react-icons/fi";
import { GrEdit } from "react-icons/gr";
import { useDispatch } from "react-redux";

import { deleteCompanyAdminThunk } from "../../feautres/userAdmin/userAdminThunk";
import { Link } from "react-router-dom";

const CompanyItem = ({ _id, name }) => {
  const dispatch = useDispatch();
  //todo:delete company function
  return (
    <Wrapper>
      <p>
        Nombre: <span>{name}</span>
      </p>
      <div className="companies-btns-admin">
        <div className="edit-admin-btn">
          <Link to="/admin/dashboard/create-update">
            <GrEdit />
          </Link>
        </div>
        <div className="delete-admin-btn">
          <FiTrash />
        </div>
      </div>
    </Wrapper>
  );
};

export default CompanyItem;

const Wrapper = styled.div`
  background-color: white;
  border-radius: var(--radius-helper);
  padding: 0.625rem;

  p {
    color: black;
    font-weight: bold;
    span {
      font-weight: 400;
    }
  }

  .companies-btns-admin {
    display: flex;
    justify-content: center;
    gap: 20%;
    div {
      cursor: pointer;
    }

    .delete-admin-btn {
      color: red;
    }
  }
`;
