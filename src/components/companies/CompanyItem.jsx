import styled from "styled-components";
import { FiTrash } from "react-icons/fi";
import { GrEdit } from "react-icons/gr";
import { useDispatch } from "react-redux";

import { deleteCompanyAdminThunk } from "../../feautres/userAdmin/userAdminThunk";
import { Link } from "react-router-dom";
import { setActiveCompanyForEdit } from "../../feautres/userAdmin/userAdminSlice";

const CompanyItem = ({
  _id,
  name,
  location,
  description,
  category,
  pricing,
  image,
  contactPhone,
  website,
}) => {
  const dispatch = useDispatch();

  const handleEditCompanyClick = () => {
    const company = {
      name,
      location,
      description,
      category,
      pricing,
      image,
      contactPhone,
      website,
    };
    dispatch(setActiveCompanyForEdit({ id: _id, company }));
  };

  return (
    <Wrapper>
      <p>
        Nombre: <span>{name}</span>
      </p>
      <div className="companies-btns-admin">
        <div className="edit-admin-btn">
          <Link
            to="/admin/dashboard/create-update"
            onClick={handleEditCompanyClick}
          >
            <GrEdit />
          </Link>
        </div>
        <div className="delete-admin-btn">
          <div onClick={() => dispatch(deleteCompanyAdminThunk(_id))}>
            <FiTrash />
          </div>
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
